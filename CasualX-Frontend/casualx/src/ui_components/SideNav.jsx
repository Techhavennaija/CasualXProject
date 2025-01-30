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
        { name: "Home", icon: <FaHome size={20}/>, link: "/" },
        { name: "Feeds", icon: <FaRss size={20}/>, link: "/feeds" },
        { name: "Adverts", icon: <FaAd size={20}/>, link: "/adverts" },
        { name: "Channels", icon: <FaSlack size={20}/>, link: "/channels" },
        { name: "Cam Show", icon: <FaCamera size={20}/>, link: "/cam-show" },
        { name: "Naughty Videos", icon: <FaVideo size={20}/>, link: "/naughty-videos" },
        { name: "Strippers", icon: <FaVideo size={20}/>, link: "/strippers" },
        { name: "Rooms", icon: <FaDoorOpen size={20}/>, link: "/rooms" },
        { name: "Tours", icon: <FaBus size={20}/>, link: "/tours" },
        { name: "Games", icon: <FaGamepad size={20}/>, link: "/games" },
        { name: "Reviews", icon: <FaStar size={20}/>, link: "/reviews" },
        { name: "Events", icon: <FaCalendarAlt size={20}/>, link: "/events" },
        { name: "Blacklisted", icon: <FaBan size={20}/>, link: "/blacklisted" },
        { name: "Blogs", icon: <FaBlog size={20}/>, link: "/blogs" },
        { name: "Testimonials", icon: <FaComment size={20}/>, link: "/testimonials" },
        { name: "FAQs", icon: <FaQuestionCircle size={20}/>, link: "/faqs" },
        { name: "Admin", icon: <FaQuestionCircle size={20}/>, link: "/admin" },
      ];

  return (
      <aside
        className={`fixed top-0 left-0 h-screen  bg-gray-800 text-white transition-all duration-300 ${
        isOpen ? " translate-x-0 w-full md:w-44" : "-translate-x-full md:translate-x-0 md:w-16" }`}
      >
    <div className="flex items-center justify-between px-2 pt-4 bg-gray-800">
      <div className="rounded-full outline-solid outline-grey-800 w-7 h-7 bg-gray-700 flex items-center justify-center animate-pulse">
        <button onClick={toggleSideNav} className="text-white focus:outline-none">
          {isOpen ? <FaBars size={20} /> : <FaBars size={20} />}
        </button>
      </div>
    </div>
    <nav className="pt-8 pb-4">
      {navLinks.map((link, index) => (
        <a
          key={index}
          href={link.link}
          className="flex items-center p-2 text-white hover:bg-gray-700 transition-colors"
        >
          <span className="mr-2 whitespace-nowrap">{link.icon}</span>
          {isOpen && <span>{link.name}</span>}
        </a>
      ))}
    </nav>
  </aside>
  )
}

export default SideNav