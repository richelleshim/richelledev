import React, { useRef, useState } from "react";
import { githubIcon, hoverIcon, rProductionImg } from "../utils";

const ProjectDescription = ({
  title,
  titleImg,
  heroImg,
  titleImgHeight,
  titleImgWidth,
  subtitle,
  genre,
  paragraphs,
  technologies,
  heroVideo,
  additionalAddOns,
  isDirectors,
  directors,
}) => {
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
    <>
      <section className="relative h-screen w-full bg-black flex">
        <div className=" right-0 h-auto w-full flex">
          <div className="w-1/2 p-10 text-white overflow-hidden flex flex-col justify-center space-y-6 z-10">
            <img height={50} width={250} src={rProductionImg} />
            <div className="text-5xl flex font-extrabold gap-2">
              <img
                src={titleImg}
                width={titleImgWidth}
                height={titleImgWidth}
              />
              {title}
            </div>
            <div className="text-xl sm:text-3xl font-bold">{subtitle}</div>
            <div className="text-med font-bold">{genre}</div>
            {paragraphs.map((paragraph) => (
              <p className="text-sm sm:text-sm">{paragraph}</p>
            ))}
            <div className="flex-col">
              <p className="text-sm flex gap-1">
                <div className="text-med font-bold">Starring:</div>
                {technologies}
              </p>
              {isDirectors && (
                <p className="text-sm flex gap-1">
                  <div className="text-med font-bold">Directors:</div>
                  {directors}
                </p>
              )}
            </div>

            <div className=" flex align-left grid-cols-4 gap-4">
              <button className="hover-button text-sm text-black rounded">
                <div className="flex-center font-semibold gap-2">
                  <img src={hoverIcon} width={20} height={20} />
                  HOVER
                </div>
              </button>
              <button className="github-button  text-white px-4 py-2 rounded">
                <div className="flex-center text-med  gap-2 font-semibold">
                  <img src={githubIcon} width={40} height={40} />
                  src
                </div>
              </button>
            </div>
          </div>
          {/* Right side: Image */}
          <div
            className="relative w-[75%] "
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Overlay gradient */}
            <div className="absolute w-full h-full bg-gradient-to-l from-transparent to-black z-10 "></div>

            {!isHovering && (
              <img
                src={heroImg}
                alt="Richelle"
                className="w-full h-full object-cover"
              />
            )}

            {isHovering && (
              <video
                className="w-full h-full object-cover z-11"
                autoPlay
                playsInline
                loop
              >
                <source src={heroVideo} type="video/mp4" />
              </video>
            )}
          </div>
        </div>
      </section>
      <div className="relative h-screen w-full bg-black flex">
        {additionalAddOns}
        {/* <p className="text-lg sm:text-xl text-white">
          Spotify has changed the streaming landscape in the last decade,
          combining playlists, social systems, and artist-focused features in a
          unique way...
        </p> */}
      </div>
    </>
  );
};

export default ProjectDescription;
