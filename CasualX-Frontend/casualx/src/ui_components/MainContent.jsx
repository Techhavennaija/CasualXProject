import React from 'react'
import ProfileCarousel from './ProfileCarousel'

function MainContent({ isSideNavOpen }) {
  return (
    <div className={`flex-1 pt-10 transition-all duration-300 ${isSideNavOpen ? "ml-44" : "ml-16"} `}>
      <ProfileCarousel />
    </div>
  )
}

export default MainContent