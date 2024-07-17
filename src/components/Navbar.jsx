import logo from "../assets/younesslogo.png";
import { FaLinkedin, FaGithub, FaTwitterSquare, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-30 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-1 w-15 h-16" src={logo} alt="logo" />
      </div>
      <div className="m-2 flex items-center justify-center gap-2 text-1xl">
        <a href="https://www.linkedin.com/in/youness-el-ouazzani-16a1781a3/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/imuneeess" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://x.com/imuneess" target="_blank" rel="noopener noreferrer">
          <FaTwitterSquare />
        </a>
        <a href="https://www.instagram.com/imuneeess?igsh=MTdlMndxOGt4YmRiMw==" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
