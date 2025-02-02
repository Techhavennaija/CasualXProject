import React, { useState } from "react";
import SideNav from './SideNav'
import Header from './Header'
import MainContent from "./MainContent";
import Homepage from "./Homepage";

function Main() {

    const [isSideNavOpen, setIsSideNavOpen] = useState(true);

    const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
    };
    
    

  return (
    <div  className="">
        <div className="">
            <SideNav isOpen={isSideNavOpen} toggleSideNav={toggleSideNav} />
            <Header isSideNavOpen={isSideNavOpen} />
            <MainContent isSideNavOpen={isSideNavOpen}/>
        </div>
    </div>
  )
}

export default Main