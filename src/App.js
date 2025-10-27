import React, { useEffect } from "react";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Internship from "./pages/Internship.jsx";
import Contact from "./pages/Contact.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Certificates from "./pages/Certificates.jsx";
import Projects from "./pages/Projects.jsx";



function App() {
  // Optional: Add a little scroll restoration when navigating
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  return (
    <div className="bg-gray-50 dark:bg-darkbg text-gray-900 dark:text-gray-100 font-poppins transition-colors duration-300 ease-in-out overflow-x-hidden">
      {/* 🌐 Navbar */}
      <Navbar />

      {/* 🏠 Page Sections */}
      <Home />
      <About />
      <Internship />
      <Projects />
      <Certificates />
      <Contact />

      {/* 🔚 Footer */}
      <Footer />

      {/* 🆙 Scroll To Top Button (only one) */}
      <ScrollToTop />
    </div>
  );
}

export default App;
