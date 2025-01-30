import React, { useState } from "react";
import SideNav from './SideNav'
import Header from './Header'
import MainContent from "./MainContent";

function Main() {

    const [isSideNavOpen, setIsSideNavOpen] = useState(true);

    const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
    };
    
    

  return (
    <div  className="flex min-h-screen">
        <div className="flex-1">
            <SideNav isOpen={isSideNavOpen} toggleSideNav={toggleSideNav} />
            <Header isSideNavOpen={isSideNavOpen} />
            <MainContent isSideNavOpen={isSideNavOpen}/>
        </div>
    </div>
  )
}

export default Main