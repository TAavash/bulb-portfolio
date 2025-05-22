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
      {/* Left rope with bulb - only triggers on drag */}
      <div className="absolute left-0 top-0">
        <PullRope
          onPull={toggleRed}
          hidden={false}
          mode={mode}
          withBulb
          bulb={<InteractiveBulb mode={mode} />}
          dragOnly={true} // 🧠 Only respond to drag
        />
      </div>

      {/* Right rope - works on click or pull */}
      <div className="absolute right-0 top-0">
        <PullRope
          onPull={toggleLight}
          mode={mode}
          dragOnly={false} // (optional - false by default)
        />
      </div>
    </div>
  );
};

export default Bulb;
