import React from 'react'
import { FaPhoneAlt, FaCheckCircle} from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";


function ProfileCard({ profile }) {
  
  return (
    <button>
      <div className="relative rounded-lg shadow-lg">
        {/* Background Image */}
        <img
          src={profile.image}
          alt={profile.name}
          className="w-full h-80 object-cover"
        />
      
        <div className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-sm p-4 flex flex-col justify-end ">
          <h2 className="font-bold text-lg text-white mb-2">{profile.name}</h2>
          <div className="flex text-white/90 mb-2">
            <FaPhoneAlt  size={12} className='mr-1'/>
            <span className="text-sm">{profile.phone}</span>
          </div>

          <div className="flex text-white/90 mb-2">
            <CiLocationOn size={12} className='mr-1'/>
            <span className="text-sm">{profile.location}</span>
          </div>
    
          <p className="text-white/80 text-xs line-clamp-3">{profile.bio}</p>
        </div>
      </div>
    </button>
  )
}

export default ProfileCard