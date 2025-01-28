import React, { useState } from "react";
import SideNav from './SideNav'
import Header from './Header'
import ProfileCarousel from './ProfileCarousel'

function Main() {

    const [isSideNavOpen, setIsSideNavOpen] = useState(true);

    const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
    };
    
  return (
    <div  className="flex min-h-screen">
        <SideNav isOpen={isSideNavOpen} toggleSideNav={toggleSideNav} />
        <div className="flex-1">
            <Header isSideNavOpen={isSideNavOpen} />
        </div>
    </div>
  )
}

export default Main