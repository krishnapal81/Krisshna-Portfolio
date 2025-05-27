import React from "react";
import { motion } from "framer-motion";

// Skill badge with hover animation
const SkillBadge = ({ skill, color }) => (
  <motion.div
    whileHover={{ scale: 1.1, y: -5 }}
    className="cursor-pointer font-semibold px-4 py-2 rounded-2xl shadow-md text-center transition-all duration-300"
    style={{
      backgroundColor: color + "20", // subtle background
      color: color,
      boxShadow: `0 4px 10px ${color}33`,
    }}
  >
    {skill}
  </motion.div>
);

const Skills = () => {
  const frontendSkills = [
    "React.js", "JavaScript", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS", "Node.js", "Git", "GitHub",
  ];
  const dataEngineeringSkills = [
    "Python", "GCP", "BigQuery", "Data Form", "Data Fusion", "ELT", "HDFS", "ETL", "Pub/Sub",
  ];

  const frontendColor = "#7c3aed"; // Purple
  const dataEngColor = "#10b981";  // Green

  return (
    <section
      id="skills"
      className="relative min-h-screen bg-white text-gray-800 px-4 sm:px-8 md:px-16 lg:px-24 py-20 overflow-hidden"
    >
      {/* Top SVG Wave */}
      <svg className="absolute top-0 left-0 w-full h-16 text-white" preserveAspectRatio="none" viewBox="0 0 1440 320">
        <path fill="currentColor" d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,122.7C672,96,768,64,864,90.7C960,117,1056,203,1152,234.7C1248,267,1344,245,1392,234.7L1440,224L1440,0L0,0Z" />
      </svg>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight" style={{ color: frontendColor }}>
          My Skills
        </h2>
        <p className="text-gray-600 text-base sm:text-lg mt-3">What makes me shine? Here’s the scoop 👨‍💻✨</p>
      </motion.div>

      {/* Skills Section */}
      <div className="flex flex-col lg:flex-row justify-center gap-12 max-w-7xl mx-auto relative z-10">
        {/* Frontend Box */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 60 }}
          className="flex-1 bg-[#f4f3ff] rounded-3xl p-6 sm:p-8 shadow-xl"
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-center" style={{ color: frontendColor }}>
            Frontend Development
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6">
            {frontendSkills.map((skill, i) => (
              <SkillBadge key={i} skill={skill} color={frontendColor} />
            ))}
          </div>
        </motion.div>

        {/* Data Engineering Box */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 60 }}
          className="flex-1 bg-[#e6fcf1] rounded-3xl p-6 sm:p-8 shadow-xl"
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-center" style={{ color: dataEngColor }}>
            Data Engineering
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6">
            {dataEngineeringSkills.map((skill, i) => (
              <SkillBadge key={i} skill={skill} color={dataEngColor} />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom SVG Wave */}
      <svg className="absolute bottom-0 left-0 w-full h-16 text-white" preserveAspectRatio="none" viewBox="0 0 1440 320">
        <path fill="currentColor" d="M0,224L48,202.7C96,181,192,139,288,133.3C384,128,480,160,576,186.7C672,213,768,235,864,234.7C960,235,1056,213,1152,197.3C1248,181,1344,171,1392,165.3L1440,160L1440,320L0,320Z" />
      </svg>
    </section>
  );
};

export default Skills;
