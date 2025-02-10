import {
  FaHome,
  FaPhotoVideo,
  FaGamepad,
  FaCalendarAlt,
  FaBan,
  FaBlogger,
  FaQuestionCircle,
  FaThumbsUp,
} from "react-icons/fa";
import { MdAdminPanelSettings, MdRateReview, MdLinkedCamera, } from "react-icons/md";
import { TfiAngleDoubleLeft, TfiAngleDoubleRight } from "react-icons/tfi";
import { BsFillMegaphoneFill } from "react-icons/bs";
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import { FaPeopleGroup, FaBus } from "react-icons/fa6";
import { IoBed } from "react-icons/io5";
import { useState } from "react";

const navLinks = [
  { name: "Home", icon: <FaHome size={22} />, link: "/" },
  { name: "Hub", icon: <HiChatBubbleLeftRight size={22} />, link: "/hub" },
  { name: "Cam Show", icon: <MdLinkedCamera size={22} />, link: "/cam-show" },
  { name: "Videos", icon: <FaPhotoVideo size={22} />, link: "/naughty-videos" },
  { name: "Strippers", icon: <FaPeopleGroup size={22} />, link: "/strippers" },
  { name: "Rooms", icon: <IoBed size={22} />, link: "/room-to-let" },
  { name: "Tours", icon: <FaBus size={22} />, link: "/tours" },
  { name: "Events", icon: <FaCalendarAlt size={22} />, link: "/events" },
  { name: "Adverts", icon: <BsFillMegaphoneFill  size={22} />, link: "/adverts" },
  { name: "Gaming", icon: <FaGamepad size={22} />, link: "/games" },
  { name: "Reviews", icon: <MdRateReview size={22} />, link: "/reviews" },
  { name: "Testimonials", icon: <FaThumbsUp size={22} />, link: "/testimonials", },
  { name: "Blacklisted", icon: <FaBan size={22} />, link: "/blacklisted" },
  { name: "Blog", icon: <FaBlogger size={22} />, link: "/blog-post" },
  { name: "FAQs", icon: <FaQuestionCircle size={22} />, link: "/faqs" },
  { name: "Admin", icon: <MdAdminPanelSettings size={22} />, link: "/admin" },
];

function SideNav({ isOpen, toggleSideNav }) {
  const [active, setActive] = useState("Home");

  return (
    <aside
      className={`fixed top-0 left-0 h-screen bg-gray-800 transition-all duration-300 ease-in-out
        ${isOpen ? " w-36" : "w-16"}`}
    >
      {/* Hambuger button to toggle SideNav*/}
      <div className="flex items-center justify-between px-2 py-4">
        <div className="rounded-full outline-solid outline-gray-500 w-8 h-8 bg-gray-700 flex items-center justify-center animate-pulse">
          <button onClick={toggleSideNav} className="text-gray-500 cursor-pointer">
            {isOpen ? ( <TfiAngleDoubleLeft size={20} />
            ) : ( <TfiAngleDoubleRight size={20} />
            )}
          </button>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="pb-2 pt-4 text-gray-400">
        {navLinks.map((link, index) => (
          <a
            key={index}
            href={link.link}
            onClick={() => setActive(link)}
            className={`flex items-center p-2 hover:bg-gray-700 transition-all group
                ${ active === link.name
                  ? "bg-gray-700 text-yellow-400 border-l-4 border-yellow-400"
                    : "hover:bg-gray-700"
                }`}
          >
            <span className="mr-2 transition-transform duration-500 group-hover:rotate-360">
              {link.icon}
            </span>

            {isOpen && <span>{link.name}</span>}
          </a>
        ))}
      </nav>
    </aside>
  );
}

export default SideNav;
