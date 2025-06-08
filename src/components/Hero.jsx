import Bulb from "./Bulb";
import Navbar from "./Navbar";
import Technologies from "./Technologies";
import { HERO_CONTENT } from "../assets/constants";

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
      className={`relative w-screen min-h-screen overflow-y-auto flex items-center justify-center px-4 sm:px-6 lg:px-12 py-10 ${textColor}`}
      style={{ background: gradient }}
    >
      {/* Navbar */}
      <div className="absolute top-0 z-30 w-full">
        <Navbar />
      </div>

      {/* Bulb */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-30">
        <Bulb mode={mode} setMode={setMode} />
      </div>

      {/* "THINK OUTSIDE THE BOX" Text */}
      <div className="absolute top-24 left-1/2 transform -translate-x-1/2 z-[-20] text-center select-none px-4">
        <h1
          className="text-2xl sm:text-3xl md:text-5xl"
          style={{ fontFamily: "Monofett" }}
        >
          THINK OUTSIDE THE <br />
          <span className="block mt-1">BOX</span>
        </h1>
      </div>

      {/* Main Content Layout */}
      <div className="z-10 w-full max-w-6xl gap-10 flex flex-col items-center md:grid md:grid-cols-3 md:items-start mt-20">
        {/* Profile Section */}
        <div className="flex flex-col items-center gap-4 w-full sm:max-w-sm mx-auto">
          <img
            src="/aavash.png"
            alt="Aavash Tamang"
            className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-xl border-2 border-white shadow-lg"
          />
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">Aavash Tamang</h1>
          <h2 className="text-lg sm:text-xl bg-gradient-to-r from-blue-500 via-green-500 to-red-500 bg-clip-text tracking-tight text-transparent">
            Full Stack Developer
          </h2>
          <p className="text-sm text-center leading-relaxed">{HERO_CONTENT}</p>
        </div>

        {/* Spacer for middle column */}
        <div className="hidden md:block" />

        {/* Technologies Section */}
        <div className="w-full flex justify-center md:block">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 justify-items-center w-full max-w-xs">
            <Technologies />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
