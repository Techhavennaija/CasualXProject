import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Games() {

  const getStoredTime = () => {
    const storedTime = localStorage.getItem("countdownTime");
    return storedTime ? new Date(storedTime) : new Date().setFullYear(new Date().getFullYear() + 1);
  };

  const calculateTimeLeft = (targetDate) => {
    const difference = targetDate - new Date();
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [targetDate] = useState(getStoredTime());
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    localStorage.setItem("countdownTime", targetDate);
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
      setRotation((prev) => prev + 180);
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);


  return (
    <div className="games_wrapper">
      <div className="flex flex-col items-center justify-center min-h-screen text-white p-4">
      <div className="relative bg-gray-800 p-6 rounded-2xl shadow-xl text-center w-full max-w-2xl min-h-[200px] flex flex-col justify-center">
        <motion.img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Hourglass_icon.svg"
          alt="Hourglass Vintage Sand Timer"
          className="w-16 h-16 absolute -top-8 left-1/2 transform -translate-x-1/2 mb-4"
          animate={{ rotate: rotation }}
          transition={{ duration: 1, ease: "linear" }}
        />
        <h2 className="text-xl font-bold mb-6">Countdown Timer</h2>
        <div className="grid grid-cols-4 gap-16 text-lg font-mono">
          <div className="text-center">
            <span className="text-2xl font-bold">{timeLeft.days}</span>
            <p>Days</p>
          </div>
          <div className="text-center">
            <span className="text-2xl font-bold">{timeLeft.hours}</span>
            <p>Hrs</p>
          </div>
          <div className="text-center">
            <span className="text-2xl font-bold">{timeLeft.minutes}</span>
            <p>Min</p>
          </div>
          <div className="text-center">
            <span className="text-2xl font-bold">{timeLeft.seconds}</span>
            <p>Sec</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Games