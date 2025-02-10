import React from 'react'
import { Check } from "lucide-react";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

function RegistrationCard() {
 return (
   <div class="register_card">
     <div class="max-w-2xl max-lg:max-w-2xl mx-auto">
       <div class="text-center">
         <h2 class="text-gray-800 text-2xl font-bold mb-6">
           Create An Account
         </h2>
       </div>

       <div class="grid lg:grid-cols-2 sm:grid-cols-1 gap-6 mt-6 max-sm:max-w-xs max-sm:mx-auto">
         <div class="shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] rounded-lg overflow-hidden transition-all duration-500 hover:scale-[1.04]">
           <div class="h-30 bg-gray-700 text-center p-4">
             <h3 class="text-[22px] text-white mt-3 font-bold">Guest/Client</h3>
           </div>

           <div class="h-24 w-24 mx-auto -mt-12 shadow-xl rounded-full bg-gray-700 text-white border-[3px] flex flex-col items-center justify-center border-white">
             <h3 class="text-2xl">Free</h3>
           </div>

           <div class="px-6 py-4 mt-4">
             <ul class="space-y-4">
               <li class="flex items-center text-sm text-gray-500"><IoMdCheckmarkCircleOutline size={17} className="mr-3 bg-green-500 fill-white rounded-full p-[3px]" />
                  Tag profiles a favorite
               </li>
               <li class="flex items-center text-sm text-gray-500"><IoMdCheckmarkCircleOutline size={17} className="mr-3 bg-green-500 fill-white rounded-full p-[3px]" />
                 Browse profiles
               </li>
               <li class="flex items-center text-sm text-gray-500">
                 <IoMdCheckmarkCircleOutline
                   size={17}
                   className="mr-3 bg-green-500 fill-white rounded-full p-[3px]"
                 />
                 Contact Escorts directly
               </li>
               <li class="flex items-center text-sm text-gray-500">
                 <IoMdCheckmarkCircleOutline
                   size={17}
                   className="mr-3 bg-green-500 fill-white rounded-full p-[3px]"
                 />
                 Rate and review escorts
               </li>
               <li class="flex items-center text-sm text-gray-500">
                 <IoMdCheckmarkCircleOutline
                   size={17}
                   className="mr-3 bg-green-500 fill-white rounded-full p-[3px]"
                 />
                 Report Escorts
               </li>
               <li class="flex items-center text-sm text-gray-500">
                 <IoMdCheckmarkCircleOutline
                   size={17}
                   className="mr-3 bg-green-500 fill-white rounded-full p-[3px]"
                 />
                 Publish a classified Ads
               </li>
               <li class="flex items-center text-sm text-gray-500">
                 <IoMdCheckmarkCircleOutline
                   size={17}
                   className="mr-3 bg-green-500 fill-white rounded-full p-[3px]"
                 />
                 Many more....
               </li>
             </ul>
             <button type="button" class="w-full mt-8 px-5 py-2.5 text-sm text-white bg-gray-700 hover:bg-gray-800 rounded-full cursor-pointer">Get Started</button>
           </div>
         </div>

         <div class="shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] rounded-lg overflow-hidden transition-all duration-500 hover:scale-[1.04] relative">
           <span class="px-2 py-1 text-[10px] font-semibold text-white bg-orange-400 rounded-lg ml-3 absolute -left-4 top-0">Most popular</span>
           <div class="h-30 bg-blue-600 text-center p-4">
             <h3 class="text-[22px] text-white mt-3 font-bold">Independent Escort</h3>
           </div>

           <div class="h-24 w-24 mx-auto -mt-12 shadow-xl rounded-full bg-blue-600 text-white border-[3px] flex flex-col items-center justify-center border-white">
             <p class="text-[10px] font-bold">Weekly</p>
             <h3 class="text-2xl">20k</h3>
           </div>

           <div class="px-6 py-4 mt-4">
             <ul class="space-y-4">
               <li class="flex items-center text-sm text-gray-500"><IoMdCheckmarkCircleOutline size={17}className="mr-3 bg-green-500 fill-white rounded-full p-[3px]"/>
                Setup an Escort Profile
               </li>
               <li class="flex items-center text-sm text-gray-500"><IoMdCheckmarkCircleOutline size={17} className="mr-3 bg-green-500 fill-white rounded-full p-[3px]" />
                 Upload catchy profiles pictures
               </li>
               <li class="flex items-center text-sm text-gray-500"><IoMdCheckmarkCircleOutline size={17} className="mr-3 bg-green-500 fill-white rounded-full p-[3px]" />
                 Provide contact information
               </li>
               <li class="flex items-center text-sm text-gray-500"><IoMdCheckmarkCircleOutline size={17} className="mr-3 bg-green-500 fill-white rounded-full p-[3px]" />
                 Get a Premium Subscription & Spot
               </li>
               <li class="flex items-center text-sm text-gray-500">
                 <IoMdCheckmarkCircleOutline size={17} className="mr-3 bg-green-500 fill-white rounded-full p-[3px]" />
                  Add tours & Publish classified Ads
               </li>
               <li class="flex items-center text-sm text-gray-500"><IoMdCheckmarkCircleOutline size={17} className="mr-3 bg-green-500 fill-white rounded-full p-[3px]" />
                 Flag client as blacklisted
               </li>
               <li class="flex items-center text-sm text-gray-500"><IoMdCheckmarkCircleOutline size={17} className="mr-3 bg-green-500 fill-white rounded-full p-[3px]" />
                 Many More.....
               </li>
             </ul>

             <a href="escort-register">
               <button type="button" class="w-full mt-8 px-5 py-2.5 text-sm text-white bg-blue-600 hover:bg-blue-700 rounded-full cursor-pointer">Get Started</button>
             </a>

           </div>
         </div>
       </div>
     </div>
   </div>
 );
}

export default RegistrationCard