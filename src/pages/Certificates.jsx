import React from "react";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

export default function Certificates() {
  const certificates = [
    {
      title: "Generative AI Certificate",
      org: "IBM SkillsBuild",
      link: "https://www.linkedin.com/posts/elakkiya-selvaraj-68969232b_ibm-generativeai-skillsbuild-activity-7370344834248773632-cCC0",
      desc: "Explored core concepts of AI models, prompt engineering, and real-world applications.",
      date: "2025",
      color: "from-green-400 to-emerald-300",
    },
    {
      title: "ChatGPT AI Certification",
      org: "GUVI",
      link: "https://www.linkedin.com/posts/elakkiya-selvaraj-68969232b_chatgpt-ai-certification-activity-7370343331093962752-TmG7",
      desc: "Learned AI-assisted problem solving and conversational automation techniques.",
      date: "2025",
      color: "from-teal-400 to-green-300",
    },
    {
      title: "Fundamentals of Generative AI",
      org: "SAWIT.AI Learnathan",
      link: "https://www.linkedin.com/posts/elakkiya-selvaraj-68969232b_generativeai-ai-continuouslearning-activity-7370338987556777984-C4nB",
      desc: "Focused on ethical AI usage, model evaluation and responsible development practices.",
      date: "2025",
      color: "from-green-500 to-lime-300",
    },
    {
      title: "GitHub Certificate",
      org: "PrepInsta",
      link: "https://www.linkedin.com/posts/elakkiya-selvaraj-68969232b_github-certification-prepinsta-activity-7370330080398585856-b6-F",
      desc: "Completed Git, GitHub version control workflows and collaboration fundamentals.",
      date: "2025",
      color: "from-gray-700 to-gray-500",
    },
    {
      title: "Introduction to IoT",
      org: "NPTEL",
      link: "https://www.linkedin.com/posts/elakkiya-selvaraj-68969232b_excited-to-share-this-i-have-successfully-activity-7370323318958239744-l3O3",
      desc: "Gained practical experience with loops, functions, file handling & debugging.",
      date: "2025",
      color: "from-blue-400 to-cyan-300",
    },
    {
      title: "Cloud Computing",
      org: "NPTEL",
      link: "https://www.linkedin.com/posts/elakkiya-selvaraj-68969232b_thrilled-to-unlock-a-new-milestone-in-my-activity-7370322739305271296-uTHN",
      desc: "Learned sensors, communication modules & IoT data processing workflow.",
      date: "2024",
      color: "from-purple-400 to-pink-300",
    },
    {
      title: "Introduction To Responsible AI",
      org: "Simplilearn",
      link: "https://www.linkedin.com/posts/elakkiya-selvaraj-68969232b_excited-to-share-a-new-achievement-in-my-activity-7370319492201074689-zqHT",
      desc: "Covered virtualization, cloud architecture and distributed applications.",
      date: "2025",
      color: "from-indigo-400 to-violet-300",
    },
    {
      title: "Full Stack Web Development Internship (Django)",
      org: "Logix Company, Bangalore",
      link: "https://www.linkedin.com/posts/elakkiya-selvaraj-68969232b_internship-fullstackdevelopment-django-activity-7370328541005099009-4p5b",
      desc: "Developed authenticated web applications with database integration and UI design.",
      date: "2025",
      color: "from-green-600 to-green-400",
    },
    {
      title: "Data Analytics Internship",
      org: "Make Visions Company",
      link: "https://www.linkedin.com/posts/elakkiya-selvaraj-68969232b_i-am-pleased-to-share-that-ive-successfully-activity-7370325269590745088-3kbZ",
      desc: "Performed data visualization & extracted insights from real-world datasets.",
      date: "2024",
      color: "from-emerald-500 to-green-300",
    },
  ];

  return (
    <section
      id="certificates"
      className="py-20 px-6 bg-gradient-to-b from-green-50 to-white text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-gray-800 mb-12"
      >
        <Award className="inline-block mr-3 text-green-600" size={36} />
        Certificates & Achievements
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {certificates.map((cert, index) => (
          <motion.a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className={`relative p-[2px] rounded-2xl shadow-lg bg-gradient-to-r ${cert.color}`}
          >
            <div className="bg-white rounded-2xl p-6 h-full flex flex-col justify-between text-left">
              <div>
                <h3 className="text-xl font-semibold text-green-700 mb-2">
                  {cert.title}
                </h3>
                <p className="text-sm text-gray-500 mb-1 italic">{cert.org}</p>
                <p className="text-xs text-gray-500 mb-3">{cert.date}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{cert.desc}</p>
              </div>

              <motion.span
                whileHover={{ scale: 1.1 }}
                className="mt-4 inline-block text-sm font-medium text-green-600 hover:underline"
              >
                🔗 View Certificate
              </motion.span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
