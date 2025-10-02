import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Rooms from "./pages/Rooms.jsx";
import RoomDetails from "./pages/RoomDetails.jsx";

function Page({ title }) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="font-display text-4xl">{title}</h1>
      <p className="text-ink/70 mt-2">Përmbajtja do të vijë këtu.</p>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="pt-[96px] md:pt-[120px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/rooms/:slug" element={<RoomDetails />} />
          <Route path="/about" element={<Page title="Rreth Nesh" />} />
          <Route path="/services" element={<Page title="Shërbimet" />} />
          <Route path="/testimonials" element={<Page title="Dëshmitë" />} />
          <Route path="/faq" element={<Page title="Pyetje & Përgjigje" />} />
          <Route path="/accomodation" element={<Page title="Akomodimi" />} />
          <Route path="/gallery" element={<Page title="Galeria" />} />
          <Route path="/contact" element={<Page title="Kontakti" />} />
          <Route path="/blog" element={<Page title="Blog" />} />
          <Route path="*" element={<Page title="Faqja nuk u gjet" />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
