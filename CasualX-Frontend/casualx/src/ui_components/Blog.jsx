import React, { useState, useEffect } from "react";
import Header from './Header'
import SideNav from './SideNav'
import MainContent from './MainContent'

function Blog() {

    const [isSideNavOpen, setIsSideNavOpen] = useState(false);
    
        const toggleSideNav = () => {
        setIsSideNavOpen(!isSideNavOpen);
        };

  return (
    <div className="HubPage_UI">
      <SideNav isOpen={isSideNavOpen} toggleSideNav={toggleSideNav} />
      <Header isSideNavOpen={isSideNavOpen}/>
      <MainContent isSideNavOpen={isSideNavOpen}>
          <div className='min-h-screen px-6 pt-16'>
            <div className="min-h-screen">
              <div className="grid grid-cols-4 gap-4">
                  <div className="trendingPage">
                    <h3 className="text-3xl"><span>TRENDING</span></h3>
                  </div>
                  <div className="col-span-2">
                    <div className="blogPost_heading text-2xl text-semibold">
                      <h3 className="text-3xl"><span>BLOG POSTS</span></h3>
                      <div class="mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl pt-2">
  <div class="md:flex">
    <div class="md:shrink-0">
      <img
        class="h-48 w-full object-cover md:h-full md:w-48"
        src="/img/building.jpg"
        alt="Modern building architecture"
      />
    </div>
    <div class="p-8">
      <div class="text-sm font-semibold tracking-wide text-indigo-500 uppercase">Company retreats</div>
      <a href="#" class="mt-1 block text-lg leading-tight font-medium text-black hover:underline">
        Incredible accommodation for your team
      </a>
      <p class="mt-2 text-gray-500">
        Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of
        places to do just that.
      </p>
    </div>
  </div>
</div>
                    </div>
                  </div>
                  <div>
                    <h3><span>LATEST</span></h3>
                  </div>
              </div>
            </div>
          </div>
        </MainContent>
    </div>
  )
}

export default Blog