import React from "react";
import { motion } from "framer-motion";

const SkillBadge = ({ skill, color }) => (
  <motion.div
    whileHover={{ scale: 1.1, y: -5 }}
    className={`cursor-pointer bg-[${color}] bg-opacity-30 text-${color} font-semibold px-5 py-2 rounded-2xl shadow-md transition-transform duration-300`}
    style={{
      backgroundColor: color + "33", // 20% opacity in hex with some browsers
      color: color,
      boxShadow: `0 4px 10px ${color}44`, // soft shadow with opacity
    }}
  >
    {skill}
  </motion.div>
);

const Skills = () => {
  const frontendSkills = [
    "React.js", "JavaScript", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS", "Node.js", "Git","Git-Hub",
  ];

  const dataEngineeringSkills = [
    "Python", "GCP", "BigQuery", "Data Form", "Data Fusion", "ELT", "HDFS", "ETL","Pub/Sub",
  ];

  const frontendColor = "#7c3aed"; // soft purple
  const dataEngColor = "#10b981"; // fresh green

  return (
    <section
      id="skills"
      className="relative min-h-screen bg-white text-gray-800 px-6 sm:px-12 md:px-20 py-20 overflow-hidden"
    >
      {/* Top Wave */}
      <svg
        className="absolute top-0 left-0 w-full h-20 text-white"
        preserveAspectRatio="none"
        viewBox="0 0 1440 320"
      >
        <path
          fill="currentColor"
          d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,122.7C672,96,768,64,864,90.7C960,117,1056,203,1152,234.7C1248,267,1344,245,1392,234.7L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="text-5xl font-extrabold tracking-wide mb-2" style={{ color: frontendColor }}>
          My Skills
        </h2>
        <p className="text-lg text-gray-600">What makes me shine? Here’s the scoop 👨‍💻✨</p>
      </motion.div>

      {/* Skills Container */}
      <div className="flex flex-col lg:flex-row justify-center gap-20 max-w-7xl mx-auto relative z-10">
        {/* Frontend Skills */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 40 }}
          className="flex-1 bg-[#f4f3ff] rounded-3xl p-10 shadow-lg"
        >
          <h3 className="text-3xl font-semibold mb-8" style={{ color: frontendColor }}>
           <span class="block w-full text-center">Frontend Development</span>

          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {frontendSkills.map((skill, i) => (
              <SkillBadge key={i} skill={skill} color={frontendColor} />
            ))}
          </div>
        </motion.div>

        {/* Data Engineering Skills */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 40 }}
          className="flex-1 bg-[#d8f5e8] rounded-3xl p-10 shadow-lg"
        >
          <h3 className="text-3xl font-semibold mb-8" style={{ color: dataEngColor }}>
            <span class="block w-full text-center"> Data Engineering </span>
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {dataEngineeringSkills.map((skill, i) => (
              <SkillBadge key={i} skill={skill} color={dataEngColor} />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Wave */}
      <svg
        className="absolute bottom-0 left-0 w-full h-20 text-white"
        preserveAspectRatio="none"
        viewBox="0 0 1440 320"
      >
        <path
          fill="currentColor"
          d="M0,224L48,202.7C96,181,192,139,288,133.3C384,128,480,160,576,186.7C672,213,768,235,864,234.7C960,235,1056,213,1152,197.3C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
};

export default Skills;
