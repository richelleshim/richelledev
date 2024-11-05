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
  fullVideo = true,
  githubLink,
}) => {
  const videoRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [showFullVideo, setShowFullVideo] = useState(false); // State for showing full video

  // Play video on hover
  const handleMouseEnter = () => {
    if (!showFullVideo) {
      setIsHovering(true);
      if (videoRef.current) {
        videoRef.current.play();
      }
    }
  };

  // Stop video on mouse leave
  const handleMouseLeave = () => {
    if (!showFullVideo) {
      setIsHovering(false);
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0; // Reset video to start
      }
    }
  };

  // Toggle full video mode when the hover button is clicked
  const handleHoverButtonClick = () => {
    if (fullVideo) {
      setShowFullVideo(true);
    }
  };

  // Go back to regular layout when the Go Back button is clicked
  const handleGoBackClick = () => {
    setShowFullVideo(false);
    videoRef.current.currentTime = 0;
  };

  return (
    <>
      <section className="relative w-full bg-black flex">
        <div className="right-0 h-auto w-full flex">
          {showFullVideo ? (
            <>
              <video
                className="w-full h-[85vh] object-cover z-30"
                autoPlay
                playsInline
                loop
                muted={true}
              >
                <source src={heroVideo} type="video/mp4" />
              </video>
              <button
                className="absolute bottom-10 left-10 bg-white text-black px-4 py-2 rounded font-semibold z-40"
                onClick={handleGoBackClick} // Click handler for Go Back button
              >
                Go Back
              </button>
            </>
          ) : (
            <>
              <div className="w-1/2 p-10 text-white overflow-hidden flex flex-col  justify-center space-y-6 z-10">
                <div className="pl-0 relative">
                  <img height={50} width={250} src={rProductionImg} />
                  <div className="text-5xl flex font-extrabold gap-2">
                    <img
                      src={titleImg}
                      width={titleImgWidth}
                      height={titleImgWidth}
                    />
                    {title}
                  </div>
                </div>
                <div className="text-xl sm:text-3xl font-bold">{subtitle}</div>
                <div className="text-med font-bold">{genre}</div>
                {paragraphs.map((paragraph) => (
                  <p className="text-sm sm:text-sm" key={paragraph}>
                    {paragraph}
                  </p>
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

                <div className="flex align-left grid-cols-4 gap-4">
                  <button
                    className="hover-button text-sm text-black rounded items-center"
                    onClick={handleHoverButtonClick} // Click handler for hover button
                  >
                    <div className="flex-center font-semibold gap-2">
                      <img src={hoverIcon} width={20} height={20} />
                      {fullVideo ? "PLAY" : "HOVER"}
                    </div>
                  </button>
                  <button
                    onClick={() => window.open(githubLink, "_blank")} // Open link in new tab
                    className="github-button text-white px-4 py-2 rounded flex-center"
                  >
                    <div className="flex-center text-med gap-2 font-semibold">
                      <img
                        src={githubIcon}
                        width={40}
                        height={40}
                        alt="GitHub Icon"
                      />
                      src
                    </div>
                  </button>
                </div>
              </div>

              <div
                className=" w-[75%] h-full"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {!isHovering && (
                  <div className="absolute w-full h-full bg-gradient-to-l from-transparent to-black z-10"></div>
                )}

                {isHovering && (
                  <div className="absolute w-full h-full bg-gradient-to-l from-transparent opacity-90 to-black z-10"></div>
                )}

                {!isHovering && (
                  <img
                    src={heroImg}
                    alt="Richelle"
                    className="w-full  h-[80vh] object-cover align-content-center"
                  />
                )}

                {isHovering && (
                  <video
                    className="w-full h-[80vh] object-cover z-30 align-content-center"
                    autoPlay
                    playsInline
                    loop
                    muted={true}
                  >
                    <source src={heroVideo} type="video/mp4" />
                  </video>
                )}
              </div>
            </>
          )}

          {/* Right side: Image or Full Video */}
        </div>
      </section>

      {/* If additionalAddOns is not hidden by the video, render it */}
      {!showFullVideo && (
        <div className="relative h-screen w-full bg-black flex">
          {additionalAddOns}
        </div>
      )}
    </>
  );
};

export default ProjectDescription;
