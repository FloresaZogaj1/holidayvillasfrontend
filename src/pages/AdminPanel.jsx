import React, { useState, useEffect } from "react";
import http from "../requests.js";
import ContentManagement from "./ContentManagement.jsx";

export default function AdminPanel() {
  // ALL useState hooks at the top
  const [step, setStep] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [token, setToken] = useState("");
  const [activeTab, setActiveTab] = useState("dashboard");

Effect(() => {
  const savedToken = localStorage.getItem("admin_token");
  if (savedToken) {
    setToken(savedToken);
    setStep("panel");
  }
}, []);
  // Dashboard data states
  const [stats, setStats] = useState({
    totalVillas: 0,
    totalBookings: 0,
    totalUsers: 0,
    revenue: 0
  });
  const [recentBookings, setRecentBookings] = useState([]);

  // Booking management states
  const [bookings, setBookings] = useState([]);
  const [bookingStats, setBookingStats] = useState({
    total: 0,
    monthly: 0,
    yearly: 0,
    pending: 0,
    paid: 0
  });
  const [bookingLoading, setBookingLoading] = useState(false);

  // User management states
  const [users, setUsers] = useState([]);
  const [userStats, setUserStats] = useState({
    total: 0,
    admins: 0,
    staff: 0,
    recent: 0
  });
  const [userLoading, setUserLoading] = useState(false);
  const [userForm, setUserForm] = useState({
    email: "",
    password: "",
    name: "",
    role: "staff"
  });
  const [userError, setUserError] = useState("");
  const [editingUser, setEditingUser] = useState(null);

  // Villa management states  
  const [villas, setVillas] = useState([]);
  const [villaForm, setVillaForm] = useState({ name: "", slug: "", type: "PREMIUM", price: "" });
  const [villaError, setVillaError] = useState("");

  // ALL useEffect hooks after useState
  useEffect(() => {
    if (step === "panel") {
      http.get("/api/admin/villas").then(res => setVillas(res.data));
      if (activeTab === "bookings") {
        loadBookings();
      }
      if (activeTab === "users") {
        loadUsers();
      }
    }
  }, [step, activeTab]);

  async function loadBookings() {
    setBookingLoading(true);
    try {
      const [bookingsRes, statsRes] = await Promise.all([
        http.get("/api/admin/bookings"),
        http.get("/api/admin/bookings/stats")
      ]);
      setBookings(bookingsRes.data);
      setBookingStats(statsRes.data);
    } catch (err) {
      console.error("Error loading bookings:", err);
    }
    setBookingLoading(false);
  }

  async function loadUsers() {
    setUserLoading(true);
    try {
      const [usersRes, statsRes] = await Promise.all([
        http.get("/api/admin/users"),
        http.get("/api/admin/users/stats")
      ]);
      setUsers(usersRes.data);
      setUserStats(statsRes.data);
    } catch (err) {
      console.error("Error loading users:", err);
    }
    setUserLoading(false);
  }

  async function handleLogin(e) {
  e.preventDefault();
  setError("");
  try {
    console.log("Attempting login...");
    const res = await http.post("/api/admin/login", { email, password });
    console.log("Login response:", res.data);
    if (res.data && res.data.success && res.data.user.role === "admin") {
      setToken(res.data.token);
      localStorage.setItem("admin_token", res.data.token);
      setStep("panel");
      console.log("Login successful, loading dashboard...");
      loadDashboardData();
    } else {
      setError("Nuk ka akses admin!");
    }
  } catch (err) {
    console.error("Login error:", err);
    setError("Login i pasaktë!");
  }
}


  async function loadDashboardData() {
    try {
      console.log("Loading dashboard data...");
      const [villasRes, bookingsRes, usersRes] = await Promise.all([
        http.get("/api/admin/villas"),
        http.get("/api/admin/bookings"),
        http.get("/api/admin/users")
      ]);
      
      console.log("Dashboard data loaded:", { 
        villas: villasRes.data, 
        bookings: bookingsRes.data, 
        users: usersRes.data 
      });
      
      const bookings = bookingsRes.data || [];
      const revenue = bookings.reduce((sum, booking) => sum + (booking.total || 0), 0);
      
      setStats({
        totalVillas: villasRes.data.length,
        totalBookings: bookings.length,
        totalUsers: usersRes.data.length,
        revenue: revenue
      });
      
      setRecentBookings(bookings.slice(-5));
    } catch (err) {
      console.error("Error loading dashboard data:", err);
    }
  }

  if (step === "login") {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-sm w-full p-6 bg-white rounded-lg shadow-lg">
          <h2 className="font-bold text-xl mb-4 text-center">Admin Login</h2>
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
      </div>
    );
  }

  // Dashboard Overview Component
  function DashboardOverview() {
    console.log("Rendering DashboardOverview with stats:", stats);
    return (
      <div className="space-y-6 p-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Dashboard Overview</h1>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <div className="flex items-center">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-600 mb-2">Total Villas</p>
                <p className="text-3xl font-bold text-gray-900">{stats.totalVillas}</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-full">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"></path>
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <div className="flex items-center">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-600 mb-2">Total Bookings</p>
                <p className="text-3xl font-bold text-gray-900">{stats.totalBookings}</p>
              </div>
              <div className="p-3 bg-green-100 rounded-full">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <div className="flex items-center">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-600 mb-2">Total Users</p>
                <p className="text-3xl font-bold text-gray-900">{stats.totalUsers}</p>
              </div>
              <div className="p-3 bg-yellow-100 rounded-full">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <div className="flex items-center">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-600 mb-2">Revenue</p>
                <p className="text-3xl font-bold text-gray-900">€{stats.revenue}</p>
              </div>
              <div className="p-3 bg-purple-100 rounded-full">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Bookings */}
        <div className="bg-white rounded-lg shadow-lg border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Recent Bookings</h3>
          </div>
          <div className="overflow-x-auto">
            {recentBookings.length > 0 ? (
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Guest Email</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Villa</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Check-in</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {recentBookings.map((booking) => (
                    <tr key={booking.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">#{booking.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{booking.guestEmail}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{booking.villaId}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{booking.checkin ? new Date(booking.checkin).toLocaleDateString() : 'N/A'}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">€{booking.total || 0}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="p-6 text-center text-gray-500">
                <p>No bookings found</p>
              </div>
            )}
          </div>
        </div>

        {/* Test Area */}
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Debug Info</h3>
          <div className="bg-gray-100 p-4 rounded text-sm">
            <pre>{JSON.stringify(stats, null, 2)}</pre>
          </div>
        </div>
      </div>
    );
  }

  // Booking Management Component
  function BookingManagement() {
    async function updateBookingStatus(id, newStatus) {
      try {
        await http.put(`/api/admin/bookings/${id}`, { status: newStatus });
        await loadBookings(); // Reload data
      } catch (err) {
        console.error("Error updating booking:", err);
      }
    }

    async function deleteBooking(id) {
      if (confirm("Are you sure you want to delete this booking?")) {
        try {
          await http.delete(`/api/admin/bookings/${id}`);
          await loadBookings(); // Reload data
        } catch (err) {
          console.error("Error deleting booking:", err);
        }
      }
    }

    if (bookingLoading) {
      return (
        <div className="space-y-6 p-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Booking Management</h1>
          <div className="flex justify-center items-center h-64">
            <div className="text-gray-500">Loading bookings...</div>
          </div>
        </div>
      );
    }

    return (
      <div className="space-y-6 p-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Booking Management</h1>
        
        {/* Booking Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
            <p className="text-sm font-medium text-gray-600">Total Bookings</p>
            <p className="text-2xl font-bold text-gray-900">{bookingStats.total}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
            <p className="text-sm font-medium text-gray-600">This Month</p>
            <p className="text-2xl font-bold text-blue-600">{bookingStats.monthly}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
            <p className="text-sm font-medium text-gray-600">This Year</p>
            <p className="text-2xl font-bold text-green-600">{bookingStats.yearly}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
            <p className="text-sm font-medium text-gray-600">Pending</p>
            <p className="text-2xl font-bold text-orange-600">{bookingStats.pending}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
            <p className="text-sm font-medium text-gray-600">Paid</p>
            <p className="text-2xl font-bold text-green-600">{bookingStats.paid}</p>
          </div>
        </div>

        {/* Bookings Table */}
        <div className="bg-white rounded-lg shadow-lg border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">All Bookings</h3>
          </div>
          <div className="overflow-x-auto">
            {bookings.length > 0 ? (
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Guest</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Villa</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Check-in</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Check-out</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Guests</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {bookings.map((booking) => (
                    <tr key={booking.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">#{booking.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{booking.name}</div>
                        <div className="text-sm text-gray-500">{booking.email}</div>
                        <div className="text-sm text-gray-500">{booking.phone}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{booking.villa?.name || booking.villaSlug}</div>
                        <div className="text-sm text-gray-500">{booking.villa?.type}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {new Date(booking.checkIn).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {new Date(booking.checkOut).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{booking.guests}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        €{booking.amount}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <select
                          value={booking.status}
                          onChange={(e) => updateBookingStatus(booking.id, e.target.value)}
                          className={`text-sm rounded-full px-2 py-1 border ${
                            booking.status === 'paid' 
                              ? 'bg-green-100 text-green-800 border-green-200' 
                              : booking.status === 'pending'
                              ? 'bg-yellow-100 text-yellow-800 border-yellow-200'
                              : 'bg-gray-100 text-gray-800 border-gray-200'
                          }`}
                        >
                          <option value="pending">Pending</option>
                          <option value="paid">Paid</option>
                          <option value="cancelled">Cancelled</option>
                        </select>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button 
                          className="text-red-600 hover:text-red-900"
                          onClick={() => deleteBooking(booking.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="p-6 text-center text-gray-500">
                <p>No bookings found</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  async function handleAddVilla(e) {
    e.preventDefault();
    setVillaError("");
    try {
      const res = await http.post("/api/admin/villas", villaForm);
      setVillas([...villas, res.data]);
      setVillaForm({ name: "", slug: "", type: "PREMIUM", price: "" });
    } catch (err) {
      setVillaError("Gabim në shtim!");
    }
  }

  async function handleDeleteVilla(id) {
    await http.delete(`/api/admin/villas/${id}`);
    setVillas(villas.filter(v => v.id !== id));
  }

  // Villa Management Component
  function VillaManagement() {
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
          {villaError && <div className="text-red-500 mt-2">{villaError}</div>}
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

  // User Management Component
  function UserManagement() {
    async function handleCreateUser(e) {
      e.preventDefault();
      setUserError("");
      try {
        await http.post("/api/admin/users", userForm);
        setUserForm({ email: "", password: "", name: "", role: "staff" });
        await loadUsers(); // Reload data
      } catch (err) {
        setUserError(err.response?.data?.error || "Error creating user");
      }
    }

    async function handleUpdateUser(e) {
      e.preventDefault();
      setUserError("");
      try {
        await http.put(`/api/admin/users/${editingUser.id}`, userForm);
        setEditingUser(null);
        setUserForm({ email: "", password: "", name: "", role: "staff" });
        await loadUsers(); // Reload data
      } catch (err) {
        setUserError(err.response?.data?.error || "Error updating user");
      }
    }

    async function deleteUser(id) {
      if (confirm("Are you sure you want to delete this user?")) {
        try {
          await http.delete(`/api/admin/users/${id}`);
          await loadUsers(); // Reload data
        } catch (err) {
          setUserError(err.response?.data?.error || "Error deleting user");
        }
      }
    }

    function startEdit(user) {
      setEditingUser(user);
      setUserForm({
        email: user.email,
        password: "", // Don't prefill password
        name: user.name || "",
        role: user.role
      });
    }

    function cancelEdit() {
      setEditingUser(null);
      setUserForm({ email: "", password: "", name: "", role: "staff" });
      setUserError("");
    }

    if (userLoading) {
      return (
        <div className="space-y-6 p-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">User Management</h1>
          <div className="flex justify-center items-center h-64">
            <div className="text-gray-500">Loading users...</div>
          </div>
        </div>
      );
    }

    return (
      <div className="space-y-6 p-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">User Management</h1>
        
        {/* User Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
            <p className="text-sm font-medium text-gray-600">Total Users</p>
            <p className="text-2xl font-bold text-gray-900">{userStats.total}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
            <p className="text-sm font-medium text-gray-600">Admins</p>
            <p className="text-2xl font-bold text-red-600">{userStats.admins}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
            <p className="text-sm font-medium text-gray-600">Staff</p>
            <p className="text-2xl font-bold text-blue-600">{userStats.staff}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
            <p className="text-sm font-medium text-gray-600">Recent (30d)</p>
            <p className="text-2xl font-bold text-green-600">{userStats.recent}</p>
          </div>
        </div>

        {/* Add/Edit User Form */}
        <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            {editingUser ? `Edit User: ${editingUser.email}` : "Add New User"}
          </h3>
          <form onSubmit={editingUser ? handleUpdateUser : handleCreateUser} className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <input
              type="email"
              placeholder="Email"
              value={userForm.email}
              onChange={e => setUserForm(f => ({ ...f, email: e.target.value }))}
              className="input"
              required
            />
            <input
              type="password"
              placeholder={editingUser ? "New Password (optional)" : "Password"}
              value={userForm.password}
              onChange={e => setUserForm(f => ({ ...f, password: e.target.value }))}
              className="input"
              required={!editingUser}
            />
            <input
              type="text"
              placeholder="Full Name"
              value={userForm.name}
              onChange={e => setUserForm(f => ({ ...f, name: e.target.value }))}
              className="input"
            />
            <select
              value={userForm.role}
              onChange={e => setUserForm(f => ({ ...f, role: e.target.value }))}
              className="input"
            >
              <option value="staff">Staff</option>
              <option value="admin">Admin</option>
            </select>
            <div className="flex gap-2">
              <button type="submit" className="btn-primary">
                {editingUser ? "Update" : "Add User"}
              </button>
              {editingUser && (
                <button type="button" onClick={cancelEdit} className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                  Cancel
                </button>
              )}
            </div>
          </form>
          {userError && <div className="text-red-500 mt-2">{userError}</div>}
        </div>

        {/* Users Table */}
        <div className="bg-white rounded-lg shadow-lg border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">All Users</h3>
          </div>
          <div className="overflow-x-auto">
            {users.length > 0 ? (
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">#{user.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.name || 'N/A'}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          user.role === 'admin' 
                            ? 'bg-red-100 text-red-800' 
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {user.role}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {new Date(user.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button 
                          className="text-blue-600 hover:text-blue-900 mr-3"
                          onClick={() => startEdit(user)}
                        >
                          Edit
                        </button>
                        <button 
                          className="text-red-600 hover:text-red-900"
                          onClick={() => deleteUser(user.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="p-6 text-center text-gray-500">
                <p>No users found</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h2 className="text-xl font-semibold text-gray-900">Holiday Villas Admin</h2>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-700">Welcome, Admin</span>
              <button 
                onClick={() => setStep("login")}
                className="text-sm text-gray-500 hover:text-gray-700"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="flex">
          {/* Sidebar */}
          <div className="w-64 bg-white shadow rounded-lg mr-6 p-4">
            <nav className="space-y-2">
              <button
                onClick={() => setActiveTab("dashboard")}
                className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === "dashboard" 
                    ? "bg-blue-100 text-blue-700" 
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                📊 Dashboard
              </button>
              <button
                onClick={() => setActiveTab("villas")}
                className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === "villas" 
                    ? "bg-blue-100 text-blue-700" 
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                🏠 Villas
              </button>
              <button
                onClick={() => setActiveTab("bookings")}
                className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === "bookings" 
                    ? "bg-blue-100 text-blue-700" 
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                📅 Bookings
              </button>
              <button
                onClick={() => setActiveTab("users")}
                className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === "users" 
                    ? "bg-blue-100 text-blue-700" 
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                👥 Users
              </button>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1 bg-white rounded-lg shadow-lg p-6">
                <button
                  onClick={() => setActiveTab("content")}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeTab === "content" 
                      ? "bg-blue-100 text-blue-700" 
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  🖼️ Menaxhimi i Përmbajtjes
                </button>
            <div className="text-sm text-gray-500 mb-4">
              Active Tab: {activeTab} | Step: {step}
            </div>
            {activeTab === "dashboard" && <DashboardOverview />}
            {activeTab === "villas" && <VillaManagement />}
            {activeTab === "bookings" && <BookingManagement />}
            {activeTab === "users" && <UserManagement />}
            {activeTab === "content" && <ContentManagement />}

          </div>
        </div>
      </div>
    </div>
  );
}
