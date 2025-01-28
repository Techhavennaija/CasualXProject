import React from 'react'
import SideNav from './SideNav'
import Header from './Header'
import MainContent from './MainContent'

function Main() {
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