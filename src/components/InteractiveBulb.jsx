
import { FaLightbulb } from "react-icons/fa6";
import { motion } from "motion/react";

const InteractiveBulb = () => {
  return (
    <motion.div
      style={{
        transform: "rotate(180deg)",
        fontSize: "2rem",
        color: "var(--bulb-color)",
        textShadow: "var(--glow)",
        transition: "all 0.3s ease",
      }}
    >
      <FaLightbulb />
    </motion.div>
  );
};

export default InteractiveBulb;
