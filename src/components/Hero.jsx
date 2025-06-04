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
      className={`w-screen h-screen flex items-center justify-center px-10 ${textColor}`}
      style={{ background: gradient }}
    >
      <div className="flex flex-col md:flex-row gap-12 items-center justify-between w-full max-w-6xl">
        {/* Left Section */}
        <div className="flex flex-col items-start gap-5 max-w-md">
          <img
            src="/aavash.png"
            alt="Aavash Tamang"
            className="w-40 h-40 object-cover rounded-xl border-2 border-white shadow-lg"
          />
          <h1 className="text-4xl font-bold">Aavash Tamang</h1>
          <h2 className="text-2xl font-semibold text-cyan-400">
            Full Stack Developer
          </h2>
          <p className="text-sm leading-relaxed text-gray-300">
            I'm a passionate full-stack developer with a profound love for
            creating visually stunning and engaging experiences. My goal is to
            advance and create visually appealing designs and projects to
            captivate users.
          </p>
        </div>

        {/* Center Title with Bulb */}
        <div className="relative flex flex-col items-center">
          <div
            className="text-2xl md:text-4xl tracking-wide text-center"
            style={{ fontFamily: "Monofett" }}
          >
            THINK OUTSIDE THE <br />
            <span className="block text-center mt-2">BOX</span>
          </div>
          <div className="absolute top-full mt-4">
            <Bulb mode={mode} setMode={setMode} />
          </div>
        </div>

        {/* Technologies */}
        <div className="grid grid-cols-3 gap-4">
          <Technologies />
        </div>
      </div>
    </div>
  );
};

export default Hero;
