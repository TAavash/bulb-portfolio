// components/PullRope.js
import { useState, useRef } from "react";
import { motion } from "motion/react";

export default function PullRope({
  onPull,
  hidden = false,
  mode = "dark",
  withBulb = false,
  bulb = null,
  dragOnly = false, // 🔧 NEW PROP
}) {
  const [isPulled, setIsPulled] = useState(false);
  const startY = useRef(null);

  const handleStart = (e) => {
    if (hidden) return;
    startY.current = e.clientY || e.touches?.[0]?.clientY;
  };

  const handleEnd = (e) => {
    if (hidden) return;

    const endY = e.clientY || e.changedTouches?.[0]?.clientY;
    const deltaY = endY - startY.current;

    const wasPulled = dragOnly ? deltaY > 30 : true; // ⬇️ threshold to consider as pull

    if (wasPulled) {
      console.log("Rope pulled");
      setIsPulled(true);
      onPull?.();
      setTimeout(() => setIsPulled(false), 300);
    }
  };

  const ropeColor =
    mode === "light"
      ? "bg-green-400"
      : mode === "red"
      ? "bg-red-500"
      : "bg-gray-200";

  const ropeHeight = isPulled ? "h-96" : "h-80";

  return (
    <div
      className="flex flex-col items-center select-none"
      onMouseDown={handleStart}
      onMouseUp={handleEnd}
      onTouchStart={handleStart}
      onTouchEnd={handleEnd}
      style={{ cursor: hidden ? "default" : "pointer" }}
    >
      <motion.div
        className={`w-1 ${ropeColor} transition-all duration-300 ease-out ${ropeHeight}`}
        key={isPulled ? "pulled" : "idle"}
      />
      <div className="mt-1 pointer-events-none rotate-180">
        {withBulb && bulb ? bulb : (
          <div className={`w-4 h-4 rounded-full ${ropeColor}`} />
        )}
      </div>
    </div>
  );
}
