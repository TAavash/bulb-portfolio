import React from "react";
import LightBulb from "./LightBulb";
import Bulb from "./Bulb";

const Hero = () => {
  return (
    <div
      className="w-screen h-screen flex justify-evenly items-center"
      style={{
        background: "linear-gradient(180deg, #000077 0%, #000011 27%)",
      }}
    >
      <div className="text-white text-xl">Aavash Tamang</div>
      <div className="text-white text-3xl" style={{ fontFamily: "Monofett" }}>
        Think Outside The Box
      </div>
      <div>
        {/* <LightBulb /> */}
        <Bulb/>
      </div>
      <div className="text-white">Technologies</div>
    </div>
  );
};

export default Hero;
