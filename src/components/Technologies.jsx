import React from "react";
import { technologies } from "../assets/constants";

const Technologies = () => {
  return (
    <div className="w-full flex justify-center items-center py-10">
  <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6">
    {technologies.map((tech, index) => (
      <div
        key={index}
        className="w-24 h-24 bg-white shadow-md rounded-xl flex flex-col items-center justify-center p-3 animate-spin-slow"
      >
        <img src={tech.icon} alt={tech.name} className="w-10 h-10" />
        <p className="text-xs text-center mt-2 text-black font-medium">{tech.name}</p>
      </div>
    ))}
  </div>
</div>

  );
};

export default Technologies;
