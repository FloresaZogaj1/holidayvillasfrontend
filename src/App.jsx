// src/App.jsx
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import Rooms from "./pages/Rooms.jsx";
import RoomDetails from "./pages/RoomDetails.jsx";
import Gallery from "./pages/Gallery.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Testimonials from "./pages/Testimonials.jsx";
import FAQ from "./pages/FAQ.jsx";
import Accomodation from "./pages/Accomodation.jsx";
import Contact from "./pages/Contact.jsx";
import Blog from "./pages/Blog.jsx";
import BlogPost from "./pages/BlogPost.jsx";
import PaymentResult from "./pages/PaymentResult.jsx";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";

export default function App() {
  return (
    <Router>
      <Navbar />
      <main className="pt-[96px] md:pt-[120px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/rooms/:slug" element={<RoomDetails />} />
          <Route path="/gallery" element={<Gallery />} />

          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/accomodation" element={<Accomodation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />

          {/* rezultati i pagesës */}
          <Route path="/payment/success" element={<PaymentResult />} />
        <Route path="/payment/fail" element={<PaymentResult />} />
        <Route path="/terms" element={<Terms />} />
<Route path="/privacy" element={<Privacy />} />

          {/* fallback */}
          <Route path="*" element={<Blog title="Faqja nuk u gjet" empty />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
