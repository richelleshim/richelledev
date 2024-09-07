import React, { useRef, useState } from "react";
import { rseries } from "../utils";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const RSeriesVideo = ({ title, subtitle, backgroundImage, vid }) => {
  useGSAP(() => {
    gsap.to("#intro", { opacity: 1, delay: 1 });
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
    <section
      className="relative w-full h-[68vh] pt-10 opacity-0 bg-black"
      id="intro"
    >
      <div
        className=" absolute w-full h-full flex-center inset-0 bg-gray-900 bg-opacity-50"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "bg-gray-900 bg-opacity-50",
        }}
      >
        {!isHovering && (
          <div className="w-[90%] ] z-10">
            <img height={100} width={800} src={rseries} />
            <h1 className="text-white text-6xl font-bold   ">{title}</h1>
            <p className="text-gray-50 text-lg mt-2 w-[75%]">{subtitle}</p>
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
            <source src={vid} type="video/mp4" />
          </video>
        )}
      </div>
    </section>
  );
};

export default RSeriesVideo;
