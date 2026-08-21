import React from "react";

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full px-8 md:px-16 pt-8 z-50">

      <div className="flex items-center">

        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
          <span className="text-black text-2xl">✦</span>
        </div>

        <div className="hidden lg:block h-px bg-white/20 flex-1 mx-10"></div>

        <div className="hidden md:flex items-center gap-8 lg:gap-10 px-8 py-6 bg-white/10 backdrop-blur-md">

          <a
            href="/Home"
            className="text-sm tracking-[3px] text-white/70 hover:text-white transition"
          >
            <span className="font-bold">00</span> HOME
          </a>

          <a
            href="#"
            className="text-sm tracking-[3px] text-white/70 hover:text-white transition"
          >     
            <span className="font-bold">01</span> DESTINATION
          </a>

          <a
            href="/crew"
            className="text-sm tracking-[3px] text-white/70 hover:text-white transition"
          >
            <span className="font-bold">02</span> CREW
          </a>

          <a
            href="#"
            className="text-sm tracking-[3px] text-white/70 hover:text-white transition"
          >
            <span className="font-bold">03</span> TECHNOLOGY
          </a>

        </div>

        <button className="ml-auto md:hidden text-3xl text-white">
          ☰
        </button>

      </div>

    </nav>
  );
};

export default Navbar;