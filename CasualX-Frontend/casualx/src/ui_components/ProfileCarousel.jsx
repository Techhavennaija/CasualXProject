import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProfileCard from './ProfileCard';

    // Sample profile data
    const profiles = [
      {
      id: 1,
      name: "Ayofe Omolara",
      phone: "+2348115128285",
      location: "New York, USA",
      bio: "Software Engineer with a passion for building scalable applications.",
      image: "https://via.placeholder.com/400",
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

// Carousel Settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        responsive: [
        {
          breakpoint: 1024,
          settings: {
          slidesToShow: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
          slidesToShow: 1,
          },
        },
      ],
    };

function ProfileCarousel() {
  return (
    <div>
      <Slider {...settings}>
        {profiles.map((profile) => (
          <div key={profile.id} >
            <ProfileCard profile={profile} />
          </div>
        ))}
      </Slider>
      <div className='px-50 py-8 text-center'>
        <p className='pb-4'>Due to the actions of FRAUDSTERS who have evaded payment after receiving service, our
          respected gentlemen, ESCORTS now demand payments before service. No Exception.</p>
        <p className='pb-4'>Clients are EXPECTED to conﬁrm ESCORTS with a video call and provide transportation 
          upfront. Please do not hesitate to report any Fraudulent Escort.</p>
      </div>
    </div>
  )
}

export default ProfileCarousel