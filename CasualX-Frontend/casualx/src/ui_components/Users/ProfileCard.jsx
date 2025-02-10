import React from "react";
import { BsPhoneVibrateFill } from "react-icons/bs";
import New from "../../assets/images/NewTag.png";
import { MdVerified } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";


function ProfileCard({ profile }) {

  return (
    <div className="profile_carousel">
      <Link to={`/profile/${profile.id}`}  aria-label={`View profile of ${profile.display_name}`} >
        <div className="relative rounded-br-lg rounded-tl-lg shadow-sm text-white">
          <img
            src={ profile.picture1 || "/default-profile.jpg" } // Use the first picture from the database
            alt={profile.display_name || "Profile picture" }
            className="w-full h-86 object-cover rounded-br-lg rounded-tl-lg"
          />
          <div className="absolute top-0 left-0 w-16 h-16">
            <img src={New} className="w-full h-full" alt="New Profile Tag"/>
          </div>
          <div className="p-4 absolute bottom-0 right-0 left-0 bg-black opacity-50 rounded-br-lg">
            <h2 className="text-lg font-bold flex items-center">
              {profile.display_name} <MdVerified size={14} className="ml-2 text-blue-800" />
            </h2>
            <p className="flex items-center text-sm font-bold text-blue-600">
              <BsPhoneVibrateFill  className=" text-green-400" />{profile.mobile_number}
            </p>
            <p className="flex items-center justify-between text-sm">
              {profile.city}, {profile.state}, {profile.country} <FaRegHeart size={20}/>
            </p>
            <p className="mt-2 text-sm line-clamp-2">{profile.about}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ProfileCard