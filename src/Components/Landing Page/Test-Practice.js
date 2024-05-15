function TestPractice() {
  return (
    <>
      <div className="bg-[#EAF1FF] w-full flex 2xl:mt-[157px] xl:mt-[4px] max-w-[1920px] mx-auto">
        <div className="pl-[58px]">
          <img className="w-[574px]" src="svg/phone.svg" alt="" />
        </div>

        <div className="flex flex-col m-[110px] max-w-[570px] gap-[75px]">
          <h2 className="text-[#061C3D] font-Poppins font-bold text-[40px]">
            Test Practice Section
          </h2>

          <div className="flex flex-col gap-[51px]">
            <div className="flex flex-col gap-1">
              <h2 className="font-poppins text-2xl font-semibold">
              Improve your University Admission Chances!
              </h2>
              <p className="text-[#000] text-sm">
              Welcome to our comprehensive test preparation platform! Tailored to your needs, our diverse array of sections cater to every category and subject you require. Whether you're gearing up for standardized exams, admissions, or academic assessments, we've got you covered. Choose your desired category or subject, and embark on a journey towards mastery and success."

              </p>
            </div>

            <div className="flex flex-col gap-1">
              <h2 className="font-poppins text-2xl font-semibold">
                Master Your Test Skills
              </h2>
              <p className="text-[#000] text-sm">
              Ace your exams with our test preparation resources. Choose from a variety of categories and customize your practice sessions based on your individual needs and preferences. Whether you're studying for standardized tests or brushing up on specific subjects, our platform provides a comprehensive suite of practice questions and interactive tools to help you succeed. Boost your confidence, track your progress, and achieve your academic goals with our test preparation platform.

              </p>
            </div>

            <div class="flex gap-2 mt-2 justify-center">
              <button class="font-Poppins bg-[#2D429B] h-[47px] w-[114px]  rounded-lg font-medium">
                <span class="text-white text-base py-[10px] px-[16px]">
                  Test
                </span>
              </button>
            </div>

            {/* <div className="flex justify-end gap-4 pt-[60px]">
              <button className="bg-[#000] rounded-lg py-[4px] px-[12px]">
                <span className="flex">
                  <img src="assets/svg/apple.svg" alt="" />
                  <div className="flex flex-col gap-1">
                    <p className="text-[#E7E7E7] text-sm font-normal">
                      Download on the
                    </p>
                    <p className="text-[#E7E7E7] text-lg font-semibold">
                      Apple Store
                    </p>
                  </div>
                </span>
              </button>

              <button className="bg-[#000] rounded-lg py-[4px] px-[12px]">
                <span className="flex">
                  <img src="assets/svg/playstore.svg" alt="" />
                  <div className="flex flex-col gap-1">
                    <p className="text-[#E7E7E7] text-sm font-normal">
                      Download on the
                    </p>
                    <p className="text-[#E7E7E7] text-lg font-semibold">
                      Play Store
                    </p>
                  </div>
                </span>
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default TestPractice;
