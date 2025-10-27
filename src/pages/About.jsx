import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="relative py-20 px-6 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 text-center overflow-hidden"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* ✨ Subtle Glow Orbs */}
      <div className="absolute top-16 left-24 w-64 h-64 bg-yellow-300/10 blur-3xl rounded-full hidden md:block"></div>
      <div className="absolute bottom-24 right-24 w-64 h-64 bg-yellow-400/10 blur-3xl rounded-full hidden md:block"></div>

      {/* 💬 Section Title */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-10 text-gray-900 dark:text-white tracking-wide"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About <span className="text-yellow-500">Me</span>
      </motion.h2>

      {/* 🧩 About Card */}
      <motion.div
        className="relative max-w-4xl mx-auto bg-white/80 dark:bg-gray-800/70 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg p-8 md:p-10 text-left"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          I'm a passionate and dedicated{" "}
          <span className="font-semibold text-yellow-500">
            B.Tech student in Artificial Intelligence & Data Science
          </span>{" "}
          at <span className="font-semibold text-yellow-500">J.N.N Institute of Engineering</span>.
          I’m driven by curiosity and the desire to build technology that makes a real difference.
        </p>

        <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          My core interests lie in{" "}
          <span className="font-semibold text-yellow-500">Java Programming</span> and{" "}
          <span className="font-semibold text-yellow-500">Full Stack Web Development</span>.
          I enjoy developing smooth, functional applications that merge powerful backend logic with clean frontend design.
        </p>

        <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          I’m continuously learning and exploring new tools, frameworks, and technologies to enhance my development and problem-solving skills.
        </p>

        <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          <strong className="text-yellow-500">Languages:</strong> English, Tamil (Native)
        </p>

        {/* 💻 Skills */}
        <div className="mt-6">
          <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-yellow-400 mb-3">
            Technical Skills
          </h3>
          <div className="flex flex-wrap gap-3">
            {[
              "Java",
              "React.js",
              "Node.js",
              "Express.js",
              "MongoDB",
              "Tailwind CSS",
              "SQL",
              "Python",
              "C",
            ].map((skill, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.08 }}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm md:text-base font-medium rounded-full border border-gray-200 dark:border-gray-600 hover:shadow-md hover:shadow-yellow-400/20 transition-all duration-300"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
