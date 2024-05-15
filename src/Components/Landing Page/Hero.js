import UserCard from "./User-Card";

function Hero() {
  return (
    <>
      <div class="bg-[#EDF1FF] w-full">
        <div class="bg-[#EDF1FF] max-w-[1440px] mx-auto h-[500px]">
          <div class="flex p-10">
            <div class="flex flex-col gap-4 w-[30%]">
              <div>
                <h2 class="text-[#536780] font-bold text-[64px] max-w-[372px] font-Poppins">
                A Platform for 
                  <span class="text-[#2D429B] font-bold text-[64px] font-Poppins">
                    University Applicants
                  </span>
                </h2>
              </div>
            </div>

            <div class="w-[70%]">
              <UserCard></UserCard>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
