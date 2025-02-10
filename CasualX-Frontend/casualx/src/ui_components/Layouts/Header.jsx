import React, { useState, useEffect } from "react";
import { FaSearch, FaSun, FaMoon } from "react-icons/fa";
import { TfiAngleDoubleLeft, TfiAngleDoubleRight } from "react-icons/tfi";

function Header({ isSideNavOpen, toggleSideNav }) {
  const [isDarkMode, setIsDarkMode] = useState(
    typeof window !== "undefined" && localStorage.getItem("theme") === "dark"
  ); // State for dark mode

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
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <header
      className={`sticky top-0 z-99999 bg-gray-800 text-white transition-all duration-300 
      ${isSideNavOpen ? "md:ml-36" : "md:ml-16"}`}
    >
      <div className="container mx-auto flex justify-between items-center px-2 py-4">
        
        {/* Hamburger Button (Visible only on mobile) */}
        <button onClick={toggleSideNav} className="text-gray-800 dark:text-white focus:outline-none md:hidden">
          <TfiAngleDoubleLeft className="text-xl" />
        </button>

        {/* Logo */}
        <div className="header_logo">
          <a href="/" className="text-xl font-bold text-white">CASUALX</a>
        </div>

        {/* Header Right */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleSearch} className="p-2 outline-solid outline-gray-500 rounded-full bg-gray-700 hover:bg-gray-500 flex items-center justify-center w-7 h-7">
            <FaSearch size={20} className="cursor-pointer" />
          </button>

          {/* Signup Button */}
          <a href="/escort-client-card" className="px-4 py-1 bg-sky-900 shadow-md text-white rounded-full transition-all font-bold">Register</a>

          {/* Dark Mode Toggle */}
          <button onClick={toggleDarkMode}>
            {isDarkMode ? <FaSun size={22} /> : <FaMoon size={22} />}
          </button>
        </div>
      </div>

      {/* Render the SearchPopup component */}
      {isSearchOpen && <SearchPopup onClose={toggleSearch} />}
    </header>
  );
}

export default Header;
