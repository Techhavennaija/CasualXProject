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
    FaCamera,
    FaBars,
  } from "react-icons/fa";


function SideNav({ isOpen, toggleSideNav }) {
  
    const navLinks = [
        { name: "Home", icon: <FaHome size={18}/>},
        { name: "Feeds", icon: <FaRss size={18}/> },
        { name: "Adverts", icon: <FaAd size={18}/> },
        { name: "Channels", icon: <FaSlack size={18}/> },
        { name: "Cam Show", icon: <FaCamera size={18}/> },
        { name: "VIP", icon: <FaVideo size={18}/> },
        { name: "VIP", icon: <FaVideo size={18}/> },
        { name: "Rooms", icon: <FaDoorOpen size={18}/> },
        { name: "Tours", icon: <FaBus size={18}/> },
        { name: "Games", icon: <FaGamepad size={18}/> },
        { name: "Reviews", icon: <FaStar size={18}/> },
        { name: "Events", icon: <FaCalendarAlt size={18}/> },
        { name: "Blacklisted", icon: <FaBan size={18}/> },
        { name: "Blogs", icon: <FaBlog size={18}/> },
        { name: "Testimonials", icon: <FaComment size={18}/> },
        { name: "FAQs", icon: <FaQuestionCircle size={18}/> },
        { name: "Admin", icon: <FaQuestionCircle size={18}/> },
      ];

  return (
    <div
    className={`fixed top-0 left-0 h-screen bg-gray-800 text-white transition-all duration-300 ${
      isOpen ? "w-64" : "w-16"
    }`}
  >
    <div className="flex items-center justify-between p-2 pt-4 bg-gray-800">
      <div className="rounded-full outline-solid outline-grey-800 w-7 h-7 bg-gray-700 flex items-center justify-center">
        <button onClick={toggleSideNav} className="text-white focus:outline-none">
          {isOpen ? <FaBars size={20} /> : <FaBars size={20} />}
        </button>
      </div>
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