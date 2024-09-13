import React, { useState, useRef, useEffect } from 'react'

const Navbar = () => {
  const [language, setLanguage] = useState('FR')
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen)
  };

  const selectLanguage = (lang) => {
    setLanguage(lang)
    setDropdownOpen(false)
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false)
      }
    };
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    };
  }, [])

  return (
    <nav className="w-full bg-green px-4 py-2 flex justify-between items-center fixed top-0 left-0 z-50">
      <div className="flex-shrink-0">
        <img src="/Vector-jaune.svg" alt="Bookish" className="h-8" />
      </div>

      <div className="flex items-center gap-5 justify-end space-x-6">
        <a href="/about" className="hover:underline text-yellow">
          À propos
        </a>
        <div className="relative" ref={dropdownRef}>
          <button
            className="bg-transparent text-yellow px-3 py-1 focus:outline-none flex items-center gap-1"
            onClick={toggleDropdown}
          >
            {language} <span className="text-xs">▼</span>
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 py-2 w-32 bg-white text-black rounded-md shadow-lg z-10">
              <button
                className={`block w-full text-left px-4 py-2 hover:bg-gris ${language === 'EN' ? 'bg-gris' : ''}`}
                onClick={() => selectLanguage('EN')}
              >
                EN
              </button>
              <button
                className={`block w-full text-left px-4 py-2 hover:bg-gris ${language === 'FR' ? 'bg-gris' : ''}`}
                onClick={() => selectLanguage('FR')}
              >
                FR
              </button>
            </div>
          )}
        </div>

        <button className="bg-yellow text-green px-6 py-2 rounded-full hover:bg-[#F6E96B]">
          Devenir testeur
        </button>
      </div>
    </nav>
  )
}

export default Navbar
