import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import ProfileCard from "./ProfileCard";

function ProfileCarousel() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/profiles/")
      .then((response) => response.json())
      .then((data) => setProfiles(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  // Carousel Settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 1200,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    swipeToSlide: true,
    arrows: false, // Remove navigation arrows
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "-25px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ul style={{ margin: "0", padding: "0", display: "flex", gap: "2px" }}>
          {dots.slice(0, 4)}
        </ul>
      </div>
    ),
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 5, slidesToScroll: 1 } },
      { breakpoint: 600, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <section className="escortCarousel_slider">
      <Slider {...settings}>
        {profiles.map((profile) => (
          <div key={profile.id} className="px-2">
            <ProfileCard profile={profile} />
          </div>
        ))}
      </Slider>
      <div className="mx-40 my-8 text-center">
        <blockquote className="text-1xl font-bold text-gray-900 italic dark:text-white">
          Escorts now require upfront {""}
          <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-pink-500">
            <span className="relative text-white dark:text-gray-950">
              {" "}
              PAYMENT{" "}
            </span>
          </span>{" "}
          {""}
          before service due to Fraudsters invading payment. No Exceptions.
          <p className="py-4 px-40">
            Clients are EXPECTED to provide transportation upfront, after
            conﬁrming escort with a video call. Please do not hesitate to report
            any Fraudulent Escort.
          </p>
        </blockquote>
      </div>
    </section>
  );
}

export default ProfileCarousel;
