import React, { useState } from "react";
import Logo from "../media/Logo.svg";
import { Menu, X } from "lucide-react"; // optional: or use your own SVG

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white px-6 py-3 text-white shadow">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="#">
            <img src={Logo} alt="Logo" className="w-16 h-16 object-contain" />
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex">
          <ul className="flex flex-row space-x-8 text-lg font-medium list-none">
            <li>
              <a href="#education" className="text-black hover:text-blue-600">Education</a>
            </li>
            <li>
              <a href="#projects" className="text-black hover:text-blue-600">Projects</a>
            </li>
            <li>
              <a href="#footer" className="text-black hover:text-blue-600">Contact</a>
            </li>
          </ul>
        </nav>

        {/* Mobile menu toggle button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-black bg-white focus:outline-none"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <nav className="md:hidden mt-4 px-6">
          <ul className="flex flex-col space-y-4 text-lg font-medium">
            <li>
              <a href="#education" className="text-black hover:text-blue-600" onClick={() => setMenuOpen(false)}>Education</a>
            </li>
            <li>
              <a href="#projects" className="text-black hover:text-blue-600" onClick={() => setMenuOpen(false)}>Projects</a>
            </li>
            <li>
              <a href="#footer" className="text-black hover:text-blue-600" onClick={() => setMenuOpen(false)}>Contact</a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
