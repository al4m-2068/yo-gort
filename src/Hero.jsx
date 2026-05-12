import React from "react";

const Hero = () => {
  return (
    <div className="bg-whitey min-h-screen px-5 font-sans">

      {/* Hero Section */}
      <section className="text-center max-w-[400px] mx-auto">

        {/* Badge */}
        <div className="bg-aquo text-navo inline-block px-[15px] py-[6px] rounded-[20px] text-[12px] font-bold rotate-[-2deg] mb-5">
          FINE RECIPE!
        </div>

        {/* Title */}
        <h1 className="text-navo text-[42px] leading-none mb-[25px] font-black">
          Your Daily <br />
          Spoon of <br />
          <span className="text-redo">
            Happiness
          </span>
        </h1>

        {/* Description */}
        <p className="text-grey text-[16px] leading-[1.5] mb-10">
          Indulge in our creamy, probiotic-rich yogurt made with 100% natural
          ingredients and a whole lot of love.
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-[15px]">

          <button className="bg-redo text-white border-none p-5 rounded-[40px] text-[20px] font-bold">
            Shop Now
          </button>

          <button className="bg-white text-navo border-2 border-aquo p-5 rounded-[40px] text-[20px] font-bold">
            Explore Flavors
          </button>

        </div>
      </section>
    </div>
  );
};

export default Hero;