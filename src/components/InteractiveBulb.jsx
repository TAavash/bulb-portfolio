// components/InteractiveBulb.js
import React from "react";
import { FaLightbulb } from "react-icons/fa6";
import { motion } from "motion/react";

const InteractiveBulb = ({ mode }) => {
  const color =
    mode === "light"
      ? "#ccff99"
      : mode === "red"
      ? "#ff9999"
      : "#555";

  const glow =
    mode === "light"
      ? "0 0 20px #ccff99"
      : mode === "red"
      ? "0 0 20px #ff9999"
      : "none";

  return (
    <motion.div
      style={{
        fontSize: "2rem",
        color,
        textShadow: glow,
        transition: "all 0.3s ease",
      }}
    >
      <FaLightbulb />
    </motion.div>
  );
};

export default InteractiveBulb;
