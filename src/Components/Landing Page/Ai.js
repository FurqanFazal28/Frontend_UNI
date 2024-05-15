import "../css/Ai.css";
import { Link } from "react-router-dom";

function Ai() {
  return (
    <>
      <div class="bg-white w-full">
        <div class="bg-white max-w-[1440px] mx-auto pt-[110px]">
          <div class="flex justify-center gap-[22px]">
            <div className="flex flex-col">
              <h2 class="text-[#061C3D] font-Poppins font-bold text-[40px]">
                Ai Consultation
              </h2>
              <p class="text-[#061C3D] font-Poppins max-w-[777px] text-left text-[20px] font-medium">
                Embark on a revolutionary journey with our AI Consultation
                service tailored specifically for university exploration.
                Harnessing the power of cutting-edge AI technologies, we've
                crafted intuitive tools that seamlessly navigate through vast
                databases to match you with the ideal university. Our AI
                algorithms analyze diverse factors, including academic programs,
                location preferences, and campus culture, to deliver
                personalized recommendations that align with your aspirations.
                Whether you're a prospective student or an academic advisor, our
                AI-driven solutions streamline the university selection process,
                saving you time and effort while ensuring the perfect fit for
                your educational journey.
              </p>

              <div class="flex gap-2 mt-2">
                <button class="font-Poppins bg-[#2D429B] h-[34px] rounded-lg font-medium">
                  <span class="text-white py-[10px] px-[16px]">
                    <Link to="/consultant">Consultation</Link>
                  </span>
                </button>
              </div>
            </div>
            <div class="video-container w-[500px] h-[200px]">
              <video class="animation rounded-[50px]" controls>
                <source src="./videos/user-video.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ai;
