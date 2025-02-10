import React, { useState, useEffect } from "react";
import Header from "./Layouts/Header";
import SideNav from "./Layouts/SideNav";
import MainContent from "./MainContent";

const mockListings = [
  {
    id: 1,
    title: "Cozy Apartment in Lekki",
    location: "Lekki, NG",
    price: 120,
    rating: 4.8,
    image: "https://via.placeholder.com/400",
    amenities: ["Wi-Fi", "Kitchen", "Pool"],
  },
  {
    id: 2,
    title: "Luxury Villa with Ocean View",
    location: "Miami, USA",
    price: 300,
    rating: 4.9,
    image: "https://via.placeholder.com/400",
    amenities: ["Wi-Fi", "Kitchen", "Pool", "Gym"],
  },
  {
    id: 3,
    title: "Rustic Cabin in the Woods",
    location: "Colorado, USA",
    price: 80,
    rating: 4.5,
    image: "https://via.placeholder.com/400",
    amenities: ["Wi-Fi", "Fireplace"],
  },
  {
    id: 4,
    title: "Modern Loft in the City",
    location: "San Francisco, USA",
    price: 200,
    rating: 4.7,
    image: "https://via.placeholder.com/400",
    amenities: ["Wi-Fi", "Kitchen", "Balcony"],
  },
];

function Rooms() {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  return (
    <div className="Rooms_UI">
      <SideNav isOpen={isSideNavOpen} toggleSideNav={toggleSideNav} />
      <Header isSideNavOpen={isSideNavOpen} />
      <MainContent isSideNavOpen={isSideNavOpen}>
        <div className="min-h-screen px-6 pt-16 font-sans">
          <div className="min-h-screen">
            <div className="flex justify-between">
              <h1 className="text-2xl font-bold">ShortLet Apartment</h1>
              <div>
                <button
                  className="px-4 py-1 bg-sky-900 shadow-md text-white rounded-full transition-all"
                  onClick={() => alert("Filter clicked!")} // Add signup logic here
                >
                  {" "}
                  Filter
                </button>
              </div>
            </div>
            <div className="min-h-screen">
              <div className="flex justify-end py-6">
                <h1>
                  LISTING: <span className="font-bold">29 ROOMS LEFT</span>
                </h1>
              </div>
              <div className="grid grid-cols-4 gap-4">
                <div>
                  <img
                    className="rounded-lg"
                    src={mockListings.image}
                    alt={mockListings.title}
                  />
                  <div className="mt-4">
                    <div className="text-xs font-bold text-sky-500">
                      {mockListings.title}
                    </div>
                    <div className="mt-1 font-bold text-gray-700">
                      <a href="" className="hover:underline">
                        {mockListings.title}
                      </a>
                    </div>
                    <div className="mt-2 text-sm text-gray-600">
                      {mockListings.price}
                    </div>
                  </div>
                </div>

                <div>
                  <h1>Hello</h1>
                </div>
                <div>
                  <h1>Hello</h1>
                </div>
                <div>
                  <h1>Hello</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainContent>
    </div>
  );
}

export default Rooms;
