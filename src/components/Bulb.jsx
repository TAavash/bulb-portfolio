// components/Bulb.js
import React from "react";
import InteractiveBulb from "./InteractiveBulb";
import PullRope from "./PullRope";

const Bulb = ({ mode, setMode }) => {
  const toggleLight = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const toggleRed = () => {
    setMode((prev) => (prev === "red" ? "dark" : "red"));
  };

  return (
    <div className="relative flex justify-center items-center w-48 h-64">
      {/* Left rope with bulb */}
      <div className="absolute left-0 top-0">
        <PullRope
          onPull={toggleRed}
          hidden={false} // for now make visible to test
          mode={mode}
          withBulb
          bulb={<InteractiveBulb mode={mode} />}
        />
      </div>

      {/* Right rope to toggle light/dark */}
      <div className="absolute right-0 top-0">
        <PullRope onPull={toggleLight} mode={mode} />
      </div>
    </div>
  );
};

export default Bulb;
