import React from "react";
import { motion } from "framer-motion";
import { Code, ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "EatzUp — Full Stack Food Delivery App",
      desc: "A complete food ordering platform with login, cart, order, payment, and PDF invoice generation. Built with MERN stack and a modern, responsive UI.",
      video: "https://www.loom.com/share/7ef6e7d69813471d87d6547c005c8c82?sid=af770c27-b3e7-4003-956f-361f2141cf4a", // 🔗 replace this with your actual demo video link
      github: "https://github.com/Kishore22101/Food-Delivery-App",
      tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      color: "from-yellow-400 to-amber-300",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-6 bg-gradient-to-b from-white to-yellow-50 dark:from-gray-900 dark:to-gray-950 text-center"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-gray-800 dark:text-white mb-12"
      >
        <Code className="inline-block mr-3 text-yellow-500" size={36} />
        Featured Projects
      </motion.h2>

      {/* Centered Project Card */}
      <div className="flex justify-center">
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className={`w-full md:w-2/3 lg:w-1/2 p-8 rounded-2xl shadow-lg bg-gradient-to-r ${proj.color} text-white transform hover:shadow-2xl transition-all duration-300`}
          >
            {/* Title */}
            <h3 className="text-2xl font-semibold mb-3">{proj.title}</h3>

            {/* Description */}
            <p className="text-base opacity-90 mb-5 leading-relaxed">{proj.desc}</p>

            {/* Tech Stack */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {proj.tech.map((t, i) => (
                <span
                  key={i}
                  className="bg-white/20 px-3 py-1 rounded-full text-xs font-medium"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex justify-center gap-5">
              {proj.video && (
                <motion.a
                  href={proj.video}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="bg-white text-yellow-600 font-semibold px-5 py-2.5 rounded-md flex items-center gap-2 hover:bg-yellow-100 transition-all"
                >
                  <ExternalLink size={18} /> Demo
                </motion.a>
              )}

              {proj.github && (
                <motion.a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="bg-white text-yellow-600 font-semibold px-5 py-2.5 rounded-md flex items-center gap-2 hover:bg-yellow-100 transition-all"
                >
                  <Github size={18} /> Code
                </motion.a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
