import React from 'react'
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
function ProfileCard({ profile }) {

  return (
    <a href="http://">
    <div className="relative h-80 w-80 rounded-lg overflow-hidden shadow-lg mx-auto mx-w-xs">
      {/* Background Image */}
      <img
        src={profile.image}
        alt={profile.name}
        className="w-full h-full object-cover"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 p-4 flex flex-col justify-end">
        <h2 className="font-bold text-lg font-bold text-white mb-2">{profile.name}</h2>
        <div className="flex text-white/90 mb-2">
          <FaPhoneAlt  size={12} className='mr-1'/>
          <span className="text-sm">{profile.phone}</span>
        </div>

        <div className="flex text-white/90 mb-2">
          <FaMapMarkerAlt size={12} className='mr-1'/>
          <span className="text-sm">{profile.location}</span>
        </div>
    
        <p className="text-white/80 text-xs line-clamp-3">{profile.bio}</p>
      </div>
    </div>
    </a>
  )
}

export default ProfileCard