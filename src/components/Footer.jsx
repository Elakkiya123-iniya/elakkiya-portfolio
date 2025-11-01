import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Github, Mail } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    {
      icon: <Linkedin size={22} />,
      href: "https://www.linkedin.com/in/elakkiya-selvaraj-68969232b/",
      label: "LinkedIn",
    },
    {
      icon: <Github size={22} />,
      href: "https://github.com/Elakkiya123-iniya",
      label: "GitHub",
    },
    {
      icon: <Mail size={22} />,
      href: "mailto:elakkiyainiya1@gmail.com",
      label: "Email",
    },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative bg-black text-center py-16 mt-20 border-t border-green-500 overflow-hidden"
    >
      {/* ✨ Animated Green Glow Strip on Top */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-green-500 via-lime-400 to-green-500 animate-gradient" />

      {/* 💚 Soft Floating Glow Orbs */}
      <div className="absolute top-16 left-24 w-48 h-48 bg-green-400/20 blur-3xl rounded-full hidden md:block" />
      <div className="absolute bottom-16 right-24 w-48 h-48 bg-lime-400/20 blur-3xl rounded-full hidden md:block" />

      {/* 🌍 Footer Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white tracking-wide">
          Stay Connected 🌿
        </h2>

        {/* 🌐 Social Icons */}
        <div className="flex justify-center gap-8 mb-6">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              title={social.label}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-green-500 text-black font-semibold shadow-md hover:bg-green-400 hover:shadow-green-300/50 transition-all duration-300"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        {/* 📝 Footer Text */}
        <p className="text-gray-300 text-sm mb-1">
          © {new Date().getFullYear()}{" "}
          <span className="text-green-400 font-semibold">Elakkiya Selvaraj</span> — All Rights Reserved.
        </p>

        <p className="text-xs text-gray-400">
          Built with 💚 using <span className="text-green-400">React</span> +{" "}
          <span className="text-green-400">Tailwind CSS</span>
        </p>

        {/* ✨ Signature */}
        <motion.p
          className="mt-4 text-xs text-gray-400 italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Designed & Developed by{" "}
          <span className="text-green-400 font-medium">Elakkiya Selvaraj</span> 🌱
        </motion.p>
      </div>
    </motion.footer>
  );
}
