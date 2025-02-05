import { IoFilterSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import React, { useEffect, useState } from "react";

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

    <div className="h-screen">
      <a href="">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {profiles.map((profile) => (
            <div key={profile.id} className="relative rounded-lg overflow-hidden shadow-lg">
              {[profile.picture1].map(
              (picture, index) =>
                picture && (
                  <img
                    key={index}
                    src={picture}
                    alt={`Profile ${index + 1}`}
                    className="w-full h-24 object-cover"
                  />
                )
            )}

          <div className="inset-0 bg-blur bg-opacity-70 backdrop-blur-sm p-4 flex flex-col justify-end">
            <div className="p-4">
            <h2 className="text-xl font-bold">{profile.display_name}</h2>
            <p className="mt-2">
              <span className="font-bold">Location:</span> {profile.city}, {profile.state}, {profile.country}
            </p>
            <p>
              <span className="font-bold">Mobile:</span> {profile.mobile_number}
            </p>
            <p className="mt-2">
              <span className="font-bold">About:</span> {profile.about}
            </p>
            </div>
          </div>
          
        </div>
      ))}
    </div>
      </a>
    </div>
  
  )
}

export default EscortsList
