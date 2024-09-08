import React, { useRef, useState } from "react";
import {
  bruinGramHeroImg,
  bruinGramVid,
  bruinLogoImg,
  bruingramTitleImg,
  githubIcon,
  hoverIcon,
  plutusLogoImg,
  rProductionImg,
  spotifyHeroImg,
  spotifySvg,
  spotifyVideo,
} from "../utils";
import ProjectDescription from "./ProjectDescription";

const ProjectShowcase = () => {
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
        <div className="w-1/2 p-10 text-white overflow-hidden flex flex-col justify-center space-y-6 z-10">
          <img height={50} width={250} src={rProductionImg} />
          <div className="text-5xl flex font-extrabold gap-2">
            <img src={spotifySvg} width={50} height={50} />
            Wrapped
          </div>

          <div className="text-xl sm:text-3xl font-bold">
            Shareholder's Report
          </div>
          <div className="text-med font-bold">2024 | Design + Web Dev</div>
          <p className="text-sm sm:text-sm">
            Spotify has changed the streaming platform in the last decade,
            combining ways for people to connect with music with their friend
            feature, public profiles, shareable playlists, Jams, and, most
            famously, their Wrapped.
          </p>
          <p className="text-sm sm:text-sm">
            At the end of the year, Spotify Wrapped gifts users a summary of
            their listening history in the last year, where they are able to
            reflect on their last year through the music they listened to.
          </p>
          <p className="text-sm sm:text-sm">
            Taking inspiration from this, I thought that it would be cool to
            display Spotify’s shareholder’s report in their iconic “Spotify
            Wrapped” format.
          </p>

          <p className="text-sm flex gap-1">
            <div className="text-med font-bold">Starring:</div>React, GSAP,
            Figma, Slider
          </p>

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
          className="relative w-1/2 "
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Overlay gradient */}
          <div className="absolute w-[75%] h-full bg-gradient-to-l from-transparent to-black z-10"></div>
          {!isHovering && (
            <img
              src={spotifyHeroImg}
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
              <source src={spotifyVideo} type="video/mp4" />
            </video>
          )}
        </div>
      </section>
      <div className="relative h-screen w-full bg-black flex">
        <p className="text-lg sm:text-xl text-white">
          Spotify has changed the streaming landscape in the last decade,
          combining playlists, social systems, and artist-focused features in a
          unique way...
        </p>
      </div>
      <ProjectDescription
        title=""
        titleImg={plutusLogoImg}
        heroImg={spotifyHeroImg}
        subtitle="Plutus"
        titleImgWidth="300px"
        titleImgHeight="70px"
        genre="2024 | Design + Web Dev"
        paragraphs={[
          "Plutus is a banking application that allows users to create their own account, connect their bank using Plaid, and transfer payments to other users. The home interface displays transactions, their current balance, and their bank accounts.",
        ]}
        technologies="Appwrite, Sentry, Plaid, Figma, Nextjs"
        isDirectors={false}
        heroVideo={spotifyVideo}
      />

      <ProjectDescription
        title=""
        titleImg={bruingramTitleImg}
        heroImg={bruinGramHeroImg}
        subtitle="Bruingram"
        titleImgWidth="300px"
        titleImgHeight="70px"
        genre="2024 | Design + Web Dev"
        paragraphs={[
          "Working in a team of 6, we created an application with the inspiration of Hinge, Instagram, and Facebook. We thought that it would be cool to create a social media application specific for Bruins, where users could filter out other users based on Major and Year to make friends, seek out career advice, and find roommates!        ",
        ]}
        technologies="React, MaterialUI, Firebase, Git"
        directors="Elizabeth, Yousra, Chai, Jennifer, Daniel, Richelle"
        isDirectors={true}
        heroVideo={bruinGramVid}
      />
    </>
  );
};

export default ProjectShowcase;

// import React, { useRef, useState } from "react";
// import { aboutMeVideo, heroImg, rseries } from "../utils";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";

// const ProjectShowcase = () => {
//   useGSAP(() => {
//     gsap.to("#intro", { opacity: 1, delay: 1 });
//   }, []);

//   const videoRef = useRef(null);
//   const [isHovering, setIsHovering] = useState(false);

//   // Play video on hover
//   const handleMouseEnter = () => {
//     setIsHovering(true);
//     if (videoRef.current) {
//       videoRef.current.play();
//     }
//   };

//   // Stop video on mouse leave
//   const handleMouseLeave = () => {
//     setIsHovering(false);
//     if (videoRef.current) {
//       videoRef.current.pause();
//       videoRef.current.currentTime = 0; // Reset video to start
//     }
//   };

//   return (

//     <section className="relative w-full h-[68vh] opacity-0 bg-black" id="intro">
//       <div className="fade-container">
//         <div
//           className="absolute w-full   h-full flex-center inset-0 bg-gray-900 bg-opacity-50"
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//           style={{
//             backgroundImage: `url(${heroImg})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             backgroundColor: "bg-gray-900 bg-opacity-50",
//           }}
//         >
//           {!isHovering && (
//             <div className="w-[90%] z-10">
//               {/* <img height={100} width={800} src={rseries} /> */}

//               <h1 className="text-white text-6xl font-bold  ">Hello</h1>
//               <p className="text-gray-50 text-lg mt-2 w-[75%]">hello</p>
//             </div>
//           )}
//         </div>
//         <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
//         {/* {isHovering && (
//           <video
//             className="absolute inset-0 w-full h-full object-cover flex"
//             autoPlay
//             playsInline
//             loop
//           >
//             <source src={aboutMeVideo} type="video/mp4" />
//           </video>
//         )} */}
//       </div>
//     </section>
//   );
// };

// export default ProjectShowcase;
