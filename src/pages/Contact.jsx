import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="relative py-20 px-6 bg-gradient-to-b from-yellow-50 via-white to-yellow-100 dark:from-gray-950 dark:via-gray-900 dark:to-black text-center overflow-hidden"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* 🌈 Top Border Line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-400 animate-gradient" />

      {/* ✨ Soft Glow Circles */}
      <div className="absolute top-10 left-16 w-56 h-56 bg-yellow-200/25 blur-3xl rounded-full hidden md:block"></div>
      <div className="absolute bottom-10 right-20 w-56 h-56 bg-yellow-300/25 blur-3xl rounded-full hidden md:block"></div>

      {/* 💬 Heading */}
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-900 dark:text-white tracking-wide"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Let’s <span className="text-yellow-500">Connect</span> 🤝
      </motion.h2>

      <motion.p
        className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-10 max-w-xl mx-auto leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        I’m open to internships, collaborations, or just a friendly chat about tech.
        Drop a message — let’s build something great together!
      </motion.p>

      {/* 📬 Contact Cards */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-10">
        {/* Email */}
        <motion.div
          whileHover={{ scale: 1.06 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="bg-white/80 dark:bg-gray-800/70 backdrop-blur-md border border-yellow-200 dark:border-gray-700 rounded-xl shadow-lg p-6 w-72 hover:shadow-yellow-400/30 transition-all duration-300"
        >
          <Mail className="mx-auto mb-2 text-yellow-500" size={26} />
          <p className="text-sm text-gray-800 dark:text-yellow-400 font-semibold mb-1">Email</p>
          <p className="text-gray-700 dark:text-gray-200 text-sm">kishore22oct@gmail.com</p>
        </motion.div>

        {/* Phone */}
        <motion.div
          whileHover={{ scale: 1.06 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="bg-white/80 dark:bg-gray-800/70 backdrop-blur-md border border-yellow-200 dark:border-gray-700 rounded-xl shadow-lg p-6 w-72 hover:shadow-yellow-400/30 transition-all duration-300"
        >
          <Phone className="mx-auto mb-2 text-yellow-500" size={26} />
          <p className="text-sm text-gray-800 dark:text-yellow-400 font-semibold mb-1">Phone</p>
          <p className="text-gray-700 dark:text-gray-200 text-sm">+91 63851 27709</p>
        </motion.div>
      </div>

      {/* 🔗 LinkedIn Button */}
      <motion.a
        href="https://www.linkedin.com/in/kishore-k-0717542a1"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1, boxShadow: "0 0 18px #facc15" }}
        whileTap={{ scale: 0.95 }}
        className="inline-flex items-center gap-2 bg-yellow-500 text-white px-8 py-3 rounded-full shadow-md font-semibold text-base hover:bg-yellow-600 transition-all duration-300"
      >
        <Linkedin size={22} />
        Connect on LinkedIn
      </motion.a>

      {/* 🌟 Bottom Border Line */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 animate-gradient" />
    </motion.section>
  );
}
