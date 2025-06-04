import React from "react";

const techs = [
  { name: "Python", icon: "/icons/python.png" },
  { name: "Figma", icon: "/icons/figma.png" },
  { name: "React", icon: "/icons/react.png" },
  { name: "Tailwind", icon: "/icons/tailwind.png" },
];

const CircularCarousel = () => {
  const radius = 100;
  const size = 300;

  return (
    <div className="w-full h-[400px] flex justify-center items-center bg-gray-100">
      <div className="relative w-[300px] h-[300px] animate-spin-reverse">
        {techs.map((tech, index) => {
          const angle = (index / techs.length) * 2 * Math.PI;
          const x = radius * Math.cos(angle) + size / 2 - 40;
          const y = radius * Math.sin(angle) + size / 2 - 40;

          return (
            <div
              key={index}
              className="absolute w-20 h-20 bg-white rounded-xl shadow-md flex flex-col items-center justify-center p-2"
              style={{
                left: `${x}px`,
                top: `${y}px`,
              }}
            >
              <img src={tech.icon} alt={tech.name} className="w-10 h-10" />
              <p className="text-xs mt-1 text-black">{tech.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CircularCarousel;
