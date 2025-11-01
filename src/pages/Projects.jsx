import React from "react";
import { motion } from "framer-motion";
import { Code, ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Hostel Management System",
      desc: "A web-based management platform to handle student room allocation, visitor records, fee tracking, and admin operations in an organized way.",
      demo: "#", // ✅ If you have video link, paste here
      github: "#", // ✅ If hosted on GitHub, paste here
      tech: ["Django", "Python", "HTML", "CSS", "SQLite"],
      color: "from-green-400 to-emerald-400",
    },
    {
      title: "Student Result Management System",
      desc: "A secure web app to store, update, calculate, and display student academic results with role-based login for Admin and Faculty.",
      demo: "#", // ✅ If you have video link, paste here
      github: "#", // ✅ Replace with your code link
      tech: ["Django", "Bootstrap", "SQLite", "Python"],
      color: "from-green-300 to-lime-400",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-6 bg-gradient-to-b from-white to-green-50 dark:from-gray-900 dark:to-black text-center"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-gray-800 dark:text-white mb-12"
      >
        <Code className="inline-block mr-3 text-green-500" size={36} />
        Featured Projects
      </motion.h2>

      {/* Project Cards */}
      <div className="grid max-w-5xl mx-auto gap-10 md:grid-cols-2">
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className={`p-[2px] rounded-2xl shadow-lg bg-gradient-to-r ${proj.color} hover:shadow-2xl transition-all duration-300`}
          >
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 text-left flex flex-col h-full">
              {/* Title */}
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-green-400 mb-3">
                {proj.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 mb-5 leading-relaxed">
                {proj.desc}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {proj.tech.map((t, i) => (
                  <span
                    key={i}
                    className="bg-green-100 dark:bg-green-500/20 text-green-800 dark:text-green-300 px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4 mt-auto">
                {proj.demo !== "#" && (
                  <motion.a
                    href={proj.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="bg-green-500 text-white px-4 py-2 rounded-md flex items-center gap-2 shadow hover:bg-green-600 transition-all"
                  >
                    <ExternalLink size={18} /> Demo
                  </motion.a>
                )}

                {proj.github !== "#" && (
                  <motion.a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="border border-green-500 text-green-600 px-4 py-2 rounded-md flex items-center gap-2 hover:bg-green-500 hover:text-white transition-all"
                  >
                    <Github size={18} /> Code
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
