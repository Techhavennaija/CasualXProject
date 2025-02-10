import React from 'react'

function MainContent({ children, isSideNavOpen }) {
  return (
    <div className={`z-99999 block transition-all duration-300 top-0 dark:bg-black ${
        isSideNavOpen ? "ml-36" : "ml-16"
        }`}>
         <div className="content_container">
          <main className="content_wrapper min-h-fit pt-12 mx-6">
            {children}
          </main>
         </div>
    </div>
  )
}

export default MainContent