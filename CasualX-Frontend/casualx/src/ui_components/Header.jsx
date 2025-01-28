import React from 'react'
import { FaSearch } from "react-icons/fa";

function Header({ isSideNavOpen }) {
  return (
    <header
        className={`sticky top-0 z-50 bg-gray-800 text-white shadow-md p-4 transition-all duration-300 ${
        isSideNavOpen ? "ml-54" : "ml-16"
        }`}
    >
        <div className="flex justify-between items-center px-2 py-2">
            <a href="/">
                <div className="text-xl font-bold">Logo</div>
            </a>
            <div className='rounded-full bg-gray-700 w-10 h-10 flex items-center justify-center'>
                <FaSearch size={20} className="text-white cursor-pointer" />
            </div>
        </div>
  </header>
  )
}

export default Header