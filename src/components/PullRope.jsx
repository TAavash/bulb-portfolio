// components/PullRope.js
import { useState } from "react";
import { motion } from "motion/react";

export default function PullRope({
  onPull,
  hidden = false,
  mode = "dark",
  withBulb = false,
  bulb = null,
}) {
  const [isPulled, setIsPulled] = useState(false);

  const handleClick = () => {
    if (hidden) return;
    console.log("Rope pulled"); // For debugging
    setIsPulled(true);
    onPull?.();
    setTimeout(() => setIsPulled(false), 300); // reset rope after 0.3s
  };

  const ropeColor =
    mode === "light"
      ? "bg-green-400"
      : mode === "red"
      ? "bg-red-500"
      : "bg-gray-400";

  const ropeHeight = isPulled ? "h-60" : "h-48";

  return (
    <div
      className="flex flex-col items-center select-none"
      onClick={handleClick}
      style={{ cursor: hidden ? "default" : "pointer" }}
    >
      <motion.div
        className={`w-1 ${ropeColor} transition-all duration-300 ease-out ${ropeHeight}`}
        key={isPulled ? "pulled" : "idle"}
      />
      <div className="mt-1 pointer-events-none">
        {withBulb && bulb ? bulb : (
          <div className={`w-4 h-4 rounded-full ${ropeColor}`} />
        )}
      </div>
    </div>
  );
}
