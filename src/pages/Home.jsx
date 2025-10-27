import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  // Typewriter-like rotating text
  const roles = [
    "Full Stack Developer 💻",
    "Core Java 🤖",
  ];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen flex flex-col md:flex-row justify-center items-center text-center md:text-left overflow-hidden px-6"
    >
      {/* 🌈 Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-yellow-200 via-amber-100 to-yellow-50 opacity-80"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ backgroundSize: "200% 200%", zIndex: 0 }}
      />

      {/* 🌟 Floating Glowing Orbs (Decoration) */}
      <motion.div
        className="absolute w-48 h-48 bg-yellow-300/30 rounded-full blur-3xl top-10 left-10"
        animate={{ y: [0, 40, 0], x: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-64 h-64 bg-amber-400/30 rounded-full blur-3xl bottom-20 right-10"
        animate={{ y: [0, -40, 0], x: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />

      {/* 🖼 Profile Image with Glow */}
      <motion.div
        className="relative z-10 w-56 h-56 md:w-72 md:h-72 rounded-full mb-6 md:mb-0 md:mr-12"
        whileHover={{ scale: 1.08 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
      >
        {/* Glowing Border Animation */}
        <motion.div
          className="absolute inset-0 rounded-full border-4 border-yellow-400 shadow-[0_0_30px_#facc15]"
          animate={{
            boxShadow: [
              "0 0 10px #facc15",
              "0 0 25px #facc15",
              "0 0 40px #facc15",
              "0 0 25px #facc15",
              "0 0 10px #facc15",
            ],
          }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        />

        {/* Actual Profile Image */}
        <motion.img
          src="/assets/kishore.jpg"
          alt="Kishore Kumar"
          className="relative z-10 w-full h-full rounded-full object-contain shadow-lg border-4 border-white bg-white p-1"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
      </motion.div>

      {/* ✨ Intro Text Section */}
      <div className="relative z-10">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold mb-4 text-gray-800"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm <span className="text-yellow-500">Kishore Kumar</span> 👋
        </motion.h1>

        {/* Typewriter Animated Roles */}
        <motion.p
          key={currentRole}
          className="text-xl md:text-2xl text-gray-700 font-medium h-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {roles[currentRole]}
        </motion.p>

        <motion.p
          className="text-lg text-gray-600 mt-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          B.Tech - Artificial Intelligence & Data Science
        </motion.p>

        <motion.p
          className="text-base text-gray-600 mt-1 max-w-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
        >
          I love turning ideas into powerful full-stack applications — blending Java, creativity, and modern web technologies to craft seamless user experiences.
        </motion.p>

        {/* 🔘 Buttons */}
        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center md:justify-start">
          <motion.a
            href="#about"
            className="bg-yellow-500 text-white px-6 py-3 rounded-lg shadow hover:bg-yellow-600 font-semibold"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Know More About Me
          </motion.a>

          <motion.a
            href="/assets/Kishore_Resume.pdf"
            download
            className="border border-yellow-500 text-yellow-600 px-6 py-3 rounded-lg shadow hover:bg-yellow-500 hover:text-white font-semibold"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Download Resume
          </motion.a>
        </div>
      </div>
    </section>
  );
}
