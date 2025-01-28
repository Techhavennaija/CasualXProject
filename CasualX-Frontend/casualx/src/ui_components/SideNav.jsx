import React from 'react'
import {
    FaHome,
    FaRss,
    FaAd,
    FaSlack,
    FaVideo,
    FaDoorOpen,
    FaBus,
    FaGamepad,
    FaStar,
    FaCalendarAlt,
    FaBan,
    FaBlog,
    FaComment,
    FaQuestionCircle,
  } from "react-icons/fa";

function SideNav({ isOpen, toggleSideNav }) {
    const navLinks = [
        { name: "Home", icon: <FaHome />, label: "Home" },
        { name: "Feeds", icon: <FaRss /> },
        { name: "Adverts", icon: <FaAd /> },
        { name: "Channels", icon: <FaSlack /> },
        { name: "Videos", icon: <FaVideo /> },
        { name: "Rooms", icon: <FaDoorOpen /> },
        { name: "Tours", icon: <FaBus /> },
        { name: "Games", icon: <FaGamepad /> },
        { name: "Reviews", icon: <FaStar /> },
        { name: "Events", icon: <FaCalendarAlt /> },
        { name: "Blacklisted", icon: <FaBan /> },
        { name: "Blogs", icon: <FaBlog /> },
        { name: "Testimonials", icon: <FaComment /> },
        { name: "FAQs", icon: <FaQuestionCircle /> },
      ];

  return (
    <div
    className={`fixed top-0 left-0 h-screen bg-gray-800 text-white transition-all duration-300 ${
      isOpen ? "w-64" : "w-16"
    }`}
  >
    <div className="flex items-center justify-between p-4 bg-gray-800">
      <button onClick={toggleSideNav} className="text-white focus:outline-none">
        {isOpen ? "✕" : "☰"}
      </button>
      {isOpen && <span className="text-lg font-bold">Logo</span>}
    </div>
    <nav className="mt-4">
      {navLinks.map((link, index) => (
        <a
          key={index}
          href="#"
          className="flex items-center p-3 hover:bg-gray-700"
        >
          <span className="mr-2">{link.icon}</span>
          {isOpen && <span>{link.name}</span>}
        </a>
      ))}
    </nav>
  </div>
  )
}

export default SideNav