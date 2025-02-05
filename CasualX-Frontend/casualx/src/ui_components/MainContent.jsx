import React from 'react'
import ProfileCarousel from './ProfileCarousel'
import EscortsList from './EscortsList'

function MainContent({ children, isSideNavOpen }) {
  return (
    <div className={`z-50 min-h-screen transition-all duration-300 ${
        isSideNavOpen ? "ml-44" : "ml-16"
        }`}>
         {children}
    </div>
  )
}

export default MainContent