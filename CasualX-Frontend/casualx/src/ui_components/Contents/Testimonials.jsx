import React, { useState, useEffect } from "react";
import { IoIosAddCircle } from "react-icons/io";

function Testimonials() {

    const [isSideNavOpen, setIsSideNavOpen] = useState(false);
    
        const toggleSideNav = () => {
        setIsSideNavOpen(!isSideNavOpen);
        };

  return (
    <div class="mt-4">
      <div class="mx-auto">
        <div class="flex justify-between mx-auto max-lg:max-w-2xl">
          <div class="col-span-2">
            <h2 class="text-gray-800 text-2xl font-bold">Testimonials</h2>
          </div>

          <div class="flex gap-2 items-center text-yellow-800 font-bold">
           <span><IoIosAddCircle size={30}/> </span><a href="">Write a Testimonial</a>
          </div>
        </div>

        <div class="overflow-auto mt-12">
          <div class="grid lg:grid-cols-2 sm:grid-cols-1 gap-6 mx-10">
            <div class="h-auto py-5 px-14 bg-white border-2 rounded-3xl relative">
              <img src="https://readymadeui.com/team-2.webp" class="w-20 h-20 rounded-full absolute -left-10 top-0 bottom-0 my-auto border-2 border-gray-700" />
              <div>
                <h6 class="text-gray-800 text-[15px] font-bold">Joseph Isreal</h6>
              </div>
              <div class="mt-4">
                <p class="text-gray-800 text-sm leading-relaxed">Since I joined this site all I get is send me pictures or videos and they're all broke ass guys 
                  that can't even send T fare. So I refuse to Go. unserious guys, like they're all under age guys. I think the admin 
                  should set something like one need to pick the age of people one needs to see one page so under age don't
                   message me.
                </p>
              </div>
            </div>

            <div class="max-w-auto h-auto py-5 px-14 bg-white border-2 rounded-3xl relative">
              <img src="https://readymadeui.com/team-5.webp" class="w-20 h-20 rounded-full absolute -left-10 top-0 bottom-0 my-auto border-2 border-gray-700" />
              <div>
                <h6 class="text-gray-800 text-[15px] font-bold">Ayofe Nafisat</h6>
              </div>
              <div class="mt-4">
                <p class="text-gray-800 text-sm leading-relaxed">The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.</p>
              </div>
            </div>

            <div class="max-w-auto h-auto py-5 px-14 bg-white border-2 rounded-3xl relative">
              <img src="https://readymadeui.com/team-4.webp" class="w-20 h-20 rounded-full absolute -left-10 top-0 bottom-0 my-auto border-2 border-gray-700" />
              <div>
                <h6 class="text-gray-800 text-[15px] font-bold">James Isreal</h6>
              </div>
              <div class="mt-4">
                <p class="text-gray-800 text-sm leading-relaxed">The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials