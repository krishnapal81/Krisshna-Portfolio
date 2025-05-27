import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import img from "../../assets/kr2.png";

const Home = () => {
  const [text] = useTypewriter({
    words: ["👨‍💻 Frontend Developer", "📊 Data Engineer"],
    loop: 0,
    delaySpeed: 1500,
  });

  return (
    <section
      id="home"
      className="min-h-screen w-full flex flex-col md:flex-row items-center justify-between px-6 sm:px-12 md:px-16 lg:px-24 bg-white font-['Poppins']"
    >
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center gap-6 py-12">
        <p className="text-lg sm:text-xl text-gray-700 uppercase tracking-widest font-semibold">
          Hello! This is{" "}
          <span className="text-[#f59e0b] font-bold text-2xl sm:text-3xl md:text-4xl">
            KRISHNA
          </span>
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 flex flex-wrap gap-2 items-center justify-center">
          <span>{text}</span>
          <Cursor cursorStyle="|" />
        </h1>

        <div className="flex gap-4 flex-wrap justify-center">
          <button
            onClick={() => (window.location.href = "#contact")}
            className="bg-[#f59e0b] hover:bg-[#d97706] transition-colors duration-300 text-white font-semibold rounded-md px-6 py-3 shadow-lg"
          >
            Hire Me
          </button>

          <a
            href="./krishn@.pdf"
            download
            className="border-2 border-[#f59e0b] text-[#f59e0b] hover:bg-[#f59e0b] hover:text-white transition-all duration-300 font-semibold rounded-md px-6 py-3"
          >
            Download CV
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center items-center gap-12 mt-10">
          <a
            href="https://github.com/krishnapal81"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-transform duration-300 hover:scale-110"
          >
            <FaGithub style={{ color: "#171515" }} className="text-5xl" />
          </a>

          <a
            href="https://www.linkedin.com/in/krishna-pal-78469b1b1/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-transform duration-300 hover:scale-110"
          >
            <FaLinkedin style={{ color: "#0A66C2" }} className="text-5xl" />
          </a>

          <a
            href="https://wa.me/917379732360"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="transition-transform duration-300 hover:scale-110"
          >
            <FaWhatsapp style={{ color: "#25D366" }} className="text-5xl" />
          </a>
        </div>
      </div>

      {/* Right Section with Animated 3D Frame and Floating Image */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end py-10 relative">
        {/* Glowing border shadow frame */}
        <motion.div
          className="absolute top-6 right-6 w-[70%] h-[90%] border-[10px] border-[#f59e0b] rounded-3xl rotate-3 z-0"
          animate={{
            boxShadow: [
              "0 0 20px #f59e0b",
              "0 0 40px #f59e0b80",
              "0 0 60px #f59e0b50",
              "0 0 80px #f59e0b30",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        ></motion.div>

        {/* Floating Image */}
        <motion.img
          src={img}
          alt="Krishna profile"
          className="relative z-10 w-[80%] sm:w-[60%] md:w-[70%] max-h-[500px] object-contain rounded-2xl shadow-2xl"
          animate={{
            y: [0, -15, 0], // float up and down
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      </div>
    </section>
  );
};

export default Home;
