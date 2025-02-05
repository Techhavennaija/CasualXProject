import React, { useState, useEffect } from "react";
import Header from './Header'
import SideNav from './SideNav'
import MainContent from './MainContent'

function HubPage() {

    const [isSideNavOpen, setIsSideNavOpen] = useState(false);
    
        const toggleSideNav = () => {
        setIsSideNavOpen(!isSideNavOpen);
        };

  return (
    <div className="HubPage_UI">
      <SideNav isOpen={isSideNavOpen} toggleSideNav={toggleSideNav} />
      <Header isSideNavOpen={isSideNavOpen}/>
      <MainContent isSideNavOpen={isSideNavOpen}>
          <div className='min-h-screen'>
            <div className="flex justify-center items-center h-screen">
                <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
                    HUB Coming Soon
                </h1>
            </div>
          </div>
        </MainContent>
    </div>
  )
}

export default HubPage