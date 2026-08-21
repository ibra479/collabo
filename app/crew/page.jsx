import React from "react";
import Navbar from "../component/Navbar"

const App = () => {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen mane bg-[#080b16] text-white overflow-hidden">

      <div className="absolute inset-0 bg-[#080b16]/45"></div>

      <main className="relative min-h-screen px-8 md:px-16 lg:px-24">

        <div className="max-w-7xl mx-auto min-h-screen flex flex-col justify-center">

          <div className="pt-32 md:pt-36">

            <p className="text-sm md:text-lg tracking-[4px] font-light">
              <span className="text-white/40 font-bold mr-4">
                02
              </span>

              MEET YOUR CREW
            </p>

          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between flex-1">

            <div className="w-full lg:w-[52%] pt-16 lg:pt-0">

              <p className="text-xl md:text-2xl font-serif text-white/50 uppercase mb-4">
                Flight Engineer
              </p>

              <h1 className="font-serif text-4xl md:text-6xl lg:text-[54px] uppercase tracking-wide mb-8">
                Anousheh Ansari
              </h1>

              <p className="text-white/60 text-sm md:text-base leading-8 max-w-xl">
                Anousheh Ansari is an Iranian American engineer and
                co-founder of Prodea Systems. Ansari was the fourth
                self-funded space tourist, the first self-funded woman to
                fly to the ISS, and the first Iranian in space.
              </p>

              <div className="flex items-center gap-6 mt-16">

                <button className="w-4 h-4 rounded-full bg-white/20 hover:bg-white/50 transition"></button>
                <button className="w-4 h-4 rounded-full bg-white/20 hover:bg-white/50 transition"></button>
                <button className="w-4 h-4 rounded-full bg-white/20 hover:bg-white/50 transition"></button>
                <button className="w-4 h-4 rounded-full bg-white hover:bg-white/80 transition"></button>

              </div>

            </div>

            <div className="w-full lg:w-[48%] self-end flex justify-center lg:justify-end mt-12 lg:mt-0">
              <img
                src="/yansh.png"
                alt="Anousheh Ansari"
                className="
                  w-[280px]
                  md:w-[400px]
                  lg:w-[500px]
                  xl:w-[550px]
                  object-contain
                  object-bottom
                "
              />
            </div>
          </div>
        </div>
      </main>
    </div>
    </>
  );
};

export default App;