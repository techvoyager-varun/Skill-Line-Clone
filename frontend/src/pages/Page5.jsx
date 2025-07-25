export const Page5 = () => {
  return (
    <section className="py-16 px-4 bg-white dark:bg-[#1a1a2e] font-poppins">
      <div className="space-y-20 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div className="flex flex-row justify-center items-center gap-36 relative group">
            <div className="flex flex-col gap-4 skew-x-[4deg] group-hover:skew-x-0 transition-transform duration-500">
              <img className="w-[100px] object-cover hover:scale-110 transition-transform duration-300" src="/image 2.png" alt="" />
              <img className="w-[100px] object-cover hover:scale-110 transition-transform duration-300" src="/image 3.png" alt="" />
            </div>
            <div className="flex flex-col gap-4 relative top-4 right-16 md:top-16 md:right-16 group-hover:-translate-y-4 transition-transform duration-500">
              <img className="w-[100px] object-cover hover:scale-110 transition-transform duration-300" src="/image 5.png" alt="" />
              <img className="w-[100px] object-cover hover:scale-110 transition-transform duration-300" src="/image 6.png" alt="" />
            </div>
          </div>

          <div className="p-4 flex flex-col gap-10 justify-center">
            <div className="flex flex-row items-center gap-4 group">
              <hr className="border h-px w-12 border-[#525596] group-hover:w-16 transition-all duration-500" />
              <h2 className="font-nunito font-normal text-[20px] leading-[100%] tracking-[0.2em] hover:text-[#F48C06] transition-colors duration-300">INTEGRATIONS</h2>
            </div>

            <p className="font-semibold -mt-4 text-[24px] md:text-[28px] lg:text-[40px] leading-[120%] tracking-[0] dark:text-white">
              200+ educational tools and platform<span className="text-[#F48C06]"> integrations</span>
            </p>
            <p className="text-left text-[#696984] dark:text-[#b8b8b8] hover:text-[#252641] dark:hover:text-white transition-colors duration-300">
              Schoology has every tool your classroom needs and comes pre-integrated with more than 200+ tools, student information systems (SIS), and education platforms.
            </p>
            
            <div className="flex items-center">
              <button className="font-poppins font-normal border mt-10 border-[#F48C06] text-[14px] leading-[22px] tracking-[0.44px] bg-[#FFFFFF] dark:bg-[#2a2a40] px-2 py-2 md:px-4 md:py-2 rounded-[80px] text-[#F48C06] hover:bg-[#F48C06] hover:text-white hover:shadow-md transition-all duration-300">
                See more features
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-56 md:gap-0 md:[&>*:nth-child(1)]:order-2 md:[&>*:nth-child(2)]:order-1">
          <div className="relative w-[300px] md:w-[358.4px] mx-auto group">
            <img className="w-full object-cover group-hover:scale-105 transition-transform duration-500" src="/Mask Group.png" alt="Testimonial" />
            <div className="absolute top-36 -right-8 lg:-right-16 group-hover:rotate-12 transition-transform duration-700">
              <img className="w-[120px] object-cover" src="/Group 51.png" alt="Decoration" />
            </div>

            <div className="absolute w-fit max-w-[285px] md:max-w-[300px] lg:max-w-[400px] z-10 top-[350px] left-10 -right-20 p-4 rounded-xl border border-blue-300 shadow-md bg-white dark:bg-[#2a2a40] hover:shadow-lg hover:scale-105 transition-all duration-300">
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-red-300 via-transparent to-blue-300 rounded-l-xl" />

              <p className="text-sm text-gray-700 dark:text-[#b8b8b8] mb-4 pl-4 border-l-2 border-gray-300">
                "Thank you so much for your help. It's exactly what I've been looking for. 
                You won't regret it. It really saves me time and effort. Skilline is exactly 
                what our business has been lacking."
              </p>

              <div className="flex justify-between items-center">
                <p className="text-gray-800 dark:text-white font-semibold">Gloria Rose</p>
              </div>
              <p className="text-sm text-gray-500 dark:text-[#b8b8b8] mt-1 text-right">12 reviews at Yelp</p>
            </div>
          </div>

          <div className="p-4 flex flex-col gap-10 justify-center">
            <div className="flex flex-row items-center gap-4 group">
              <hr className="border h-px w-12 border-[#525596] group-hover:w-16 transition-all duration-500" />
              <h2 className="font-nunito font-normal text-[20px] leading-[100%] tracking-[0.2em] hover:text-[#F48C06] transition-colors duration-300">TESTIMONIAL</h2>
            </div>

            <p className="font-semibold -mt-4 text-[24px] md:text-[28px] lg:text-[44px] leading-[120%] tracking-[0] dark:text-white">
              What They Say?
            </p>
            <p className="text-left text-[#696984] dark:text-[#b8b8b8] hover:text-[#252641] dark:hover:text-white transition-colors duration-300">
              Skilline has got more than 100k positive <br /> ratings from our users around the world. 
            </p>
            <p className="text-left text-[#696984] dark:text-[#b8b8b8] hover:text-[#252641] dark:hover:text-white transition-colors duration-300">
              Some of the students and teachers were <br /> greatly helped by the Skilline. 
            </p>
            <p className="text-left text-[#696984] dark:text-[#b8b8b8] hover:text-[#252641] dark:hover:text-white transition-colors duration-300">
              Are you too? Please give your assessment 
            </p>
            
            <div className="flex items-center">
              <button className="font-poppins font-normal border mt-10 border-[#F48C06] text-[14px] leading-[22px] tracking-[0.44px] bg-[#FFFFFF] dark:bg-[#2a2a40] px-4 py-2 pr-16 rounded-[80px] text-[#F48C06] relative hover:bg-[#F48C06] hover:text-white hover:shadow-md transition-all duration-300">
                Write your assessment
                <img className="w-[40px] absolute top-[-1px] right-[0px] hover:right-[-5px] transition-all duration-300" src="Group 32.png" alt="Arrow"/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
