import React from "react";
import { motion } from "framer-motion";
import img from "../../assets/kr111.png"

const About = () => {
  return (
    <div
      id="about"
      className="min-h-screen bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] py-20 px-6 sm:px-12 md:px-20"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 relative inline-block after:content-[''] after:block after:w-16 after:h-1 after:bg-[#b0b28a] after:mx-auto after:mt-2">
          About Me
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg mt-4">
          Let’s get to know each other 👇
        </p>
      </motion.div>

      {/* About Content */}
      <div className="flex justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.3 }}
          className="flex flex-col md:flex-row gap-12 items-center max-w-5xl w-full ml-50"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 8 }}
            className="w-60 h-60 rounded-full overflow-hidden shadow-2xl border-4 border-[#b0b28a]"
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
            className="max-w-xl text-center md:text-left text-gray-700 space-y-5"
          >
            <h3 className="text-3xl font-bold text-[#b0b28a] tracking-wide">
              Hi, I'm Krishna 👋
            </h3>
            <p className="text-lg leading-relaxed">
              A passionate <span className="font-semibold text-indigo-600">Frontend Developer</span> and
              <span className="font-semibold text-green-600"> Big Data Engineer</span> with 1 year of experience
              building clean, interactive web applications and solving complex data problems using modern tools
              like React.js, GCP, and more.
            </p>
            <p className="text-lg leading-relaxed">
              I love crafting intuitive user experiences and writing scalable code that powers real-world
              business solutions.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
