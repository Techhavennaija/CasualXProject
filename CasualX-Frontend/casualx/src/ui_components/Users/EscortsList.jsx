import React, { useEffect, useState } from "react";
import { BsPhoneVibrateFill } from "react-icons/bs";
import New from "../../assets/images/NewTag.png";
import { MdVerified } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";


function EscortsList () {

  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    // Fetch user profiles from Django API
    fetch("http://localhost:8000/api/profiles/",) 
      .then((response) => response.json())
      .then((data) => setProfiles(data))
      .catch((error) => console.error("Error fetching profiles:", error));
  }, []);

  return (

    <section className="escort_list h-screen">
      
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 xl:grid-col-6 gap-6 overflow-hidden group cursor-pointer"> 
        {profiles.map((profile) => (
          <div key={profile.id} className="relative rounded-br-lg rounded-tl-lg shadow-sm text-white">
            {[profile.picture1].map(
            (picture, index) =>
              picture && (
                <img
                  key={index}
                  src={picture}
                  alt={`Profile ${index + 1}`}
                  className="w-full h-86 object-cover rounded-br-lg rounded-tl-lg"
                />
              )
          )}
          <div className="absolute top-0 left-0 w-16 h-16">
            <img src={New} className="w-full h-full" alt="Tag"/>
          </div>

          <div className="p-4 absolute bottom-0 right-0 left-0 bg-black opacity-50 rounded-br-lg">
            <h2 className="text-lg font-bold flex items-center">
              {profile.display_name} <MdVerified size={14} className="ml-2 text-blue-800" />
            </h2>
            <p className="flex items-center text-xs font-bold text-blue-600"> 
              < BsPhoneVibrateFill className=" text-green-400"/> {profile.mobile_number}
            </p>
            <p className="flex items-center justify-between text-xs">
              {profile.city}, {profile.state}, {profile.country} <FaRegHeart size={20} className=""/>
            </p>
            <p className="mt-2 text-sm line-clamp-2">{profile.about}</p>
        </div>
      </div>
      ))}
    </div>
  </section>
  
  )
}

export default EscortsList
