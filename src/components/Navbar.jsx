import logo from "../assets/younesslogo.png"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return <nav className="mb-30 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        <img className="mx-1 w-15 h-16" src={logo} alt="logo" />
    </div>
    <div className="m-2 flex items-center justify-center gap-2 text-1xl">
        <FaLinkedin/>
        <FaGithub/>
        <FaTwitterSquare/>
        <FaInstagram/>
    </div>
  </nav>;
  
};

export default Navbar;
