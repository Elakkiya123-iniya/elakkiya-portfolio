import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function Internship() {
  const internships = [
    {
      title: "Data Analytics Intern — Make Visions Company",
      duration: "2024",
      desc: "Worked on real-world datasets to perform data cleaning, preprocessing, visualization and interpretation for business insights.",
      projectDetails: [
        "Analyzed raw datasets to identify data patterns and trends.",
        "Performed data visualization to support decision-making insights.",
        "Developed structured dashboards for clear representation of metrics.",
      ],
      tech: ["Python", "Pandas", "Matplotlib", "Data Visualization"],
      color: "from-green-400 to-emerald-400",
    },
    {
      title: "Full Stack Web Development Intern — Logix Company, Bangalore",
      duration: "2025",
      desc: "Developed a full-stack web application with user authentication, database integration and responsive UI using Django.",
      projectDetails: [
        "Built a complete Django web application with structured backend routing.",
        "Integrated database models for dynamic content storage and retrieval.",
        "Implemented authentication (Login/Signup) and secure session handling.",
        "Designed front-end layouts ensuring responsiveness across devices.",
      ],
      tech: ["Django", "Python", "HTML", "CSS", "GitHub"],
      color: "from-green-300 to-lime-400",
    },
  ];

  return (
    <motion.section
      id="internship"
      className="py-20 px-6 bg-gradient-to-b from-white to-green-50 dark:from-gray-900 dark:to-black text-center"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Title */}
      <motion.h2
        className="text-4xl font-bold mb-12 text-gray-800 dark:text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <Briefcase className="inline-block mr-3 text-green-500" size={36} />
        Internship Experience
      </motion.h2>

      {/* Internship Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {internships.map((p, i) => (
          <motion.div
            key={i}
            className={`bg-gradient-to-r ${p.color} p-[2px] rounded-2xl shadow-lg hover:shadow-2xl transition duration-300`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.8 }}
          >
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 h-full flex flex-col justify-between text-left">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-green-400 mb-2">
                  {p.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                  {p.duration}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-3 leading-relaxed">
                  {p.desc}
                </p>

                {p.projectDetails && (
                  <ul className="text-gray-600 dark:text-gray-300 list-disc list-inside mb-4 space-y-1">
                    {p.projectDetails.map((detail, j) => (
                      <li key={j} className="leading-snug">{detail}</li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-3">
                {p.tech.map((tech, tIndex) => (
                  <span
                    key={tIndex}
                    className="bg-green-100 dark:bg-green-500/20 text-green-800 dark:text-green-300 px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
