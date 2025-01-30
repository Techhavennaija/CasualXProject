import React from 'react'
import ProfileCarousel from './ProfileCarousel'

function MainContent({ isSideNavOpen }) {
  return (
    <main className={`flex pt-10 mx-auto min-h-screen transition-all fixed duration-300 ${isSideNavOpen ? "ml-44" : "ml-16"} `}>
      <ProfileCarousel />
    </main>
  )
}

export default MainContent