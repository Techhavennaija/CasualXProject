import React from 'react'

function Card({ children }) {
  return (
    <div className="max-w-md mx-auto bg-sky-900 text-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4">
      <div className="p-8">
        {children}
      </div>
    </div>
  )
}

export default Card