import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="relative py-24 px-6 bg-gradient-to-br from-white via-green-50 to-white overflow-hidden"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1 }}
    >
      {/* Soft Green Glow */}
      <div className="absolute top-28 left-12 w-80 h-80 bg-green-300/20 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-28 right-12 w-80 h-80 bg-green-400/20 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Title */}
      <motion.h2
        className="text-center text-4xl md:text-5xl font-extrabold text-gray-900 mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About <span className="text-green-600">Me</span>
      </motion.h2>

      {/* Content Card */}
      <motion.div
        className="relative max-w-4xl mx-auto bg-white/60 backdrop-blur-xl border border-green-200 rounded-3xl shadow-[0_8px_40px_-10px_rgba(0,0,0,0.18)] p-10 md:p-14"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          I am <span className="font-semibold text-green-600">Elakkiya Selvaraj</span>,  
          currently pursuing my{" "}
          <span className="font-semibold text-green-600">B.Tech in Artificial Intelligence and Data Science</span>  
          at  <span className="font-semibold text-green-600">J.N.N Institute of Engineering (Autonomous)</span>.
          I am passionate about building impactful solutions through technology.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          I enjoy exploring how data, logic, and design come together to create powerful digital experiences. 
          I believe in continuous learning and love taking up new challenges that help me grow both technically and personally.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          I have gained hands-on experience through internships in{" "}
          <span className="font-semibold text-green-600">Full Stack Web Development</span> (Django) and{" "}
          <span className="font-semibold text-green-600">Data Analytics</span>, 
          which strengthened my practical understanding of real-world project workflows.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          <strong className="text-green-600">Languages Known:</strong> Tamil, English
        </p>

        {/* Skills */}
        <div className="mt-10">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Technical Skills
          </h3>

          <div className="flex flex-wrap gap-3">
            {[
              "HTML",
              "CSS",
              "Python",
              "Java (Basics)",
              "GitHub",
              "Responsive Web Design",
              "Data Analytics",
              "Django"
            ].map((skill, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.08 }}
                className="px-4 py-2 text-sm md:text-base bg-white text-gray-800 font-medium rounded-full border border-green-300 shadow-sm hover:shadow-green-400/30 transition-all"
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
