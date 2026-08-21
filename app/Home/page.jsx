import React from "react";
import Navbar from "../component/Navbar"

const App = () => {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen main bg-[#080b18] text-white overflow-hidden">

      <div className="absolute inset-0 bg-[#080b18]/60"></div>

      <main className="relative min-h-screen flex items-center px-8 md:px-16 lg:px-24">

        <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">

          <div className="max-w-xl text-center lg:text-left">

            <p className="text-white/70 tracking-[4px] text-sm md:text-base mb-6">
              SO, YOU WANT TO TRAVEL TO
            </p>

            <h1 className="text-7xl md:text-8xl lg:text-[130px] font-serif font-light tracking-wide leading-none mb-8">
              SPACE
            </h1>

            <p className="text-white/60 max-w-md mx-auto lg:mx-0 leading-7 text-sm md:text-base">
              Let's face it: if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge
              of it. Well sit back, and relax because we'll give you a truly
              out of this world experience!
            </p>

          </div>

          <div className="flex items-center justify-center">

            <button
              className="
                w-48
                h-48
                md:w-56
                md:h-56
                rounded-full
                bg-white
                text-black
                flex
                items-center
                justify-center
                text-lg
                tracking-[4px]
                font-serif
                hover:scale-105
                hover:bg-white/90
                transition-all
                duration-300
                shadow-[0_0_50px_rgba(255,255,255,0.15)]
              "
            >
              EXPLORE
            </button>
          </div>
        </div>
      </main>
    </div>
    </>
  );
};

export default App;