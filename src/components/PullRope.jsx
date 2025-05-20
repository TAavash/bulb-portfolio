// components/PullRope.js
import { useState } from "react";
import { motion } from "motion/react";

export default function PullRope({ onPull }) {
  const [isPulled, setIsPulled] = useState(false);

  const handleClick = () => {
    setIsPulled(true);
    onPull?.();
    setTimeout(() => setIsPulled(false), 600);
  };

  return (
    <motion.div
      onClick={handleClick}
      animate={isPulled ? { y: [0, 60, -25, 0] } : { y: 0 }}
      transition={{ duration: 0.6, easing: "ease-in-out" }}
      className="w-1 h-40 bg-black relative"
      style={{ cursor: "pointer" }}
    >
      <div className="w-4 h-4 bg-black rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2" />
    </motion.div>
  );
}
