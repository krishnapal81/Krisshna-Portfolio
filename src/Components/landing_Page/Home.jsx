import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import img from "../../assets/kr2.png"
const Home = () => {
  const [text] = useTypewriter({
    words: ["👨‍💻 Frontend Developer", "📊 Data Engineer"],
    loop: 0, // infinite loop
    delaySpeed: 1000, // 3 seconds delay
  });

  return (
    <div className="flex min-h-screen font-['Poppins'] flex-col md:flex-row"  id="home">
      {/* Left Content */}
      <div className="relative flex flex-col justify-center bg-white w-full md:w-1/2 max-w-[720px]">
        {/* Decorative Block */}
        <div className="hidden md:block absolute inset-y-0 right-0 w-20 bg-gray-300 rotate-[15deg] translate-x-10 translate-y-10"></div>

        {/* Text Content */}
        <div className="relative px-8 sm:px-16 md:px-20 lg:px-24 xl:px-28 2xl:px-32 py-12 max-w-[700px]">
          <p className="text-[18px] font-semibold tracking-widest text-[#b0b28a] uppercase mb-5">
            Hello! This is{" "}
                 <span className="text-[24px] sm:text-[28px] md:text-[32px] font-bold text-[#f59e0b]">
                        KRISHNA </span>
          </p>

          {/* Animated Heading */}
          <div className="flex flex-wrap w-[510px] items-baseline gap-2 text-3xl sm:text-4xl md:text-5xl font-extrabold text-black mb-6">
            <span>{text}</span>
            <Cursor cursorStyle="|" />
          </div>

          {/* Buttons Row */}
          <div className="flex flex-wrap gap-4">
            <button
             onClick={() => window.location.href = "#contact"}
             className="bg-[#b0b28a] text-white font-semibold rounded-md px-4 py-2 shadow-[0_10px_15px_-3px_rgba(176,178,138,0.3)]">
              Hire me
            </button>
            <a 
            href="./krishn@.pdf"
            className="border border-[#b0b28a] text-[#b0b28a] font-semibold rounded-md px-4 py-2 ">
              Download CV
            </a>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 flex items-center justify-center md:justify-end mt-8 md:mt-0">
        <img
          src={img}
          alt="UI/UX Designer"
          className="max-w-full h-auto object-cover md:max-h-[600px] mt-10 "
        />
      </div>
    </div>
  );
};

export default Home;
