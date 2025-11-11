import React, { useState, useEffect } from "react";
import http from "../requests.js";

export default function ContentManagement() {
  const [villas, setVillas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    loadVillas();
  }, []);

  async function loadVillas() {
    setLoading(true);
    setError("");
    try {
      const res = await http.get("/api/villas");
      setVillas(res.data);
    } catch (err) {
      setError("Nuk u ngarkuan vilat!");
    } finally {
      setLoading(false);
    }
  }

  async function handleSave(villa) {
    setError("");
    setSuccess("");
    try {
      await http.put(`/api/villas/${villa.id}`, villa);
      setSuccess("U ruajt me sukses!");
      await loadVillas();
    } catch (err) {
      setError("Gabim gjatë ruajtjes!");
    }
  }

  function handleInputChange(id, field, value) {
    setVillas(villas => villas.map(v => v.id === id ? { ...v, [field]: value } : v));
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Menaxhimi i Përmbajtjes</h1>
      {loading && <div>Loading...</div>}
      {error && <div className="text-red-500">{error}</div>}
      {success && <div className="text-green-600">{success}</div>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {villas.map(villa => (
          <div key={villa.id} className="bg-white p-4 rounded-lg shadow space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Emri i Villas</label>
              <input
                className="w-full border px-2 py-1 rounded"
                value={villa.name}
                onChange={e => handleInputChange(villa.id, "name", e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Përshkrimi</label>
              <textarea
                className="w-full border px-2 py-1 rounded"
                value={villa.description || ""}
                onChange={e => handleInputChange(villa.id, "description", e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Çmimi për natë (€)</label>
              <input
                type="number"
                className="w-full border px-2 py-1 rounded"
                value={villa.price || ""}
                onChange={e => handleInputChange(villa.id, "price", e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Foto (URL)</label>
              <input
                className="w-full border px-2 py-1 rounded"
                value={villa.image || ""}
                onChange={e => handleInputChange(villa.id, "image", e.target.value)}
              />
              {villa.image && (
                <img src={villa.image} alt="villa" className="mt-2 rounded w-full h-32 object-cover" />
              )}
            </div>
            <button
              className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              onClick={() => handleSave(villa)}
            >
              Ruaj Ndryshimet
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
