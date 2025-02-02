import React from 'react'
import {
    FaHome,
    FaAd,
    FaPhotoVideo,
    FaGamepad,
    FaStar,
    FaCalendarAlt,
    FaBan,
    FaBlogger,
    FaComment,
    FaQuestionCircle,
    FaCamera,
    FaThumbsUp,
  } from "react-icons/fa";
  import { TfiAngleDoubleLeft, TfiAngleDoubleRight} from "react-icons/tfi";
  import { HiChatBubbleLeftRight } from "react-icons/hi2";
  import { FaPeopleGroup, FaBus } from "react-icons/fa6";
  import { MdAdminPanelSettings } from "react-icons/md";
  import { IoBed } from "react-icons/io5";
  


function SideNav({ isOpen, toggleSideNav }) {
  
    const navLinks = [
        { name: "Home", icon: <FaHome size={20}/>, link: "/" },
        { name: "Hub", icon: <HiChatBubbleLeftRight size={20}/>, link: "/channels" },
        { name: "Cam Show", icon: <FaCamera size={20}/>, link: "/cam-show" },
        { name: "Naughty Videos", icon: <FaPhotoVideo size={20}/>, link: "/naughty-videos" },
        { name: "Strippers", icon: <FaPeopleGroup size={20}/>, link: "/strippers" },
        { name: "Rooms", icon: <IoBed size={20}/>, link: "/rooms" },
        { name: "Tours", icon: <FaBus size={20}/>, link: "/tours" },
        { name: "Events", icon: <FaCalendarAlt size={20}/>, link: "/events" },
        { name: "Adverts", icon: <FaAd size={20}/>, link: "/adverts" },
        { name: "Gaming", icon: <FaGamepad size={20}/>, link: "/games" },
        { name: "Reviews", icon: <FaStar size={20}/>, link: "/reviews" },
        { name: "Testimonials", icon: <FaThumbsUp size={20}/>, link: "/testimonials" },
        { name: "Blacklisted", icon: <FaBan size={20}/>, link: "/blacklisted" },
        { name: "Blog", icon: <FaBlogger size={20}/>, link: "/blog" },
        { name: "FAQs", icon: <FaQuestionCircle size={20}/>, link: "/faqs" },
        { name: "Admin", icon: <MdAdminPanelSettings size={20}/>, link: "/admin" },
      ];

  return (
      <aside className={`fixed top-0 left-0 h-screen bg-gray-800 transition-all duration-300 ${
        isOpen ? " translate-x-0 w-full md:w-44" : "-translate-x-full md:translate-x-0 md:w-16" }`}
        >
        {/* Hambuger button to toggle SideNav*/}
        <div className="flex items-center justify-between px-2 py-4">
          <div className="rounded-full outline-solid outline-gray-500 w-7 h-7 bg-gray-700 flex items-center justify-center animate-pulse">
            <button onClick={toggleSideNav} className="text-gray-500">
              {isOpen ? <TfiAngleDoubleLeft size={20} /> : <TfiAngleDoubleRight size={20} />}
            </button>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="pb-4 pt-5 text-gray-400">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.link}
              className="flex items-center p-2 hover:bg-gray-700 transition-colors"
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