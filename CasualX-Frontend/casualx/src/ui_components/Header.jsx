
import React, { useState, useEffect } from "react";
import { FaSearch, FaSun, FaMoon } from "react-icons/fa";

function Header({ isSideNavOpen }) {

    const [isDarkMode, setIsDarkMode] = useState(false);

    // Toggle dark mode
    const toggleDarkMode = () => {
      setIsDarkMode(!isDarkMode);
    };
  
    // Apply dark mode class to the root element
    useEffect(() => {
      if (isDarkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }, [isDarkMode]);

  return (
    <header
        className={`sticky top-0 z-50 bg-gray-800 text-white transition-all duration-300 ${
        isSideNavOpen ? "ml-44" : "ml-16"
        }`}
    >
        <div className="flex justify-between items-center px-2 py-4">
          <a href="/" className="text-xl font-bold text-white hover:text-teal-100 transition-colors">Logo</a>
          <div className='rounded-full bg-gray-700 w-10 h-10 flex items-center justify-center'>
            <button className="p-2 text-white hover:bg-teal-700 rounded-lg transition-colors">
              <FaSearch size={20} className="cursor-pointer" />
            </button>
                
          </div>
        </div>
  </header>
  )
}

export default Header