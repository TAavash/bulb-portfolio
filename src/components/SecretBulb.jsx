// components/SecretBulb.js
import { useState } from "react";
import { motion } from "motion/react";

export default function SecretBulb() {
  const [isOn, setIsOn] = useState(false);
  const [isPulled, setIsPulled] = useState(false);

  const toggle = () => {
    setIsOn(!isOn);
    setIsPulled(true);
    setTimeout(() => setIsPulled(false), 600);
  };

  return (
    <motion.div
      onClick={toggle}
      animate={isPulled ? { y: [0, 60, -25, 0] } : { y: 0 }}
      transition={{ duration: 0.6, easing: "ease-in-out" }}
      className="w-20 h-32 rounded-full border-4 border-black transition-all duration-300 select-none"
      style={{
        backgroundColor: isOn ? "#ccff99" : "#e5e7eb",
        boxShadow: isOn ? "0 0 20px 5px rgba(192,255,120,0.7)" : "none",
        cursor: "default", // Secret: no pointer
      }}
    />
  );
}
