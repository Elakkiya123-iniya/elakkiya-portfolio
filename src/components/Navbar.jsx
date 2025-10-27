import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Internship", href: "#projects" },
    { name: "Certificates", href: "#certificates" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-white/80 dark:bg-gray-900/70 shadow-lg border-b border-yellow-200/30 dark:border-gray-700/40"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* 🌟 Logo / Name */}
        <motion.h1
          className="text-2xl md:text-3xl font-extrabold text-yellow-500 tracking-wide cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          Kishore Kumar
        </motion.h1>

        {/* 🖥️ Desktop Menu */}
        <div className="hidden md:flex space-x-10 text-gray-800 dark:text-gray-200 font-medium">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="relative group transition-all duration-300"
              whileHover={{ y: -2 }}
            >
              {link.name}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          ))}
        </div>

        {/* 📱 Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-800 dark:text-gray-200"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* 📱 Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden backdrop-blur-xl bg-white/90 dark:bg-gray-900/90 border-t border-yellow-300/20 shadow-lg text-center py-6 space-y-5"
          >
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block text-lg text-gray-800 dark:text-gray-200 font-medium hover:text-yellow-500 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
