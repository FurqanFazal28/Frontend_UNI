import React from "react";
import "../css/Common.css";

const Footer = () => {
  const services = [
    { name: "Universities" },
    { name: "Courses" },
    { name: "Admissions" },
    { name: "Scholarships" },
    { name: "Research" },
    { name: "Events" },
    { name: "News" },
    { name: "About Us" },
  ];

  const company = [
    { name: "Locations" },
    { name: "About Us" },
    { name: "Careers" },
    { name: "Press" },
    { name: "Blog" },
  ];

  const business = [
    { name: "Partners" },
    { name: "Carbon for Campus" },
    { name: "Occupational Health" },
    { name: "COVID Employer Program" },
  ];

  const support = [{ name: "support@uniinfo.com" }, { name: "Support Center" }];

  return (
    <div className="max-w-[1920px] mx-auto bg-white">
      <div className="p-10 flex flex-col xl:px-[245px] 2xl:px-[346px]">
        <div className="flex">
          <img src="assets/svg/plus.svg" alt="" />
        </div>

        <div className="flex justify-between">
          <div className="2xl:max-w-[509px] xl:max-w-[387px]">
            <h2 className="title-font-lg">Explore Universities!</h2>
          </div>

          <div className="flex gap-[10px]">
            <button className="bg-[#14113A] w-[120px] h-[50px] rounded-full">
              <span className="text-white font-poppins">Login</span>
            </button>
            <button className="bg-[#14113A] w-[120px] h-[50px] rounded-full">
              <span className="font-poppins text-white">Sign Up</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-3">
          <div className="flex flex-col pt-[118px] gap-3">
            <h2 className="text-[#8F8F8F] font-poppins font-semibold text-[20px]">
              Service
            </h2>
            {services.map((item, index) => (
              <p
                key={index}
                className="text-[#898989] font-poppins text-[16px] font-medium"
              >
                {item.name}
              </p>
            ))}
          </div>

          <div className="flex flex-col pt-[118px] gap-3">
            <h2 className="text-[#8F8F8F] font-poppins font-semibold text-[20px]">
              COMPANY
            </h2>
            {company.map((item, index) => (
              <p
                key={index}
                className="text-[#898989] font-poppins text-[16px] font-medium"
              >
                {item.name}
              </p>
            ))}
          </div>

          {/* <div className="flex flex-col pt-[118px] gap-3">
            <h1 className="text-[#8F8F8F] font-poppins font-semibold text-[20px]">
              FOR BUSINESS
            </h1>
            {business.map((item, index) => (
              <p
                key={index}
                className="text-[#898989] font-poppins text-[16px] font-medium"
              >
                {item.name}
              </p>
            ))}
          </div> */}

          <div className="flex flex-col pt-[118px] gap-3">
            <h2 className="text-[#8F8F8F] font-poppins font-semibold text-[20px]">
              GET SUPPORT
            </h2>
            {support.map((item, index) => (
              <p
                key={index}
                className="text-[#898989] font-poppins text-[16px] font-medium"
              >
                {item.name}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full bg-[#E6E8EB] px-[346px] max-w-[1920px] mx-auto">
        <div className="grid grid-cols-12 h-[85px]">
          <div className="col-span-6 flex  items-center justify-between">
            <div className="flex justify-center items-center gap-1">
              <img
                className="w-[16px] h-[30px]"
                src="svg/terms-icon.svg"
                alt=""
              />
              <p className="text-[#8F8F8F] font-inter text-[16px] font-medium">
                Terms & Conditions
              </p>
            </div>
            <p className="text-[#8F8F8F] font-inter text-[16px] font-medium">
              Cookie Policy
            </p>
            <p className="text-[#8F8F8F] font-inter text-[16px] font-medium">
              Privacy Policy
            </p>
          </div>

          <div className="col-span-6 flex justify-end items-center gap-[0.25rem]">
            <img src="svg/footer-lang.svg" alt="" />
            <p className="text-[#2E2E2E] text-[16px] font-normal">English</p>
            <img src="assets/svg/up-arrow.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
