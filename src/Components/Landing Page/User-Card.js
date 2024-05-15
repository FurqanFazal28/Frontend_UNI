import "../css/User-Card.css";

function UserCard() {
  return (
    <>
      <div class="layer-container">
        <div class="layer-front flex gap-[130px]">
          <div class="rectangle w-[319px]   back-rectangle  flex flex-col p-2 gap-1 rounded-xl">
            <div class="flex gap-2 items-center pl-[2px]">
              <h2 class="text-white font-Poppins font-medium bg-[#2D429B] rounded-lg p-4 text-[25px]">
                University Filtration
              </h2>
            </div>
          </div>
        </div>

        {/* <div class="layer-front flex gap-[130px]">
          <div class="rectangle w-[319px]  h-[212px] front-rectangle1 bg-white flex flex-col p-2 gap-1 rounded-xl">
            <div class="flex gap-2 items-center pl-[2px]">
              <img
                class="w-[16.365px] h-[16.293px]"
                src=".images/svg/usercard.svg"
                alt=""
              />
              <h2 class="text-[#242424] text-xs font-bold font-Raleway">
                Username
              </h2>
            </div>
            <div class="w-[292.554px] h-[ 119.304px] flex flex-col justify-center items-center rounded-xl bg-[#EDF1FF]">
              <img src="./images/png/Rectangle 2.png" alt="" />
            </div>

            <div class="flex justify-between items-center">
              <h2 class="text-[#516162] font-Quicksand font-bold text-xs">
                Title
              </h2>

              <div class="flex gap-2 items-center justify-center">
                <img src="./images/png/like2.png" alt="" />
                <img src="./images/png/arrow2.png" alt="" />
              </div>
            </div>

            <div class="">
              <p class="text-[#516162] text-[10px] font-normal font-Poppins">
                The world is beautiful and so are you who doesn’t like to travel
                this far.
              </p>
            </div>
          </div>
          <div class="rectangle w-[319px]  h-[212px] front-rectangle2 bg-white flex flex-col p-2 gap-1 rounded-xl">
            <div class="flex gap-2 items-center pl-[2px]">
              <img
                class="w-[16.365px] h-[16.293px]"
                src="./images/svg/usercard.svg"
                alt=""
              />
              <h2 class="text-[#242424] text-xs font-bold font-Raleway">
                Username
              </h2>
            </div>
            <div class="w-[292.554px] h-[ 119.304px] flex flex-col justify-center items-center rounded-xl bg-[#EDF1FF]">
              <img src="./images/png/Rectangle 2.png" alt="" />
            </div>

            <div class="flex justify-between items-center">
              <h2 class="text-[#516162] font-Quicksand font-bold text-xs">
                Title
              </h2>

              <div class="flex gap-2 items-center justify-center">
                <img src="./images/png/like2.png" alt="" />
                <img src="./images/png/arrow2.png" alt="" />
              </div>
            </div>

            <div class="">
              <p class="text-[#516162] text-[10px] font-normal font-Poppins">
                The world is beautiful and so are you who doesn’t like to travel
                this far.
              </p>
            </div>
          </div>
        </div> */}

        <div class="layer-middle flex gap-[130px]">
          <div class="rectangle w-[319px]   back-rectangle  flex flex-col p-2 gap-1 rounded-xl">
            <div class="flex gap-2 items-center pl-[2px]">
              <h2 class="text-white font-Poppins font-medium bg-[#2D429B]  p-4 rounded-lg text-[25px]">
                Test Practice
              </h2>
            </div>
          </div>

          <div class="rectangle w-[319px]   back-rectangle  flex flex-col p-2 gap-1 rounded-xl">
            <div class="flex gap-2 items-center pl-[2px]">
              <h2 class="text-white font-Poppins font-medium bg-[#2D429B] p-4 rounded-lg text-[25px]">
                Discussion Forum
              </h2>
            </div>
          </div>
        </div>

        {/* <div class="layer-middle flex gap-[130px]">
          <div class="rectangle w-[319px]  h-[212px] middle-rectangle1 bg-white flex flex-col p-2 gap-1 rounded-xl">
            <div class="flex gap-2 items-center pl-[2px]">
              <img
                class="w-[16.365px] h-[16.293px]"
                src="./images/svg/usercard.svg"
                alt=""
              />
              <h2 class="text-[#242424] text-xs font-bold font-Raleway">
                Username
              </h2>
            </div>
            <div class="w-[292.554px] h-[ 119.304px] flex flex-col justify-center items-center rounded-xl bg-[#EDF1FF]">
              <img src="./images/png/Rectangle 2.png" alt="" />
            </div>

            <div class="flex justify-between items-center">
              <h2 class="text-[#516162] font-Quicksand font-bold text-xs">
                Title
              </h2>

              <div class="flex gap-2 items-center justify-center">
                <img src="./images/png/like2.png" alt="" />
                <img src="./images/png/arrow2.png" alt="" />
              </div>
            </div>

            <div class="">
              <p class="text-[#516162] text-[10px] font-normal font-Poppins">
                The world is beautiful and so are you who doesn’t like to travel
                this far.
              </p>
            </div>
          </div>
          <div class="rectangle w-[319px]  h-[212px] middle-rectangle2 bg-white flex flex-col p-2 gap-1 rounded-xl">
            <div class="flex gap-2 items-center pl-[2px]">
              <img
                class="w-[16.365px] h-[16.293px]"
                src="./images/svg/usercard.svg"
                alt=""
              />
              <h1 class="text-[#242424] text-xs font-bold font-Raleway">
                Username
              </h1>
            </div>
            <div class="w-[292.554px] h-[ 119.304px] flex flex-col justify-center items-center rounded-xl bg-[#EDF1FF]">
              <img src="./images/png/Rectangle 2.png" alt="" />
            </div>

            <div class="flex justify-between items-center">
              <h2 class="text-[#516162] font-Quicksand font-bold text-xs">
                Title
              </h2>

              <div class="flex gap-2 items-center justify-center">
                <img src="./images/png/like2.png" alt="" />
                <img src="./images/png/arrow2.png" alt="" />
              </div>
            </div>

            <div class="">
              <p class="text-[#516162] text-[10px] font-normal font-Poppins">
                The world is beautiful and so are you who doesn’t like to travel
                this far.
              </p>
            </div>
          </div>
        </div> */}

        <div class="layer-back flex gap-[130px]">
          <div class="rectangle w-[319px]   back-rectangle  flex flex-col p-2 gap-1 rounded-xl">
            <div class="flex gap-2 items-center pl-[2px]">
              <h2 class="text-white font-Poppins font-medium bg-[#2D429B] p-4 rounded-lg text-[25px]">
                Ai Consultation
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserCard;
