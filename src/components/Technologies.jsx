import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { technologies as allTechs } from "../assets/constants";

const Technologies = () => {
  const containerSize = 300;
  const cardSize = 64;
  const gridSize = 4;
  const interval = 2000;

  // Define 12 square path positions
  const positions = [
  [0, 0], [0, 1], [0, 2], [0, 3],    // left column down (↓)
  [1, 3], [2, 3],                    // bottom row →
  [3, 3], [3, 2], [3, 1], [3, 0],    // right column up (↑)
  [2, 0], [1, 0],                    // top row ←
];


  const gap = (containerSize - cardSize) / (gridSize - 1);

  const [techs, setTechs] = useState(
    allTechs.slice(0, 12).map((tech, index) => ({
      ...tech,
      positionIndex: index,
      id: index, // stable unique ID per tech
    }))
  );

  // Rotate position indexes
  useEffect(() => {
    const timer = setInterval(() => {
      setTechs((prev) =>
        prev.map((tech) => ({
          ...tech,
          positionIndex: (tech.positionIndex + 1) % positions.length,
        }))
      );
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full flex justify-center items-center py-10">
      <div
        className="relative"
        style={{ width: `${containerSize}px`, height: `${containerSize}px` }}
      >
        {techs.map((tech) => {
          const [x, y] = positions[tech.positionIndex];

          return (
            <motion.div
              key={tech.id}
              layout
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className="absolute bg-white rounded-xl shadow-md flex flex-col items-center justify-center p-2"
              style={{
                width: `${cardSize}px`,
                height: `${cardSize}px`,
                left: `${x * gap}px`,
                top: `${y * gap}px`,
              }}
            >
              <img src={tech.icon} alt={tech.name} className="w-8 h-8" />
              <p className="text-[10px] mt-1 text-black text-center">{tech.name}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Technologies;
