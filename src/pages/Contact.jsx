import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="relative py-20 px-6 bg-gradient-to-b from-green-50 via-white to-green-100 text-center overflow-hidden"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Top Line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-green-600 to-green-300" />

      {/* Soft Background Glow */}
      <div className="absolute top-10 left-16 w-56 h-56 bg-green-300/20 blur-3xl rounded-full hidden md:block"></div>
      <div className="absolute bottom-10 right-20 w-56 h-56 bg-green-400/20 blur-3xl rounded-full hidden md:block"></div>

      {/* Heading */}
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-900 tracking-wide"
      >
        Let’s <span className="text-green-600">Connect</span> 🤝
      </motion.h2>

      <motion.p
        className="text-base md:text-lg text-gray-700 mb-10 max-w-xl mx-auto leading-relaxed"
      >
        Open to Internships, Collaborations, and Projects.  
        Feel free to reach out anytime — happy to connect!
      </motion.p>

      {/* Contact Options */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-10">
        
        {/* Email */}
        <motion.a
          href="mailto:elakkiyainiya1@gmail.com"
          whileHover={{ scale: 1.06 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="bg-white/80 backdrop-blur-md border border-green-300 rounded-xl shadow-md p-6 w-72 hover:shadow-green-400/30 transition-all duration-300"
        >
          <Mail className="mx-auto mb-2 text-green-600" size={26} />
          <p className="text-sm font-semibold text-green-700 mb-1">Email</p>
          <p className="text-gray-700 text-sm underline">elakkiyainiya1@gmail.com</p>
        </motion.a>

        {/* Phone */}
        <motion.a
          href="tel:+918778542441"
          whileHover={{ scale: 1.06 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="bg-white/80 backdrop-blur-md border border-green-300 rounded-xl shadow-md p-6 w-72 hover:shadow-green-400/30 transition-all duration-300"
        >
          <Phone className="mx-auto mb-2 text-green-600" size={26} />
          <p className="text-sm font-semibold text-green-700 mb-1">Phone</p>
          <p className="text-gray-700 text-sm underline">+91 87785 42441</p>
        </motion.a>
      </div>

      {/* LinkedIn Button */}
      <motion.a
        href="https://www.linkedin.com/in/elakkiya-selvaraj-68969232b/"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-3 rounded-full shadow-md font-semibold text-base hover:bg-green-700 transition-all duration-300"
      >
        <Linkedin size={22} />
        Connect on LinkedIn
      </motion.a>

      {/* Bottom Line */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-green-300 to-green-600" />
    </motion.section>
  );
}
