import { useState } from "react";
import { motion } from "motion/react";

export default function LightBulb() {
  const [isOn, setIsOn] = useState(false);
  const [isPulled, setIsPulled] = useState(false);

  const handlePull = () => {
    setIsOn(!isOn);
    setIsPulled(true);
    setTimeout(() => setIsPulled(false), 600); // reset pull animation
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#fffbe6]">
      {/* Bulb */}
      <div
        className={`w-20 h-32 rounded-full border-4 border-black mb-2 transition-all duration-300 ${
          isOn
            ? "bg-lime-300 shadow-[0_0_20px_5px_rgba(192,255,120,0.7)]"
            : "bg-gray-200"
        }`}
      />

      {/* Rope (animated) */}
      <motion.div
        onClick={handlePull}
        animate={{
          y: isPulled ? [0, 50, -20, 0] : 0,
        }}
        transition={{
          duration: 0.6,
          type: "spring",
          stiffness: 150,
        }}
        className="w-1 h-40 bg-black cursor-pointer relative"
      >
        <div className="w-4 h-4 bg-black rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2" />
      </motion.div>
    </div>
  );
}
