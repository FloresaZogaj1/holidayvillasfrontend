import React, { useState } from "react";
import axios from "axios";

export default function AdminPanel() {
  const [step, setStep] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [token, setToken] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    setError("");
    try {
      // Simple login: check user exists and password matches
      const res = await axios.post("/api/admin/users", { email, password });
      if (res.data && res.data.role === "admin") {
        setToken("dummy-token"); // TODO: replace with real JWT
        setStep("panel");
      } else {
        setError("Nuk ka akses admin!");
      }
    } catch (err) {
      setError("Login i pasaktë!");
    }
  }

  if (step === "login") {
    return (
      <div className="max-w-sm mx-auto mt-16 p-6 card">
        <h2 className="font-bold text-xl mb-4">Admin Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="input mb-2 w-full"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="input mb-4 w-full"
            required
          />
          {error && <div className="text-red-500 mb-2">{error}</div>}
          <button type="submit" className="btn-primary w-full">Login</button>
        </form>
      </div>
    );
  }

  // Villa management
  const [villas, setVillas] = useState([]);
  const [villaForm, setVillaForm] = useState({ name: "", slug: "", type: "PREMIUM", price: "" });
  const [villaError, setVillaError] = useState("");

  React.useEffect(() => {
    axios.get("/api/admin/villas").then(res => setVillas(res.data));
  }, []);

  async function handleAddVilla(e) {
    e.preventDefault();
    setVillaError("");
    try {
      const res = await axios.post("/api/admin/villas", villaForm);
      setVillas([...villas, res.data]);
      setVillaForm({ name: "", slug: "", type: "PREMIUM", price: "" });
    } catch (err) {
      setVillaError("Gabim në shtim!");
    }
  }

  async function handleDeleteVilla(id) {
    await axios.delete(`/api/admin/villas/${id}`);
    setVillas(villas.filter(v => v.id !== id));
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 card">
      <h2 className="font-bold text-2xl mb-4">Admin Panel</h2>
      <h3 className="font-semibold text-lg mb-2">Menaxho Villat</h3>
      <form onSubmit={handleAddVilla} className="mb-6 flex gap-2 flex-wrap items-end">
        <input type="text" placeholder="Emri" value={villaForm.name} onChange={e => setVillaForm(f => ({ ...f, name: e.target.value }))} className="input" required />
        <input type="text" placeholder="Slug" value={villaForm.slug} onChange={e => setVillaForm(f => ({ ...f, slug: e.target.value }))} className="input" required />
        <select value={villaForm.type} onChange={e => setVillaForm(f => ({ ...f, type: e.target.value }))} className="input">
          <option value="PREMIUM">PREMIUM</option>
          <option value="VIP">VIP</option>
        </select>
        <input type="number" placeholder="Çmimi" value={villaForm.price} onChange={e => setVillaForm(f => ({ ...f, price: e.target.value }))} className="input" required />
        <button type="submit" className="btn-primary">Shto</button>
      </form>
      {villaError && <div className="text-red-500 mb-2">{villaError}</div>}
      <table className="w-full mb-8">
        <thead>
          <tr className="bg-ink/5">
            <th className="p-2">Emri</th>
            <th className="p-2">Slug</th>
            <th className="p-2">Tipi</th>
            <th className="p-2">Çmimi</th>
            <th className="p-2">Fshi</th>
          </tr>
        </thead>
        <tbody>
          {villas.map(v => (
            <tr key={v.id} className="border-b">
              <td className="p-2">{v.name}</td>
              <td className="p-2">{v.slug}</td>
              <td className="p-2">{v.type}</td>
              <td className="p-2">{v.price}</td>
              <td className="p-2"><button className="btn-danger" onClick={() => handleDeleteVilla(v.id)}>Fshi</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Rezervimet dhe përdoruesit do shtohen më poshtë */}
    </div>
  );
}
