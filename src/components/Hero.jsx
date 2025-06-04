import Bulb from "./Bulb";
import Technologies from "./Technologies";

const Hero = ({ mode, setMode }) => {
const gradient =
    mode === "light"
      ? "linear-gradient(180deg, #ccffcc 0%, #f2fbe0 100%)"
      : mode === "red"
      ? "linear-gradient(180deg, #330000 0%, #1a0000 100%)"
      : "linear-gradient(180deg, #000077 0%, #000011 27%)";

  const textColor =
    mode === "light"
      ? "text-black"
      : mode === "red"
      ? "text-red-200"
      : "text-white";

  return (
    <div
  className={`relative w-screen h-screen flex items-center justify-center px-6 ${textColor}`}
  style={{ background: gradient }}
>
      {/* Absolute Bulb */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-30">
        <Bulb mode={mode} setMode={setMode} />
      </div>

      {/* Absolute "THINK OUTSIDE THE BOX" Text */}
      <div className="absolute top-24 left-1/2 transform -translate-x-1/2 z-[-20] text-center select-none">
        <h1 className="text-3xl md:text-5xl" style={{ fontFamily: "Monofett" }}>
          THINK OUTSIDE THE <br />
          <span className="block mt-1">BOX</span>
        </h1>
      </div>

      {/* Background Grid Layout */}
      <div className="z-10 grid grid-cols-1 md:grid-cols-3 items-center w-full max-w-6xl gap-10">
        {/* Left - Profile */}
        <div className="flex flex-col items-center gap-4 max-w-sm">
          <img
            src="/aavash.png"
            alt="Aavash Tamang"
            className="w-32 h-32 rounded-xl border-2 border-white shadow-lg"
          />
          <h1 className="text-3xl font-bold">Aavash Tamang</h1>
          <h2
            className="text-xl font-fw-semibold
                bg-gradient-to-r from-blue-500 via-green-500 to-red-500 
                bg-clip-text tracking-tight text-transparent"
          >
            Full Stack Developer
          </h2>
          <p className="text-sm text-center leading-relaxed light:text-black">
            I'm a passionate full-stack developer with a love for creating
            visually stunning and engaging experiences. I aim to build
            user-centric, visually appealing digital solutions.
          </p>
        </div>

        {/* Empty Middle Column — just to leave space behind the floating section */}
        <div className="hidden md:block"></div>

        {/* Right - Technologies */}
        <div className="grid grid-cols-3 gap-4 justify-items-center">
          <Technologies />
        </div>
      </div>
    </div>
  );
};

export default Hero;
