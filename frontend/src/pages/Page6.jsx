export const Page6 = () => {
  return (
    <section className="py-16 px-4 bg-white dark:bg-[#1a1a2e]">
      <p className="font-nunito font-bold text-center text-[28px] sm:text-[32px] md:text-[36px] my-6 tracking-normal text-[#252641] dark:text-white hover:text-[#F48C06] transition-colors duration-300">
        Latest News and Resources
      </p>

      <p className="font-nunito font-normal text-[18px] sm:text-[20px] md:text-[22px] leading-[180%] tracking-normal text-center text-[#696984] dark:text-[#b8b8b8] max-w-3xl mx-auto hover:text-[#252641] dark:hover:text-white transition-colors duration-300">
        See the developments that have occurred to Skillines in the world
      </p>

      <div className="flex flex-col lg:flex-row justify-center items-stretch gap-20 md:gap-8 mt-12 max-w-6xl mx-auto px-2">
        <div className="flex flex-col gap-4 lg:w-1/2 max-w-[500px] mx-auto group">
          <img 
            className="rounded-xl w-full object-cover group-hover:scale-105 transition-transform duration-500" 
            src="/Group 40.png" 
            alt="Main News" 
          />
          <button className="text-sm text-[#252641] dark:text-white font-semibold w-max px-3 py-1 border bg-[#F4C467] dark:bg-[#F48C06] rounded-full hover:bg-[#F48C06] hover:text-white transition-colors duration-300">
            NEWS
          </button>
          <p className="font-semibold text-xl text-[#252641] dark:text-white group-hover:text-[#F48C06] transition-colors duration-300">
            Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution
          </p>
          <p className="text-[#696984] dark:text-[#b8b8b8] group-hover:text-[#252641] dark:hover:text-white transition-colors duration-300">
            Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...
          </p>
          <p className="text-[#696984] dark:text-[#b8b8b8] underline font-semibold mt-2 cursor-pointer hover:text-[#F48C06] transition-colors duration-300">
            Read more
          </p>
        </div>

        <div className="flex flex-col gap-6 lg:w-1/2 max-w-[500px] mx-auto">
          <div className="flex flex-row flex-wrap md:flex-nowrap gap-4 justify-center md:items-start group">
            <img 
              className="w-[180px] rounded-xl object-cover group-hover:scale-105 transition-transform duration-500" 
              src="/Group 22.png" 
              alt="News 1" 
            />
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-[#252641] dark:text-white text-base mb-2 group-hover:text-[#F48C06] transition-colors duration-300">
                Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand
              </p>
              <p className="text-[#696984] dark:text-[#b8b8b8] text-sm group-hover:text-[#252641] dark:hover:text-white transition-colors duration-300">
                Class Technologies Inc., the company that created Class,...
              </p>
            </div>
          </div>

          <div className="flex flex-row flex-wrap md:flex-nowrap gap-4 justify-center md:items-start group">
            <img 
              className="w-[180px] rounded-xl object-cover group-hover:scale-105 transition-transform duration-500" 
              src="/Group 42.png" 
              alt="News 2" 
            />
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-[#252641] dark:text-white text-base mb-2 group-hover:text-[#F48C06] transition-colors duration-300">
                Zoom's earliest investors are betting millions on a better Zoom for schools
              </p>
              <p className="text-[#696984] dark:text-[#b8b8b8] text-sm group-hover:text-[#252641] dark:hover:text-white transition-colors duration-300">
                Zoom was never created to be a consumer product. Nonetheless, the...
              </p>
            </div>
          </div>

          <div className="flex flex-row flex-wrap md:flex-nowrap gap-4 justify-center md:items-start group">
            <img 
              className="w-[180px] rounded-xl object-cover group-hover:scale-105 transition-transform duration-500" 
              src="/Group 43.png" 
              alt="News 3" 
            />
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-[#252641] dark:text-white text-base mb-2 group-hover:text-[#F48C06] transition-colors duration-300">
                Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom Classrooms
              </p>
              <p className="text-[#696984] dark:text-[#b8b8b8] text-sm group-hover:text-[#252641] dark:hover:text-white transition-colors duration-300">
                This year, investors have reaped big financial returns from betting on Zoom...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
