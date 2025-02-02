import React from 'react'
import ProfileCarousel from './ProfileCarousel'
import EscortsList from './EscortsList'

function MainContent({ isSideNavOpen }) {
  return (
    <div className={`z-50 min-h-screen transition-all duration-300 ${
        isSideNavOpen ? "ml-44" : "ml-16"
        }`}>
        <main className="min-h-screen">
            <div className='px-6 pt-12 min-h-screen'>
                <>
                  <div>
                  <ProfileCarousel />
                  </div>
                  <EscortsList />
                </>
            </div>
        </main>
    </div>
  )
}

export default MainContent