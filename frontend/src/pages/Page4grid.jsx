export const Page4grid = () => {
  return (
    <section className="py-16 px-4 bg-white dark:bg-[#1a1a2e] font-poppins">
      <div className="space-y-28 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 relative group">
            <div className="absolute z-0 -top-6 left-14 group-hover:scale-110 transition-transform duration-500">
              <img className="w-[80px]" src="/Ellipse 22.png" alt="" />
            </div>
            <div className="absolute -top-8 left-36 group-hover:rotate-180 transition-transform duration-700">
              <img className="w-[20px]" src="/Ellipse 21.png" alt="" />
            </div>
            <div className="absolute z-0 bottom-6 right-24 group-hover:scale-110 transition-transform duration-500">
              <img className="w-[120px]" src="/Ellipse 19.png" alt="" />
            </div>
            <div className="absolute bottom-6 right-52 group-hover:-rotate-180 transition-transform duration-700">
              <img className="w-[20px]" src="/Ellipse 20.png" alt="" />
            </div>
            <img className="relative z-10 hover:scale-105 transition-transform duration-500" src="/Group 71.png" alt="" />
          </div>

          <div className="p-4">
            <p className="font-semibold text-[24px] md:text-[28px] lg:text-[40px] leading-[120%] tracking-[0] dark:text-white">
              A <span className="text-[#F48C06]">user interface </span> designed <br /> for the classroom
            </p>

            <div className="flex flex-col gap-4 mt-10">
              <div className="flex flex-row gap-8 items-center relative group">
                <div className="absolute w-[100px] -top-4 -left-10 z-0 group-hover:scale-110 transition-transform duration-300">
                  <img src="/Ellipse 24.png" alt="" />
                </div>
                <img className="w-[22px] relative -top-6 lt:top-0 z-10 group-hover:scale-125 transition-transform duration-300" src="/Group 72.png" alt="" />
                <p className="text-left text-[#696984] dark:text-[#b8b8b8] group-hover:text-[#252641] dark:group-hover:text-white transition-colors duration-300">
                  Teachers don't get lost in the grid view <br /> and have a dedicated Podium space.
                </p>
              </div>

              <div className="flex flex-row gap-8 items-center relative group">
                <div className="absolute w-[100px] -top-4 -left-10 z-0 group-hover:scale-110 transition-transform duration-300">
                  <img src="/Ellipse 24.png" alt="" />
                </div>
                <img className="w-[22px] relative -top-3 lt:top-0 z-10 group-hover:scale-125 transition-transform duration-300" src="/Group 73.png" alt="" />
                <p className="text-left text-[#696984] dark:text-[#b8b8b8] group-hover:text-[#252641] dark:group-hover:text-white transition-colors duration-300">
                  TA's and presenters can be moved to <br /> the front of the class.
                </p>
              </div>

              <div className="flex flex-row gap-8 items-center relative group">
                <div className="absolute w-[100px] -top-4 -left-10 z-0 group-hover:scale-110 transition-transform duration-300">
                  <img src="/Ellipse 24.png" alt="" />
                </div>
                <img className="w-[22px] relative -top-3 lt:top-0 z-10 group-hover:scale-125 transition-transform duration-300" src="/users 2.png" alt="" />
                <p className="text-left text-[#696984] dark:text-[#b8b8b8] group-hover:text-[#252641] dark:group-hover:text-white transition-colors duration-300">
                  Teachers can easily see all students <br /> and class data at one time.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:[&>*:nth-child(1)]:order-2 md:[&>*:nth-child(2)]:order-1">
          <img className="w-96 object-cover hover:scale-105 transition-transform duration-500" src="/Group 122.png" alt="" />
          <div className="p-4 flex flex-col gap-10 justify-center">
            <p className="font-semibold text-[24px] md:text-[28px] lg:text-[40px] leading-[120%] tracking-[0] dark:text-white">
              <span className="text-[#F48C06]">Tools </span> Tools For Teachers <br className="md:hidden" /> And Learners
            </p>
            <p className="text-left text-[#696984] dark:text-[#b8b8b8] hover:text-[#252641] dark:hover:text-white transition-colors duration-300">
              Class has a dynamic set of teaching tools built to be deployed and used during class.
              Teachers can handout assignments in real-time for students to complete and submit.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img className="w-[480px] object-cover hover:scale-105 transition-transform duration-500" src="/Group 92.png" alt="" />
          <div className="p-4 flex flex-col gap-10 pt-20">
            <p className="font-semibold text-[24px] md:text-[28px] lg:text-[40px] leading-[120%] tracking-[0] dark:text-white">
              Assessments, <br /> <span className="text-[#F48C06]">Quizzes, </span>Tests 
            </p>
            <p className="text-left text-[#696984] dark:text-[#b8b8b8] hover:text-[#252641] dark:hover:text-white transition-colors duration-300">
              Easily launch live assignments, quizzes, and tests.
              Student results are automatically entered in the online gradebook.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:[&>*:nth-child(1)]:order-2 md:[&>*:nth-child(2)]:order-1">
          <img className="w-[480px] object-cover hover:scale-105 transition-transform duration-500" src="/Group 124.png" alt="" />
          <div className="p-4 flex flex-col gap-10 justify-center">
            <p className="font-semibold text-[24px] md:text-[28px] lg:text-[40px] leading-[120%] tracking-[0] dark:text-white">
              <span className="text-[#F48C06]">Class Management </span> <br/>Tools for Educators
            </p> 
            <p className="text-left text-[#696984] dark:text-[#b8b8b8] hover:text-[#252641] dark:hover:text-white transition-colors duration-300">
              Class provides tools to help run and manage the class such as Class Roster, Attendance, and more. With the Gradebook, teachers can review and grade tests and quizzes in real-time.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img className="w-[480px] object-cover hover:scale-105 transition-transform duration-500" src="/Group 106.png" alt="" />
          <div className="p-4 flex flex-col gap-10 pt-10">
            <p className="font-semibold text-[24px] md:text-[28px] lg:text-[40px] leading-[120%] tracking-[0] dark:text-white">
              One-on-One<br /> <span className="text-[#F48C06]">Discussions </span>
            </p>
            <p className="text-left text-[#696984] dark:text-[#b8b8b8] hover:text-[#252641] dark:hover:text-white transition-colors duration-300">
              Teachers and teacher assistants can talk with students privately without leaving the Zoom environment.
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <button className="font-poppins font-normal border -mt-10 border-[#F48C06] text-[18px] leading-[22px] tracking-[0.44px] bg-[#FFFFFF] dark:bg-[#2a2a40] px-4 py-4 md:px-6 md:py-4 rounded-[80px] text-[#F48C06] hover:bg-[#F48C06] hover:text-white hover:shadow-md transition-all duration-300">
            See more features
          </button>
        </div>
      </div>
    </section>
  );
};