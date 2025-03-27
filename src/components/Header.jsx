import { useState } from "react";
import Logo from "../assets/logo.jpg";
import NavIcon from "./NavIcon";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlinePerson } from "react-icons/md";
import { FaRegFileAlt } from "react-icons/fa";
import { BsImages } from "react-icons/bs";
import { CgDatabase } from "react-icons/cg";
import { IoIosMail } from "react-icons/io";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <>
      {/* Toggle Menu Icon */}
      <div
        className="fixed top-4 left-4 z-50 p-2 bg-black text-white rounded-md md:hidden cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <FiMenu size={24} />
      </div>

      {/* Sidebar */}
      <nav
        className={`fixed top-0 left-0 h-screen w-[300px] bg-black text-white shadow-lg z-50 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out md:w-[300px] lg:w-[300px]`}
      >
        {/* Close Icon (Inside Sidebar) */}
        <div
          className="absolute top-4 left-4 text-white md:hidden cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          <FiX size={30} />
        </div>

        {/* Profile Section */}
        <div className="h-[40%] flex flex-col items-center justify-center gap-4">
          <img
            className="w-[100px] md:w-[120px] rounded-full border-[2px] md:border-[2px] shadow-[0_0_20px_#4ECDC4,0_0_40px_#349090] animate-[glow-border_1.5s_infinite_alternate]"
            src={Logo}
            alt="Prakash Kumawat"
          />
          <h4 className="text-xl md:text-2xl font-semibold">Prakash Kumawat</h4>
          <NavIcon />
        </div>

        {/* Navigation Links */}
        <div className="h-[60%] px-6 py-4 text-gray-400">
          <ul className="grid gap-6 md:gap-10 text-base md:text-lg">
            <li
              onClick={() => handleScroll("home")}
              className="flex items-center gap-3 cursor-pointer hover:text-[#0d6efd] hover:scale-105"
            >
              <IoHomeOutline className="text-xl md:text-2xl" /> Home
            </li>
            <li
              onClick={() => handleScroll("about")}
              className="flex items-center gap-3 cursor-pointer hover:text-[#0d6efd] hover:scale-105"
            >
              <MdOutlinePerson className="text-xl md:text-2xl" /> About
            </li>
            <li
              onClick={() => handleScroll("resume")}
              className="flex items-center gap-3 cursor-pointer hover:text-[#0d6efd] hover:scale-105"
            >
              <FaRegFileAlt className="text-xl md:text-2xl" /> Resume
            </li>
            <li
              onClick={() => handleScroll("portfolio")}
              className="flex items-center gap-3 cursor-pointer hover:text-[#0d6efd] hover:scale-105"
            >
              <BsImages className="text-xl md:text-2xl" /> Portfolio
            </li>
            <li
              onClick={() => handleScroll("services")}
              className="flex items-center gap-3 cursor-pointer hover:text-[#0d6efd] hover:scale-105"
            >
              <CgDatabase className="text-xl md:text-2xl" /> Services
            </li>
            <li
              onClick={() => handleScroll("contact")}
              className="flex items-center gap-3 cursor-pointer hover:text-[#0d6efd] hover:scale-105"
            >
              <IoIosMail className="text-xl md:text-2xl" /> Contact
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
