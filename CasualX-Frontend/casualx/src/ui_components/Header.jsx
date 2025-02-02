
import React, { useState, useEffect } from "react";
import { FaSearch, FaSun, FaMoon } from "react-icons/fa";
import SearchPopUp from "./SearchPopUp";

function Header({ isSideNavOpen }) {

    const [isDarkMode, setIsDarkMode] = useState(false); // State for dark mode
    const [isSearchOpen, setIsSearchOpen] = useState(false); // State for search popup

    // Toggle dark mode
    const toggleDarkMode = () => {
      setIsDarkMode(!isDarkMode);
    };
    // Toggle search popup
    const toggleSearch = () => {
      setIsSearchOpen(!isSearchOpen);
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
    <header className={`sticky top-0 z-50 bg-gray-800 text-white transition-all duration-300 ${
      isSideNavOpen ? "ml-44" : "ml-16" }`}
    >
      <div className="flex justify-between items-center px-2 py-4">
        {/* Logo */}
        <div className="logo">
          <a href="/" className="text-xl font-bold text-white hover:text-teal-100 transition-colors">CASUALX</a>
        </div>

        {/* Header Right */}
        <div className="flex items-center space-x-4 px-6">
          {/* Search Icon */}
          <div className='rounded-full outline-solid outline-gray-500 bg-gray-700 w-7 h-7 flex items-center justify-center'>
            <button onClick={toggleSearch} className="p-2 text-white rounded-lg transition-colors">
              <FaSearch size={20} className="cursor-pointer" />
            </button>
          </div>
          
            {/* Signup Button */}
            <button className="px-4 py-1 bg-blue-700 shadow-md text-white rounded-full transition-all"
              onClick={() => alert("Signup clicked!")} // Add signup logic here
              >Register
            </button>

            {/* Dark Mode Toggle */}
            <button onClick={toggleDarkMode} className="focus:outline-none">
              {isDarkMode ? (<FaSun size={22} className="text-white-500" />) : (<FaMoon size={22} className="text-white-800 dark:text-white" />
              )}
            </button>
        </div>
      </div>

        {/* Render the SearchPopup component */}
        {isSearchOpen && <SearchPopup onClose={toggleSearch} />}
        
    </header>
  )
}

export default Header