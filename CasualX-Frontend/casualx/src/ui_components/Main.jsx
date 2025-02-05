import React, { useState, useEffect } from "react";
import SideNav from './SideNav'
import Header from './Header'
import MainContent from "./MainContent";
import ProfileCarousel from "./ProfileCarousel";
import EscortsList from "./EscortsList";

function Main() {

    const [isSideNavOpen, setIsSideNavOpen] = useState(true);

    const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
    };

  return (
    <div  className="global-container">
        <div className="casualx_content">
            <SideNav isOpen={isSideNavOpen} toggleSideNav={toggleSideNav} />
            <Header isSideNavOpen={isSideNavOpen} />
            <MainContent isSideNavOpen={isSideNavOpen} >
              <main className="min-h-screen">
                <div className='px-6 pt-12 min-h-screen'>
                  <>
                    <ProfileCarousel />
                    <EscortsList />
                  </>
                </div>
              </main>
            </MainContent>
        </div>
    </div>
  )
}

export default Main