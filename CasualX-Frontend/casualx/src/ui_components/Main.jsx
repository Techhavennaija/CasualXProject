import React, { useState } from "react";
import SideNav from './SideNav'
import Header from './Header'
import ProfileCarousel from './ProfileCarousel'

function Main() {

    const [isSideNavOpen, setIsSideNavOpen] = useState(false);

    const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
    };
    
  return (
    <div  className="flex min-h-screen">
        <SideNav />
        <div className="flex-1">
            <Header />
        </div>
    </div>
  )
}

export default Main