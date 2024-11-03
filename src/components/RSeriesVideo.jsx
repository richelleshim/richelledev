import React, { useRef, useState } from "react";
import { netflixSound, rseries } from "../utils";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const RSeriesVideo = ({ title, subtitle, backgroundImage, vid }) => {
  useGSAP(() => {
    gsap.to("#intro", { opacity: 1, delay: 1 });
  }, []);

  const videoRef = useRef(null);
  const audioRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
    if (audioRef.current) {
      audioRef.current.play();
    }

    setTimeout(() => {
      if (videoRef.current) {
        gsap.to(videoRef.current, { opacity: 1, duration: 1.5 });
        videoRef.current.play();
      }
    }, 2000);
  };

  // Stop video on mouse leave
  const handleMouseLeave = () => {
    setIsHovering(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  return (
    <section
      className="relative w-full h-[80vh] pt-10 opacity-0 bg-black"
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
        <audio ref={audioRef} src={netflixSound} />

        {!isHovering && (
          <div className="w-[90%] z-10">
            <img height={100} src={rseries} />
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
