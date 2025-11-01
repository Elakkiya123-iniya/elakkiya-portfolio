import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const roles = [
    "Full Stack Developer 💻",
    "Python & Java Basics 🧠",
  ];

  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2300);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen flex flex-col md:flex-row justify-center items-center text-center md:text-left overflow-hidden px-6"
    >
      {/* Background Soft Green Gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-green-200 via-green-50 to-white opacity-90"
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

      {/* Soft Floating Glows */}
      <motion.div
        className="absolute w-60 h-60 bg-green-300/25 rounded-full blur-3xl top-14 left-10"
        animate={{ y: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-72 h-72 bg-green-400/20 rounded-full blur-3xl bottom-20 right-10"
        animate={{ y: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
      />

      {/* Profile Image */}
      <motion.div
        className="relative z-10 w-56 h-56 md:w-72 md:h-72 rounded-full mb-6 md:mb-0 md:mr-12"
        whileHover={{ scale: 1.08 }}
      >
        <motion.div
          className="absolute inset-0 rounded-full border-4 border-green-500 shadow-[0_0_25px_#4ade80]"
          animate={{
            boxShadow: [
              "0 0 8px #4ade80",
              "0 0 18px #4ade80",
              "0 0 28px #4ade80",
              "0 0 18px #4ade80",
              "0 0 8px #4ade80",
            ],
          }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        />

        <motion.img
          src="/assets/profile.jpg"
          alt="Elakkiya"
          className="relative z-10 w-full h-full rounded-full object-cover shadow-lg border-4 border-white bg-white p-1"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
      </motion.div>

      {/* Text Content */}
      <div className="relative z-10">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold mb-4 text-gray-800"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm <span className="text-green-600">Elakkiya</span> 👋
        </motion.h1>

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
          I enjoy building clean, meaningful digital experiences using modern web and data-driven technologies.
        </motion.p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center md:justify-start">
          <motion.a
            href="#about"
            className="bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 font-semibold"
            whileHover={{ scale: 1.05 }}
          >
            Know More About Me
          </motion.a>

          <motion.a
            href="/assets/resume.pdf"
            download
            className="border border-green-600 text-green-700 px-6 py-3 rounded-lg shadow hover:bg-green-600 hover:text-white font-semibold"
            whileHover={{ scale: 1.05 }}
          >
            Download Resume
          </motion.a>
        </div>
      </div>
    </section>
  );
}
