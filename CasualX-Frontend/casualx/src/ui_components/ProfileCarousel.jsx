import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProfileCard from './ProfileCard';

    // Sample profile data
    const profiles = [
        {
        id: 1,
        name: "John Doe",
        phone: "+123 456 7890",
        location: "New York, USA",
        bio: "Software Engineer with a passion for building scalable applications.",
        image: "https://via.placeholder.com/400",
        },
        {
        id: 2,
        name: "Jane Smith",
        phone: "+987 654 3210",
        location: "London, UK",
        bio: "UI/UX Designer specializing in user-centered design.",
        image: "https://via.placeholder.com/400",
        },
        {
        id: 3,
        name: "Alice Johnson",
        phone: "+111 222 3333",
        location: "Sydney, Australia",
        bio: "Data Scientist with expertise in machine learning and AI.",
        image: "https://via.placeholder.com/400",
        },
        {
        id: 4,
        name: "Bob Brown",
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
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
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
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Profile Carousel</h1>
      <Slider {...settings}>
        {profiles.map((profile) => (
          <div key={profile.id} className="px-2">
            <ProfileCard profile={profile} />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default ProfileCarousel