import React from 'react'

function Homepage({ isSideNavOpen }) {
  return (
    <div className={`z-50 min-h-screen bg-white-800 text-red transition-all duration-300 ${
        isSideNavOpen ? "ml-44" : "ml-16"
        }`}>
        <div className="min-h-screen">
            <div className='px-6 pt-12'>
                
            </div>
        </div>
    </div>
  )
}

export default Homepage