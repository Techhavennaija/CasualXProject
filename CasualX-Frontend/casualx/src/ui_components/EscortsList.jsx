import React from 'react'
import { IoFilterSharp } from "react-icons/io5";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";


const profile = [
  {
  id: 1,
  name: "Ayofe Omolara",
  phone: "+2348115128285",
  location: "New York, USA",
  bio: "Software Engineer with a passion for building scalable applications.",
  image: "./IMG_2025.JPEG",
  },
  {
  id: 2,
  name: "Omolara",
  phone: "+2348115128285",
  location: "London, UK",
  bio: "UI/UX Designer specializing in user-centered design.",
  image: "../assets/images/IMG_2025.jpg",
  },
  {
  id: 3,
  name: "Blessing",
  phone: "+111 222 3333",
  location: "Sydney, Australia",
  bio: "Data Scientist with expertise in machine learning and AI.",
  image: "https://via.placeholder.com/400",
  },
  {
  id: 4,
  name: "Miemie",
  phone: "+444 555 6666",
  location: "Toronto, Canada",
  bio: "Full-stack developer with a focus on modern web technologies.",
  image: "https://via.placeholder.com/400",
  },
  {
  id: 5,
  name: "Charlie Davis",
  phone: "+777 888 9999",
  location: "Berlin, Germany",
  bio: "Digital marketer with a knack for SEO and content strategy.",
  image: "https://via.placeholder.com/400",
  },
  {
  id: 6,
  name: "Eva Green",
  phone: "+222 333 4444",
  location: "Paris, France",
  bio: "Graphic designer passionate about branding and visual storytelling.",
  image: "https://via.placeholder.com/400",
  },
  {
  id: 7,
  name: "Frank White",
  phone: "+555 666 7777",
  location: "Tokyo, Japan",
  bio: "Mobile app developer specializing in cross-platform solutions.",
  image: "https://via.placeholder.com/400",
  },
  {
  id: 8,
  name: "Grace Lee",
  phone: "+888 999 0000",
  location: "Seoul, South Korea",
  bio: "Product manager with a focus on agile methodologies.",
  image: "https://via.placeholder.com/400",
  },
  {
  id: 9,
  name: "Henry Wilson",
  phone: "+123 987 6543",
  location: "Mumbai, India",
  bio: "Cloud architect with expertise in AWS and Azure.",
  image: "https://via.placeholder.com/400",
  },
  {
  id: 10,
  name: "Ivy Taylor",
  phone: "+456 789 1234",
  location: "Cape Town, South Africa",
  bio: "Content writer with a focus on tech and innovation.",
  image: "https://via.placeholder.com/400",
  },
];

function EscortsList ({profiles}) {

  return (
    <div>
      <div className="h-screen">
        {/* EscortsList Section*/}
        <div className="flex justify-between items-center px-2 py-4">
          <h1>All Escorts</h1>
          <div className="">
            <IoFilterSharp  size={20} className="cursor-pointer" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <button>
            <div className="relative rounded-lg shadow-md">
              <img
                src={profile[0].image}
                alt={profile[0].name}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 p-4 flex flex-col justify-end">
                <h2 className="text-md font-bold text-white mb-2">{profile[0].name}</h2>
                <div className="flex text-white/90 mb-2">
                  <FaPhoneAlt  size={12} className='mr-1'/>
                  <span className="text-sm">{profile[0].phone}</span>
                </div>
                <div className="flex text-white/90 mb-2">
                  <CiLocationOn size={12} className='mr-1'/>
                  <span className="text-sm">{profile[0].location}</span>
                </div>
                <p className="text-white/80 text-xs line-clamp-3">{profile[0].bio}</p>
              </div>
            </div>
          </button>

          <button>
            <div className="relative rounded-lg shadow-md">
              <img
                src={profile[1].image}
                alt={profile[1].name}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 p-4 flex flex-col justify-end">
                <h2 className="font-bold text-lg font-bold text-white mb-2">{profile[1].name}</h2>
                <div className="flex text-white/90 mb-2">
                  <FaPhoneAlt  size={12} className='mr-1'/>
                  <span className="text-sm">{profile[1].phone}</span>
                </div>
                <div className="flex text-white/90 mb-2">
                  <CiLocationOn size={12} className='mr-1'/>
                  <span className="text-sm">{profile[1].location}</span>
                </div>
                <p className="text-white/80 text-xs line-clamp-3">{profile[1].bio}</p>
              </div>
            </div>
          </button>

          <button>
            <div className="relative rounded-lg shadow-md">
              <img
                src={profile[2].image}
                alt={profile[2].name}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 p-4 flex flex-col justify-end">
                <h2 className="font-bold text-lg font-bold text-white mb-2">{profile[2].name}</h2>
                <div className="flex text-white/90 mb-2">
                  <FaPhoneAlt  size={12} className='mr-1'/>
                  <span className="text-sm">{profile[2].phone}</span>
                </div>
                <div className="flex text-white/90 mb-2">
                  <CiLocationOn size={12} className='mr-1'/>
                  <span className="text-sm">{profile[2].location}</span>
                </div>
                <p className="text-white/80 text-xs line-clamp-3">{profile[2].bio}</p>
              </div>
            </div>
          </button>

          <button>
            <div className="relative rounded-lg shadow-md">
              <img
                src={profile[0].image}
                alt={profile[0].name}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 p-4 flex flex-col justify-end">
                <h2 className="font-bold text-lg font-bold text-white mb-2">{profile[0].name}</h2>
                <div className="flex text-white/90 mb-2">
                  <FaPhoneAlt  size={12} className='mr-1'/>
                  <span className="text-sm">{profile[0].phone}</span>
                </div>
                <div className="flex text-white/90 mb-2">
                  <CiLocationOn size={12} className='mr-1'/>
                  <span className="text-sm">{profile[0].location}</span>
                </div>
                <p className="text-white/80 text-xs line-clamp-3">{profile[0].bio}</p>
              </div>
            </div>
          </button>

          <button>
            <div className="relative rounded-lg shadow-md">
              <img
                src={profile[0].image}
                alt={profile[0].name}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 p-4 flex flex-col justify-end">
                <h2 className="font-bold text-lg font-bold text-white mb-2">{profile[0].name}</h2>
                <div className="flex text-white/90 mb-2">
                  <FaPhoneAlt  size={12} className='mr-1'/>
                  <span className="text-sm">{profile[0].phone}</span>
                </div>
                <div className="flex text-white/90 mb-2">
                  <CiLocationOn size={12} className='mr-1'/>
                  <span className="text-sm">{profile[0].location}</span>
                </div>
                <p className="text-white/80 text-xs line-clamp-3">{profile[0].bio}</p>
              </div>
            </div>
          </button>

          <button>
            <div className="relative rounded-lg shadow-md">
              <img
                src={profile[0].image}
                alt={profile[0].name}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 p-4 flex flex-col justify-end">
                <h2 className="font-bold text-lg font-bold text-white mb-2">{profile[0].name}</h2>
                <div className="flex text-white/90 mb-2">
                  <FaPhoneAlt  size={12} className='mr-1'/>
                  <span className="text-sm">{profile[0].phone}</span>
                </div>
                <div className="flex text-white/90 mb-2">
                  <CiLocationOn size={12} className='mr-1'/>
                  <span className="text-sm">{profile[0].location}</span>
                </div>
                <p className="text-white/80 text-xs line-clamp-3">{profile[0].bio}</p>
              </div>
            </div>
          </button>

          <button>
            <div className="relative rounded-lg shadow-md">
              <img
                src={profile[0].image}
                alt={profile[0].name}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 p-4 flex flex-col justify-end">
                <h2 className="font-bold text-lg font-bold text-white mb-2">{profile[0].name}</h2>
                <div className="flex text-white/90 mb-2">
                  <FaPhoneAlt  size={12} className='mr-1'/>
                  <span className="text-sm">{profile[0].phone}</span>
                </div>
                <div className="flex text-white/90 mb-2">
                  <CiLocationOn size={12} className='mr-1'/>
                  <span className="text-sm">{profile[0].location}</span>
                </div>
                <p className="text-white/80 text-xs line-clamp-3">{profile[0].bio}</p>
              </div>
            </div>
          </button>

          <button>
            <div className="relative rounded-lg shadow-md">
              <img
                src={profile[0].image}
                alt={profile[0].name}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 p-4 flex flex-col justify-end">
                <h2 className="font-bold text-lg font-bold text-white mb-2">{profile[0].name}</h2>
                <div className="flex text-white/90 mb-2">
                  <FaPhoneAlt  size={12} className='mr-1'/>
                  <span className="text-sm">{profile[0].phone}</span>
                </div>
                <div className="flex text-white/90 mb-2">
                  <CiLocationOn size={12} className='mr-1'/>
                  <span className="text-sm">{profile[0].location}</span>
                </div>
                <p className="text-white/80 text-xs line-clamp-3">{profile[0].bio}</p>
              </div>
            </div>
          </button>

          <button>
            <div className="relative rounded-lg shadow-md">
              <img
                src={profile[0].image}
                alt={profile[0].name}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 p-4 flex flex-col justify-end">
                <h2 className="font-bold text-lg font-bold text-white mb-2">{profile[0].name}</h2>
                <div className="flex text-white/90 mb-2">
                  <FaPhoneAlt  size={12} className='mr-1'/>
                  <span className="text-sm">{profile[0].phone}</span>
                </div>
                <div className="flex text-white/90 mb-2">
                  <CiLocationOn size={12} className='mr-1'/>
                  <span className="text-sm">{profile[0].location}</span>
                </div>
                <p className="text-white/80 text-xs line-clamp-3">{profile[0].bio}</p>
              </div>
            </div>
          </button>

          <button>
            <div className="relative rounded-lg shadow-md">
              <img
                src={profile[0].image}
                alt={profile[0].name}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 p-4 flex flex-col justify-end">
                <h2 className="font-bold text-lg font-bold text-white mb-2">{profile[0].name}</h2>
                <div className="flex text-white/90 mb-2">
                  <FaPhoneAlt  size={12} className='mr-1'/>
                  <span className="text-sm">{profile[0].phone}</span>
                </div>
                <div className="flex text-white/90 mb-2">
                  <CiLocationOn size={12} className='mr-1'/>
                  <span className="text-sm">{profile[0].location}</span>
                </div>
                <p className="text-white/80 text-xs line-clamp-3">{profile[0].bio}</p>
              </div>
            </div>
          </button>

        </div>
        
      </div> 
    </div>

  
  )
}

export default EscortsList
