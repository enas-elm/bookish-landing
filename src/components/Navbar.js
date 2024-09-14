import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [language, setLanguage] = useState("FR");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const selectLanguage = (lang) => {
    setLanguage(lang);
    setDropdownOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="w-full bg-primary-100 px-4 py-3 flex justify-between items-center fixed top-0 left-0 z-50 shadow-lg">
      <div className="flex-shrink-0">
        <a href="/" aria-label="Back to home">
          <img src="/Vector-jaune.svg" alt="Bookish" className="h-8" />
        </a>{" "}
      </div>

      <div className="sm:hidden">
        <button
          onClick={toggleMobileMenu}
          className="text-secondary-100 focus:outline-none"
        >
          {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      <div className="hidden sm:flex items-center gap-5 justify-end space-x-6">
        <a href="#time-line" className="hover:underline text-secondary-100">
          À propos
        </a>
        <div className="relative" ref={dropdownRef}>
          <button
            className="bg-transparent text-secondary-100 px-3 py-1 focus:outline-none flex items-center gap-1"
            onClick={toggleDropdown}
          >
            {language} <span className="text-xs">▼</span>
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 py-2 w-32 bg-white-variant text-black-variant rounded-md shadow-lg z-10">
              <button
                className={`block w-full text-left px-4 py-2 hover:bg-gray-variant-90 ${
                  language === "EN" ? "bg-gray-variant-90" : ""
                }`}
                onClick={() => selectLanguage("EN")}
              >
                EN
              </button>
              <button
                className={`block w-full text-left px-4 py-2 hover:bg-gray-variant-90 ${
                  language === "FR" ? "bg-gray-variant-90" : ""
                }`}
                onClick={() => selectLanguage("FR")}
              >
                FR
              </button>
            </div>
          )}
        </div>

        <a
          href="#form-section"
          className="button-main"
        >
          Devenir testeur
        </a>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-primary-100 text-center py-8 z-40 transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={toggleMobileMenu}
          className="absolute top-4 right-4 text-secondary-100 focus:outline-none"
        >
          <FaTimes size={24} />
        </button>
        <a
          href="/about"
          className="block py-4 px-5 text-secondary-100 text-left hover:underline"
          onClick={() => setMobileMenuOpen(false)}
        >
          À propos
        </a>
        <div className="relative mt-4" ref={dropdownRef}>
          <button
            className="bg-transparent text-secondary-100 px-5 py-1 focus:outline-none flex items-center justify-center gap-1"
            onClick={toggleDropdown}
          >
            {language} <span className="text-xs">▼</span>
          </button>

          {dropdownOpen && (
            <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 py-2 w-32 bg-white-variant text-black-variant rounded-md shadow-lg z-10">
              <button
                className={`block w-full text-left px-4 py-2 hover:bg-gray-variant-90 ${
                  language === "EN" ? "bg-gray-variant-90" : ""
                }`}
                onClick={() => selectLanguage("EN")}
              >
                EN
              </button>
              <button
                className={`block w-full text-left px-4 py-2 hover:bg-gray-variant-90 ${
                  language === "FR" ? "bg-gray-variant-90" : ""
                }`}
                onClick={() => selectLanguage("FR")}
              >
                FR
              </button>
            </div>
          )}
        </div>

        <button
          className="button-main"
          onClick={() => setMobileMenuOpen(false)}
        >
          <a href="#form-section">Devenir testeur</a>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
