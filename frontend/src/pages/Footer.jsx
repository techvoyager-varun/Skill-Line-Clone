import { useState } from "react";

export const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Email:", email);
    alert("Submitted Email: " + email);
    setEmail(""); 
  }

  return (
    <footer className="py-16 px-4 bg-[#252641] max-w-[1920px] mx-auto">
      <div className="flex flex-col gap-8 justify-center items-center max-w-6xl mx-auto">
        <div className="flex flex-row gap-4 items-center group">
          <a href="/" className="flex items-center relative hover:opacity-90 transition-opacity duration-300">
            <img
              className="w-10 sm:w-12 md:w-16"
              src="/Polygon 2.png"
              alt="logo"
            />
            <p className="absolute left-4 ml-2 text-[22px] md:text-[25px] leading-[32px] tracking-[1.28px] font-bold font-poppins text-white group-hover:text-[#F48C06] transition-colors duration-300">
              Skilline
            </p>
          </a>

          <hr className="rotate-90 w-20 ml-6 border-t border-[#626381] group-hover:border-[#F48C06] transition-colors duration-300" />

          <p className="text-[15px] md:text-[17px] -ml-9 tracking-[1.28px] font-bold font-poppins text-white group-hover:text-[#F48C06] transition-colors duration-300">
            Virtual Class <br /> for Zoom
          </p>
        </div>

        <p className="text-[22px] md:text-[18px] leading-[32px] text-center tracking-[1.28px] font-bold font-poppins text-[#B2B3CF] hover:text-white transition-colors duration-300">
          Subscribe to get our Newsletter
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-row gap-4 max-w-[500px] w-full mx-auto"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded-full text-left placeholder:text-left focus:outline-none focus:ring-2 focus:ring-[#F48C06] transition-all duration-300"
          />
          <button
            type="submit"
            className="font-poppins font-medium text-[15px] leading-[22px] tracking-[0.44px] bg-[#F48C06] px-4 py-1 md:px-6 md:py-2 rounded-[80px] text-white hover:bg-[#e07d05] hover:shadow-md transition-all duration-300"
          >
            Subscribe
          </button>
        </form>

        <div className="flex flex-row gap-4 text-[15px] md:text-[17px] text-[#B2B3CF] mt-8">
          <span className="hover:text-[#F48C06] transition-colors duration-300 cursor-pointer">Careers</span> | 
          <span className="hover:text-[#F48C06] transition-colors duration-300 cursor-pointer">Blog</span> | 
          <span className="hover:text-[#F48C06] transition-colors duration-300 cursor-pointer">About Us</span>
        </div>
        <p className="text-[15px] md:text-[17px] text-[#B2B3CF] -mt-4 hover:text-white transition-colors duration-300">
          © 2025 Varun Rawat. All Rights Reserved 
        </p>
      </div>
    </footer>
  );
};