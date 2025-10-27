import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Github, Mail } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    {
      icon: <Linkedin size={22} />,
      href: "https://www.linkedin.com/in/kishore-k-0717542a1/",
      label: "LinkedIn",
    },
    {
      icon: <Github size={22} />,
      href: "https://github.com/Kishore22101",
      label: "GitHub",
    },
    {
      icon: <Mail size={22} />,
      href: "mailto:kishore22oct@gmail.com",
      label: "Email",
    },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative bg-gradient-to-br from-black via-gray-900 to-black text-center py-14 mt-20 border-t border-yellow-500 overflow-hidden shadow-[0_-4px_30px_rgba(250,204,21,0.1)]"
    >
      {/* 🌈 Glowing Yellow Gradient Border Top */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-500 animate-gradient" />

      {/* ✨ Floating Glow Orbs */}
      <div className="absolute top-10 left-20 w-48 h-48 bg-yellow-400/10 blur-3xl rounded-full animate-pulse hidden md:block"></div>
      <div className="absolute bottom-10 right-20 w-48 h-48 bg-yellow-500/10 blur-3xl rounded-full animate-pulse hidden md:block"></div>

      {/* 🌍 Footer Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6 text-yellow-400 tracking-wide drop-shadow-lg">
          Join the Journey 🚀
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
              whileHover={{ scale: 1.25, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="group p-3 rounded-full bg-yellow-400 text-black shadow-md transition-all duration-300 hover:shadow-yellow-400/50 hover:bg-yellow-500 ring-2 ring-transparent hover:ring-yellow-300"
            >
              <motion.div
                whileHover={{
                  rotate: 10,
                  transition: { type: "spring", stiffness: 200 },
                }}
              >
                {social.icon}
              </motion.div>
            </motion.a>
          ))}
        </div>

        {/* 📝 Footer Text */}
        <p className="text-gray-400 text-sm mb-1">
          © {new Date().getFullYear()}{" "}
          <span className="text-yellow-400 font-semibold">Kishore Kumar</span> — All Rights Reserved.
        </p>

        <p className="text-xs text-gray-500 mt-1">
          Built with ❤️ using{" "}
          <span className="text-yellow-400">React</span> +{" "}
          <span className="text-yellow-400">Tailwind CSS</span>
        </p>

        {/* 💖 Signature */}
        <motion.p
          className="mt-4 text-xs text-gray-500 italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Designed & Developed by{" "}
          <span className="text-yellow-400 font-medium">Kishore Kumar</span> 👨‍💻
        </motion.p>
      </div>
    </motion.footer>
  );
}
