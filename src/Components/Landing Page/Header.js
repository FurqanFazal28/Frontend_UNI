import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <div class="bg-[#EDF1FF]  w-full">
        <div class="px-[24px] bg-[#EDF1FF] max-w-[1440px] mx-auto flex justify-between h-[48px] items-center">
          <div class="flex justify-center items-center gap-2">
            <img src="../../../assets/images/svg/Icon.svg" alt="" />
            <h2  class="text-[#061C3D] text-xl  font-bold">
              <Link to="/">
            UniLinker
            </Link>
            </h2>
          </div>

          <div class="flex  justify-end gap-36 items-center">
            <div class="flex gap-4">
              <div class="flex gap-2 justify-center items-center">
                <img src="./images/svg/home-2.svg" alt="" />
                <h2 class="text-[#444750] text-sm font-normal font-Poppins">
                  <Link to="/consultant">Ai Consultation</Link>
                </h2>
              </div>
              <div class="flex gap-2 justify-center items-center">
                <img src="./images/svg/monitor.svg" alt="" />
                <h2 class="text-[#444750] text-sm font-normal font-Poppins">
                 <Link to="/Question">Test Practice</Link> 
                </h2>
              </div>
              <div class="flex gap-2 justify-center items-center">
                <img src="./images/svg/box.svg" alt="" />
                <h2 class="text-[#444750] text-sm font-normal font-Poppins">
                  Discussion Forum
                </h2>
              </div>
              <div class="flex gap-2 justify-center items-center">
                <img src="./images/svg/message-question.svg" alt="" />
                <h2 class="text-[#444750] text-sm font-normal font-Poppins">
                  <Link to="/unifilter"> University Filtration</Link>
                </h2>
              </div>
            </div>

            <div class="flex gap-2">
              <button>Login</button>
              <button class="font-Poppins bg-[#2D429B] h-[34px] rounded-lg font-medium">
                <span class="text-white py-[10px] px-[16px]">Register</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
