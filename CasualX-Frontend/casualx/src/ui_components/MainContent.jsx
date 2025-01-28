import React from 'react'
import ProfileCarousel from './ProfileCarousel'

function MainContent() {
  return (
    <div className={`flex-1 transition-all duration-300 "ml-64" : "ml-16"`}>
      <ProfileCarousel />
    </div>
  )
}

export default MainContent