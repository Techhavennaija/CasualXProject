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
import { TfiAngleDoubleLeft, TfiAngleDoubleRight} from "react-icons/tfi";
import { MdAdminPanelSettings, MdRateReview, MdLinkedCamera } from "react-icons/md";
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import { FaPeopleGroup, FaBus } from "react-icons/fa6";
import { HiSpeakerphone } from "react-icons/hi";
import { TbRating18Plus } from "react-icons/tb";
import { IoBed } from "react-icons/io5";
  


function SideNav({ isOpen, toggleSideNav }) {
  
    const navLinks = [
        { name: "Home", icon: <FaHome size={20}/>, link: "/" },
        { name: "Hub", icon: <HiChatBubbleLeftRight size={20}/>, link: "/hub" },
        { name: "Cam Show", icon: <MdLinkedCamera size={20}/>, link: "/cam-show" },
        { name: "Videos", icon: <FaPhotoVideo size={20}/>, link: "/naughty-videos", isAdultContent: true },
        { name: "Strippers", icon: <FaPeopleGroup size={20}/>, link: "/strippers" },
        { name: "Rooms", icon: <IoBed size={20}/>, link: "/room-to-let" },
        { name: "Tours", icon: <FaBus size={20}/>, link: "/tours" },
        { name: "Events", icon: <FaCalendarAlt size={20}/>, link: "/events" },
        { name: "Adverts", icon: <HiSpeakerphone size={20}/>, link: "/adverts" },
        { name: "Gaming", icon: <FaGamepad size={20}/>, link: "/games" },
        { name: "Reviews", icon: <MdRateReview size={20}/>, link: "/reviews" },
        { name: "Testimonials", icon: <FaThumbsUp size={20}/>, link: "/testimonials" },
        { name: "Blacklisted", icon: <FaBan size={20}/>, link: "/blacklisted" },
        { name: "Blog", icon: <FaBlogger size={20}/>, link: "/blog" },
        { name: "FAQs", icon: <FaQuestionCircle size={20}/>, link: "/faqs" },
        { name: "Admin", icon: <MdAdminPanelSettings size={20}/>, link: "/admin" },
      ];

  return (
      <aside className={`fixed top-0 left-0 h-screen bg-gray-800 transition-all duration-300 ease-in-out
        ${ isOpen ? " w-44" : "w-0 md:w-16" }`}
        >
        {/* Hambuger button to toggle SideNav*/}
        <div className="flex items-center justify-between px-2 py-4">
          <div className="rounded-full outline-solid outline-gray-500 w-8 h-8 bg-gray-700 flex items-center justify-center animate-pulse">
            <button onClick={toggleSideNav} className="text-gray-500 cursor-pointer">
              {isOpen ? <TfiAngleDoubleLeft size={20} /> : <TfiAngleDoubleRight size={20} />}
            </button>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="pb-2 pt-4 text-gray-400">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.link}
              className="flex items-center p-2 hover:bg-gray-700 transition-colors group"
            >
              <span className="mr-2 transition-transform duration-500 group-hover:rotate-360">{link.icon}</span>

              {isOpen && <span>{link.name}
                
                  {/* Add 18+ icon for Videos */}
                  {link.isAdultContent && (
                    <TbRating18Plus className=" text-white-500" />
                  )}
                </span>
              }
            </a>
          ))}
        </nav>
      </aside>
  )
}

export default SideNav