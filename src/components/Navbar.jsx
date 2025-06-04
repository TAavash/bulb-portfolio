import logo from "/logo-no-bg.png";
import logocolor from "/logo-light.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiKofi } from "react-icons/si";
import { SOCIALLINKS } from "../assets/constants";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center m-8">
        <img
          className="w-10 mx-2 logo-light"
          src={logocolor}
          alt="Light theme logo"
        />
        <img
          className="w-10 mx-2 logo-dark-red"
          src={logo}
          alt="Dark/Red theme logo"
        />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="/Aavash Tamang Resume.pdf"
          download
          className="mb-2 rounded-sm flex items-center justify-center 
                bg-gradient-to-r from-red-300 via-slate-500 to-purple-500 
                bg-clip-text text-3xl tracking-tight text-transparent light:from-blue-500 light:via-green-500 light:to-yellow-500 
                transition-transform transform hover:scale-110"
        >
          cv
        </a>
        <a
          href={SOCIALLINKS.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-110"
        >
          <FaLinkedin />
        </a>
        <a
          href={SOCIALLINKS.github}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-110"
        >
          <FaGithub />
        </a>
        <a
          href={SOCIALLINKS.ko_fi}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-110"
        >
          <SiKofi />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
