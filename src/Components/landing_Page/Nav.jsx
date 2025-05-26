import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = ["Home", "About", "Skills","Learning & Work", "Projects", "Contact"];

const navIds = {
  "Home": "home",
  "About": "about",
  "Skills": "skills",
  "Learning & Work": "learning-work", // this is the key change
  "Projects": "projects",
  "Contact": "contact"
};


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md shadow-md dark:bg-gray-900/70 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-2xl font-bold text-[#a9ad8f] cursor-default select-none">
            Krishna
            <span className="text-black dark:text-white">Pal</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={`#${navIds[item]}`}
                className="relative text-gray-700 dark:text-gray-200 font-medium hover:text-[#a9ad8f] transition-transform duration-300 transform hover:scale-110"
              >
                {item}
                {/* Underline animation */}
                <span
                  className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#a9ad8f] transition-all duration-300"
                  style={{ transitionProperty: "width" }}
                  onMouseEnter={e => e.currentTarget.style.width = "100%"}
                  onMouseLeave={e => e.currentTarget.style.width = "0"}
                />
              </a>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 dark:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {/* Animated hamburger icon */}
              <svg
                className="h-8 w-8"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <motion.path
                  animate={isOpen ? { d: "M6 18L18 6" } : { d: "M4 6h16" }}
                  transition={{ duration: 0.3 }}
                />
                <motion.path
                  animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  d="M4 12h16"
                />
                <motion.path
                  animate={isOpen ? { d: "M6 6l12 12" } : { d: "M4 18h16" }}
                  transition={{ duration: 0.3 }}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with slide down animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white dark:bg-gray-900 overflow-hidden shadow-inner"
          >
            <div className="flex flex-col px-6 py-4 space-y-3">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={`#${navIds[item]}`}
                  className="text-gray-700 dark:text-white font-semibold hover:text-[#a9ad8f] transition transform hover:scale-105"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
