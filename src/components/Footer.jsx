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
      className="relative bg-white text-center py-14 mt-20 border-t border-green-500 overflow-hidden"
    >
      {/* 🌿 Soft Green Top Line */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-green-600 to-green-400" />

      {/* 🌿 Soft Glow */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-green-300/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-green-400/10 blur-3xl rounded-full"></div>

      {/* 🌍 Footer Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6 text-green-700 tracking-wide">
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
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="group p-3 rounded-full bg-green-600 text-white shadow-md transition-all duration-300 hover:bg-green-700 hover:shadow-green-400/50"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        {/* 📝 Footer Text */}
        <p className="text-gray-600 text-sm mb-1">
          © {new Date().getFullYear()}{" "}
          <span className="text-green-700 font-semibold">Elakkiya Selvaraj</span> — All Rights Reserved.
        </p>

        <p className="text-xs text-gray-500 mt-1">
          Built with 💚 using <span className="text-green-700">React</span> +{" "}
          <span className="text-green-700">Tailwind CSS</span>
        </p>

        {/* ✨ Signature */}
        <motion.p
          className="mt-4 text-xs text-gray-500 italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Designed & Developed by{" "}
          <span className="text-green-700 font-medium">Elakkiya Selvaraj</span> 🌱
        </motion.p>
      </div>
    </motion.footer>
  );
}
