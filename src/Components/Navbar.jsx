import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [activeLink, setActiveLink] = useState("home");

  const navItems = [
    "Home",
    "About",
    "Experience",
    "Education",
    "Skills",
    "Projects",
    "Contact",
  ];

  return (
    <nav className="sticky top-0 text-white w-full bg-slate-900/95 shadow-md p-3 z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4">
        <div className="bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 font-extrabold text-4xl md:text-5xl bg-clip-text text-transparent cursor-pointer" onClick={() => window.location.href = "/#home"}>
          HG
        </div>

        <div className="hidden md:flex space-x-6 lg:space-x-10">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setActiveLink(item.toLowerCase())}
              className={`  ${
                item.toLowerCase() === activeLink
                  ? `text-purple-400`
                  : `hover:text-purple-400`
              } transition-colors duration-200`}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-900/95 border-t border-purple-600/20 shadow-lg">
          <div className="flex flex-col items-center space-y-4 py-4">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => {setMenuOpen(false); setActiveLink(item.toLowerCase())}}
                className={`  ${
                  item.toLowerCase() === activeLink
                    ? `text-purple-400`
                    : `hover:text-purple-400`
                } transition-colors duration-200`}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
