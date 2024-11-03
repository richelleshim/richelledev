import React, { useRef, useState } from "react";
import { novaImg, novaVideo, rseries } from "../utils";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import DescriptionModal from "./DescriptionModal";

const Hero = () => {
  const videoRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  useGSAP(() => {
    gsap.to("#hero", { opacity: 1, delay: 1 });
  }, []);

  const handleMouseEnter = () => {
    setIsHovering(true);
    if (videoRef.current) {
      gsap.to(videoRef.current, { opacity: 1, duration: 1.5 });
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
      className="relative w-[90vw] h-[75vh] opacity-0 bg-black"
      id="hero"
    >
      <div
        className=" absolute w-full h-full flex-center inset-0 bg-gray-900 bg-opacity-50"
        // onMouseEnter={handleMouseEnter}
        // onMouseLeave={handleMouseLeave}
        style={{
          backgroundImage: `url(${novaImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "bg-gray-900 bg-opacity-50",
        }}
      >
        {!isHovering && (
          <div className="w-[90%] z-10">
            <img height={100} width={800} src={rseries} />
            <h1 className="text-white text-6xl font-bold">
              Richelle Haein Shim
            </h1>
            <p className="text-2xl mt-2 text-white">Welcome to my website!</p>
            <p className="text-sm mt-2 text-white">
              (hover to the right to play!)
            </p>

            <DescriptionModal
              title="Hello!"
              heroImg={novaImg}
              subtitle="It's Richelle!"
              genre="2024"
              paragraphs={[
                "Welcome to my personal website! I'm Richelle, a Math student at UCLA. Like this website, I'm also a work-in-progress, so I hope that everytime you come back to this site, I'll be able to show you a better version of myself!",
                "After high school, I felt that I didn't really know much about myself. I didn't know what I liked, what I disliked, who I wanted to be, the meaning of life, what I believed in, blah blah blah... all that stuff. These last couple years have been a bit of an identity journey, but I think I know myself a bit better now. :)",
                "Hopefully this website spares you the 2 years it's taken me to know myself better, so take around my website! Lovely to meet you!",
                "\u{1F48C} Richelle \u{1F48C}",
              ]}
            />
          </div>
        )}
        <div
          className="w-1/2 h-full absolute right-0 z-40"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        ></div>{" "}
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
