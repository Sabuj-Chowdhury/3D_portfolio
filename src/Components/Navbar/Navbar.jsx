import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-black text-gray-300 shadow-md">
      {/* Navbar Header */}
      <div className="flex justify-between items-center px-5 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <div className="text-2xl font-bold text-amber-400">
              Sabuj Chowdhury
            </div>
          </Link>
        </div>

        {/* Large Screen Links */}
        <div className="hidden md:flex items-center space-x-5">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `transition-all px-3 py-2 rounded-md ${
                isActive
                  ? "bg-amber-500 text-black font-semibold"
                  : "hover:text-amber-400"
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `transition-all px-3 py-2 rounded-md ${
                isActive
                  ? "bg-amber-500 text-black font-semibold"
                  : "hover:text-amber-400"
              }`
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `transition-all px-3 py-2 rounded-md ${
                isActive
                  ? "bg-amber-500 text-black font-semibold"
                  : "hover:text-amber-400"
              }`
            }
          >
            Contact
          </NavLink>
        </div>

        {/* Small Screen Menu Icons */}
        <div className="flex md:hidden items-center">
          <button onClick={toggleMenu} className="text-3xl text-amber-400">
            {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* Collapsible Menu for Small Screens */}
      {isOpen && (
        <div className="md:hidden bg-black text-gray-300">
          <div className="flex flex-col items-center py-4 space-y-4">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `transition-all px-4 py-2 rounded-md ${
                  isActive
                    ? "bg-amber-500 text-black font-semibold"
                    : "hover:text-amber-400"
                }`
              }
              onClick={toggleMenu}
            >
              About
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `transition-all px-4 py-2 rounded-md ${
                  isActive
                    ? "bg-amber-500 text-black font-semibold"
                    : "hover:text-amber-400"
                }`
              }
              onClick={toggleMenu}
            >
              Projects
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `transition-all px-4 py-2 rounded-md ${
                  isActive
                    ? "bg-amber-500 text-black font-semibold"
                    : "hover:text-amber-400"
                }`
              }
              onClick={toggleMenu}
            >
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
