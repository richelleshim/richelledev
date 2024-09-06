import React, { useRef, useEffect, useState } from "react";
import { heroImg, novaImg, novaVideo, rseries } from "../utils";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Categories from "./Categories";

const Hero = () => {
  useGSAP(() => {
    gsap.to("#hero", { opacity: 1, delay: 1 });
  }, []);

  const videoRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  // Play video on hover
  const handleMouseEnter = () => {
    setIsHovering(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  // Stop video on mouse leave
  const handleMouseLeave = () => {
    setIsHovering(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // Reset video to start
    }
  };

  return (
    <section className="relative w-full h-[75vh] opacity-0 bg-black" id="hero">
      <div
        className=" absolute w-full h-full flex-center inset-0 bg-gray-900 bg-opacity-50"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          backgroundImage: `url(${novaImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "bg-gray-900 bg-opacity-50",
        }}
      >
        {!isHovering && (
          <div className="w-[90%] z-20">
            <img height={100} width={800} src={rseries} />
            <h1 className="text-white text-6xl font-bold">
              Richelle Haein Shim
            </h1>
            <p className="text-2xl mt-2 text-white">Welcome to my website!</p>
          </div>
        )}
        <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
        {isHovering && (
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover flex"
            autoPlay
            playsInline
            loop
          >
            <source src={novaVideo} type="video/mp4" />
          </video>
        )}
      </div>
    </section>
  );
};

export default Hero;
