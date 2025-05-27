import React from "react";
import { motion } from "framer-motion";
import img from "../../assets/kr111.png";

const About = () => {
  return (
    <div
      id="about"
      className="min-h-screen bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] flex flex-col justify-center items-center py-16 px-4 sm:px-6 md:px-12 lg:px-20"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-14 text-center"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 relative inline-block after:content-[''] after:block after:w-16 after:h-1 after:bg-[#b0b28a] after:mx-auto after:mt-2">
          About Me
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-base sm:text-lg mt-3 sm:mt-5">
          Let’s get to know each other 👇
        </p>
      </motion.div>

      {/* About Content */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ staggerChildren: 0.3 }}
        className="flex flex-col md:flex-row items-center justify-center gap-10 sm:gap-12 max-w-6xl w-full"
      >
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
          className="w-48 h-48 sm:w-56 sm:h-56 md:w-60 md:h-60 rounded-full overflow-hidden shadow-2xl border-4 border-[#b0b28a]"
        >
          <img
            src={img}
            alt="Krishna"
            className="object-cover w-full h-full"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left max-w-2xl text-gray-700 space-y-4 sm:space-y-5"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-[#b0b28a] tracking-wide">
            Hi, I'm Krishna 👋
          </h3>
          <p className="text-base sm:text-lg leading-relaxed">
            A passionate{" "}
            <span className="font-semibold text-indigo-600">Frontend Developer</span> and
            <span className="font-semibold text-green-600"> Big Data Engineer</span> with 1 year of experience
            building clean, interactive web applications and solving complex data problems using modern tools
            like React.js, GCP, and more.
          </p>
          <p className="text-base sm:text-lg leading-relaxed">
            I love crafting intuitive user experiences and writing scalable code that powers real-world
            business solutions.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
