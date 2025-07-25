export const Page3 = () => {
  return (
    <section className="py-16 px-4 bg-white dark:bg-[#1a1a2e]">
      <div className="max-w-6xl mx-auto px-12 md:px-8 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12 md:gap-44">
        <div className="w-full md:w-1/2 relative text-center md:text-left">
          <img
            className="absolute -top-1 -inset-3 z-0 w-[40px] hover:rotate-12 transition-transform duration-700"
            src="/Ellipse 12.png"
            alt="Decoration"
          />
          
          <div className="relative z-10 space-y-6">
            <h1 className="text-2xl sm:text-3xl md:text-2xl font-bold text-[#252641] dark:text-white leading-relaxed">
              Everything you can do in a physical classroom, <span className="text-[#F48C06]">you can do with Skilline</span>
            </h1>
            <p className="text-[#696984] dark:text-[#b8b8b8] text-base md:text-lg leading-relaxed">
              Skilline's school management software helps traditional and online schools manage scheduling,
              attendance, <img
                className="absolute top-28 -right-11 w-[20px] hover:rotate-180 transition-transform duration-1000"
                src="/Ellipse 12.png"
                alt="Decoration"
              /> payments and virtual classrooms all in one secure cloud-based system.
            </p>
            <p className="text-[#F48C06] font-medium cursor-pointer hover:underline transition-all duration-300">
              Learn more
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 relative group">
          <img
            src="/Group 17.png"
            alt="Virtual Classroom"
            className="w-full max-w-[500px] mx-auto z-10 relative group-hover:scale-105 transition-transform duration-500"
          />
          <img
            className="absolute -top-3 -left-3 z-0 w-[80px] group-hover:rotate-12 transition-transform duration-700"
            src="/Rectangle 18.png"
            alt="Decoration"
          />
          <img
            className="absolute -bottom-3 -right-3 z-0 w-[160px] group-hover:-rotate-12 transition-transform duration-700"
            src="/Rectangle 17.png"
            alt="Decoration"
          />
        </div>
      </div>

      <div className="text-center mt-20">
        <p className="font-poppins font-bold text-[28px] sm:text-[32px] md:text-[36px] leading-[180%] tracking-[0px] hover:text-[#F48C06] transition-colors duration-300 dark:text-white">
          Our <span className="text-[#F48C06]">Features</span>
        </p>
        <p className="font-poppins font-normal text-[20px] sm:text-[22px] md:text-[25px] mt-6 md:mt-2 leading-[180%] tracking-[0] text-[#696984] dark:text-[#b8b8b8] hover:text-[#252641] dark:hover:text-white transition-colors duration-300">
          This very extraordinary feature, can make learning activities more efficient
        </p>
      </div>
    </section>
  );
};