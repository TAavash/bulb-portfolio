import birdImg from "../assets/loader/logo-bird.png";
import textImg from "../assets/loader/logo-text.png";

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#000011]">
      <div className="relative w-24 h-24">
        <img
          src={birdImg}
          alt="Bird"
          className="absolute top-0 left-0 w-full h-full"
        />

        <img
          src={textImg}
          alt="Rotating Text"
          className="absolute top-0 left-0 w-full h-full animate-spin-slow"
        />
      </div>
    </div>
  );
};

export default Loader;
