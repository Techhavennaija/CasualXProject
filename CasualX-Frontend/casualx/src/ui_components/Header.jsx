import React from 'react'
import { FaSearch } from "react-icons/fa";

function Header({ isSideNavOpen }) {
  return (
    <header
        className={`sticky top-0 z-40 bg-gray-800 text-white shadow-md p-4 transition-all duration-300 ${
        isSideNavOpen ? "ml-64" : "ml-16"
        }`}
    >
        <div className="flex justify-between items-center">
            <a href="/">
                <div className="text-xl font-bold">Logo</div>
            </a>
            <div>
                <FaSearch className="text-white cursor-pointer" />
            </div>
        </div>
  </header>
  )
}

export default Header