import React from 'react'

function ProfileCard({ profile }) {

  return (
    <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
      {/* Background Image */}
      <img
        src={profile.image}
        alt={profile.name}
        className="w-full h-full object-cover"
      />
      {/* Blurred Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4">
        <h2 className="text-2xl font-bold">{profile.name}</h2>
        <p className="mt-2">{profile.phone}</p>
        <p className="mt-1">{profile.location}</p>
        <p className="mt-4 text-center">{profile.bio}</p>
      </div>
    </div>
  )
}

export default ProfileCard