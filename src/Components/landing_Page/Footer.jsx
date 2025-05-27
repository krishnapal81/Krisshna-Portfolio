import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative z-50 mt-20 backdrop-blur-md bg-[#0f172a]/80 border-t border-gray-600/30 shadow-[0_-2px_10px_rgba(255,255,255,0.05)]"
    >
      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-8 text-white">
        {/* Name */}
        <div className="text-sm text-gray-400 tracking-wide text-center md:text-left">
          © {new Date().getFullYear()} <span className="text-[#facc15] font-semibold">Krishna Pal</span> — All Rights Reserved
        </div>

        {/* Nav Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-gray-300">
          <a href="#home" className="hover:text-[#facc15] transition">Home</a>
          <a href="#about" className="hover:text-[#facc15] transition">About</a>
          <a href="#skills" className="hover:text-[#facc15] transition">Skills</a>
          <a href="#projects" className="hover:text-[#facc15] transition">Projects</a>
          <a href="#contact" className="hover:text-[#facc15] transition">Contact</a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6">
          <motion.a
            href="https://github.com/krishnapal81"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-xl text-gray-400 hover:text-white transition-all duration-300 hover:drop-shadow-[0_0_10px_#facc15]"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/krishna-pal-78469b1b1/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-xl text-gray-400 hover:text-white transition-all duration-300 hover:drop-shadow-[0_0_10px_#0ea5e9]"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://wa.me/917379732360"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-xl text-gray-400 hover:text-white transition-all duration-300 hover:drop-shadow-[0_0_10px_#25d366]"
          >
            <FaWhatsapp />
          </motion.a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
