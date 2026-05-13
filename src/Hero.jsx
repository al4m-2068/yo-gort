import React from "react";
import Nav from "./Menu";

const Hero = () => {
  return (
    <div className="bg-whitey h-screen max-h-screen">
      {/* Hero Section */}
      <section className="px-8 text-center w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center">

        {/* Badge */}
        <div className="bg-aquo text-navo inline-block px-4 py-1 rounded-full text-[12px] font-bold -rotate-2 font-nuni mb-6">
          FINE RECIPE!
        </div>

        {/* Title */}
        <h1 className="text-navo text-[56px] leading-none mb-6 font-extrabold font-brigro">
          Your Daily Spoon of <span className="text-redo">Happiness</span>
        </h1>

        {/* Description */}
        <p className="text-grey text-base/[145%] mb-10">
          Indulge in our creamy, probiotic-rich yogurt made with 100% natural ingredients and a whole lot of love.
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-4 w-full font-brigro text-2xl font-bold">
          <button className="bg-redo text-white border-none p-5 rounded-full">
            Shop Now
          </button>
          <button className="bg-white text-navo border-2 border-aquo p-5 rounded-full">
            Explore Flavors
          </button>
        </div>
        <p>Haloizjam</p>
      </section>
    </div>
  );
};

export default Hero;