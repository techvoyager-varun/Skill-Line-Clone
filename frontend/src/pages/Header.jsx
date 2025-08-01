import { useState } from "react";
import "./Header.css";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="curve-bg w-full max-w-[1920px] mx-auto px-4 relative z-10 overflow-hidden">
      <nav className="relative w-full z-10 py-6 text-white flex flex-wrap justify-between items-center">

        <a href="/" className="flex items-center relative hover:opacity-90 transition-opacity duration-300">
          <img className="w-10 sm:w-12 md:w-16" src="/Polygon 1.png" alt="logo" />
          <p className="absolute left-2 ml-2 text-[22px] md:text-[25px] leading-[32px] tracking-[1.28px] font-bold font-poppins text-[#113C49] dark:text-[#89c2d9]">
            Skilline
          </p>
        </a>

        <button
          className="md:hidden text-[#113C49] dark:text-[#89c2d9] text-3xl hover:opacity-80 transition-opacity duration-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        <ul className={`w-full md:w-auto mt-4 md:mt-0 ${isOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-10 items-center font-poppins text-[16px] md:text-[20px] lg:text-[22px] text-[#252641] dark:text-[#e2e2e2]`}>
          <li className="hover:text-[#F48C06] transition-colors duration-300 cursor-pointer">Home</li>
          <li className="hover:text-[#F48C06] transition-colors duration-300 cursor-pointer">Careers</li>
          <li className="hover:text-[#F48C06] transition-colors duration-300 cursor-pointer">Blog</li>
          <li className="hover:text-[#F48C06] transition-colors duration-300 cursor-pointer">About Us</li>
          <button className="font-poppins font-normal text-[22px] leading-[22px] tracking-[0.44px] bg-[#FFFFFF] dark:bg-[#2a2a40] px-4 py-1 md:px-6 md:py-2 rounded-[80px] text-[#6C6C6C] dark:text-[#e2e2e2] hover:bg-[#f0f0f0] dark:hover:bg-[#3a3a50] hover:shadow-md transition-all duration-300">
            Login
          </button>
          <button className="font-poppins font-medium text-[22px] leading-[22px] tracking-[0.44px] bg-[#F48C06] px-4 py-1 md:px-6 md:py-2 rounded-[80px] text-white hover:bg-[#e07d05] hover:shadow-md transition-all duration-300">
            Sign Up
          </button>
        </ul>
      </nav>

      <div className="max-w-[1920px] flex flex-col-reverse md:flex-row">
        <div className="w-full md:w-3/4 md:text-left space-y-6 py-20 px-8">
          <h1 className="text-[32px] md:text-[54px] lg:text-[64px] leading-[40px] md:leading-[72px] lg:leading-[96px] font-poppins font-bold text-[#113C49] dark:text-[#89c2d9]">
            <span className="text-[#F48C06]">Studying</span> Online is now much easier
          </h1>
          <p className="text-[#6C6C6C] dark:text-[#b8b8b8] text-[16px] md:text-[20px] font-poppins">
            Skilline is an interesting platform that will teach <br className="md:hidden" /> you in a more interactive way.
          </p>

          <div className="flex flex-row flex-wrap justify-center md:justify-normal items-center">
            <button className="bg-[#F48C06] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#e07d05] hover:shadow-md transition-all duration-300">
              Join for free
            </button>

            <div className="flex items-center flex-row flex-wrap justify-center gap-2 cursor-pointer group">
              <img className="w-[100px] md:w-[120px] pt-4 group-hover:opacity-90 transition-opacity duration-300" src="/Group 4.png" alt="play icon" />
              <p className="text-[#113C49] dark:text-[#89c2d9] font-medium group-hover:text-[#F48C06] transition-colors duration-300">Watch how it works</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex">
          <img className="w-[300px] md:w-[450px] lg:w-[570px] hover:scale-105 transition-transform duration-500" src="/header-pic.png" alt="header" />
        </div>
      </div>
    </header>
  );
};