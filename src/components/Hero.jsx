// components/Hero.js
import React from "react";
import Bulb from "./Bulb";

const Hero = ({ mode, setMode }) => {
  const gradient =
    mode === "light"
      ? "linear-gradient(180deg, #ccffcc 0%, #f2fbe0 100%)"
      : mode === "red"
      ? "linear-gradient(180deg, #330000 0%, #1a0000 100%)"
      : "linear-gradient(180deg, #000077 0%, #000011 27%)";

  const textColor =
    mode === "light" ? "text-black" : mode === "red" ? "text-red-200" : "text-white";

  return (
    <div
      className={`w-screen h-screen flex flex-col items-center justify-evenly transition-all duration-500 ${textColor}`}
      style={{ background: gradient }}
    >
      <div className="text-xl">Aavash Tamang</div>
      <div className="text-3xl" style={{ fontFamily: "Monofett" }}>
        Think Outside The Box
      </div>

      <div>
        <Bulb mode={mode} setMode={setMode} />
      </div>

      <div className="text-lg">Technologies</div>
    </div>
  );
};

export default Hero;
