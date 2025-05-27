import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = ["Home", "About", "Skills", "Learning & Work", "Projects", "Contact"];

const navIds = {
  Home: "home",
  About: "about",
  Skills: "skills",
  "Learning & Work": "learning-work",
  Projects: "projects",
  Contact: "contact",
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home");

  // Close mobile menu on scroll
  useEffect(() => {
    const onScroll = () => setIsOpen(false);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-purple-900 via-pink-700 to-red-600 bg-opacity-90 backdrop-blur-md shadow-lg shadow-pink-500/50 transition-all duration-700">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        <div className="flex items-center justify-between h-16 relative">
          {/* Logo with floating effect */}
          <motion.div
            className="text-3xl font-extrabold text-white select-none cursor-default tracking-widest"
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            Krishna
            <span className="text-pink-300">Pal</span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-12 relative">
            {navItems.map((item) => (
              <motion.a
                key={item}
                href={`#${navIds[item]}`}
                onClick={() => setActive(item)}
                className={`relative text-white font-semibold tracking-wide cursor-pointer px-2 py-1
                  ${
                    active === item
                      ? "text-pink-300"
                      : "hover:text-pink-400"
                  }`}
                whileHover={{ scale: 1.15, textShadow: "0 0 8px #f472b6" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {item}
                {/* Sliding underline */}
                {active === item && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 -bottom-2 w-full h-1 rounded-full bg-pink-400"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    style={{ filter: "drop-shadow(0 0 6px #f472b6)" }}
                  />
                )}
              </motion.a>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden z-50">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="relative w-10 h-10 flex flex-col justify-center items-center group"
            >
              <motion.span
                animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                className="block absolute w-8 h-1 bg-pink-400 rounded-full shadow-pink-600/80"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block w-8 h-1 bg-pink-400 rounded-full mt-2 shadow-pink-600/80"
                transition={{ duration: 0.2 }}
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                className="block absolute w-8 h-1 bg-pink-400 rounded-full shadow-pink-600/80"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with fancy slide + fade */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="md:hidden bg-gradient-to-b from-purple-900 via-pink-700 to-red-600 shadow-lg shadow-pink-500/50 overflow-hidden"
          >
            <div className="flex flex-col space-y-5 p-6">
              {navItems.map((item) => (
                <motion.a
                  key={item}
                  href={`#${navIds[item]}`}
                  onClick={() => {
                    setActive(item);
                    setIsOpen(false);
                  }}
                  className={`text-white text-lg font-semibold tracking-wide px-3 py-2 rounded-lg
                    ${
                      active === item
                        ? "bg-pink-500 shadow-lg shadow-pink-400/70"
                        : "hover:bg-pink-400/70"
                    }`}
                  whileHover={{ scale: 1.1, boxShadow: "0 0 12px #f472b6" }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
