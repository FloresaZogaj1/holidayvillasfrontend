import React, { useState, useEffect } from "react";
import http from "../requests";

export default function VillaManagement() {
  const [villas, setVillas] = useState([]);
  const [villaForm, setVillaForm] = useState({ name: "", slug: "", type: "PREMIUM", price: "" });
  const [error, setError] = useState("");

  // Merr vilat nga backend
  useEffect(() => {
    loadVillas();
  }, []);

  async function loadVillas() {
    try {
      const res = await http.get("/api/admin/villas");
      setVillas(res.data);
    } catch (err) {
      console.error("Failed to load villas:", err);
    }
  }

  async function handleAddVilla(e) {
    e.preventDefault();
    setError("");
    try {
      const res = await http.post("/api/admin/villas", villaForm);
      setVillas([...villas, res.data]);
      setVillaForm({ name: "", slug: "", type: "PREMIUM", price: "" });
    } catch (err) {
      setError("Failed to add villa!");
    }
  }

  async function handleDeleteVilla(id) {
    try {
      await http.delete(`/api/admin/villas/${id}`);
      setVillas(villas.filter(v => v.id !== id));
    } catch (err) {
      console.error("Failed to delete villa:", err);
    }
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Villa Management</h1>
      
      {/* Add Villa Form */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Add New Villa</h3>
        <form onSubmit={handleAddVilla} className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <input 
            type="text" 
            placeholder="Villa Name" 
            value={villaForm.name} 
            onChange={e => setVillaForm(f => ({ ...f, name: e.target.value }))} 
            className="input" 
            required 
          />
          <input 
            type="text" 
            placeholder="Slug" 
            value={villaForm.slug} 
            onChange={e => setVillaForm(f => ({ ...f, slug: e.target.value }))} 
            className="input" 
            required 
          />
          <select 
            value={villaForm.type} 
            onChange={e => setVillaForm(f => ({ ...f, type: e.target.value }))} 
            className="input"
          >
            <option value="PREMIUM">PREMIUM</option>
            <option value="VIP">VIP</option>
          </select>
          <input 
            type="number" 
            placeholder="Price (€)" 
            value={villaForm.price} 
            onChange={e => setVillaForm(f => ({ ...f, price: e.target.value }))} 
            className="input" 
            required 
          />
          <button type="submit" className="btn-primary">Add Villa</button>
        </form>
        {error && <div className="text-red-500 mt-2">{error}</div>}
      </div>

      {/* Villas Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">All Villas</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Slug</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {villas.map(villa => (
                <tr key={villa.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">#{villa.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{villa.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{villa.slug}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      villa.type === 'VIP' ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {villa.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">€{villa.price}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button 
                      className="text-red-600 hover:text-red-900"
                      onClick={() => handleDeleteVilla(villa.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}