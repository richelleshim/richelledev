import React, { useRef, useEffect, useState } from "react";
import { heroImg, novaImg, novaVideo, rseries } from "../utils";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

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
    <section className="relative w-full h-[68vh] opacity-0 bg-black" id="hero">
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

// import React, { useRef, useEffect, useState } from "react";
// import { heroImg, novaImg, rseries, novaVideo } from "../utils";
// import RSeries from "./RSeries";
// import Card from "./Card";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";

// const Hero = () => {
//   useGSAP(() => {
//     gsap.to("#hero", { opacity: 1, delay: 2 });
//   }, []);
//   const videoRef = useRef(null);
//   const [isHovering, setIsHovering] = useState(false);
//   const [isPlaying, setIsPlaying] = useState(false);

//   // Play video on hover
//   const handleMouseEnter = () => {
//     setIsHovering(true);
//     setIsPlaying(true);
//     if (videoRef.current) {
//       videoRef.current.play();
//     }
//   };

//   // Stop video on hover out
//   const handleMouseLeave = () => {
//     setIsHovering(false);
//     setIsPlaying(false);
//     if (videoRef.current) {
//       videoRef.current.pause();
//       videoRef.current.currentTime = 0; // Reset video to start
//     }
//   };

//   return (
//     <section className="w-full bg-black relative">
//       <div className="h-screen w-full flex-center flex-col" id="hero">
//         <div
//           className="relative bg-cover bg-center text-white py-20 px-10 cursor-pointer"
//           style={{
//             backgroundImage: isHovering ? "none" : `url(${novaImg})`, // Display image when not hovering
//             width: "90vw", // Full width of viewport
//             height: "100vh", // Full height of viewport
//           }}
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//         >
//           <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
//           {/* Dark overlay */}
//           <div className="relative z-10 w-full h-full flex items-center justify-center">
//             {/* Video element */}
//             {isPlaying && (
//               <video
//                 className="absolute w-full h-full object-cover"
//                 autoPlay
//                 muted
//                 loop
//                 ref={videoRef}
//               >
//                 <source src={novaVideo} type="video/mp4" />
//               </video>
//             )}

//             <div className="relative z-20 flex-col">
//               <h1 className="text-white text-6xl font-bold">
//                 Richelle Haein Shim
//               </h1>
//               <p className="text-gray-50 font-semibold text-2xl mt-2">
//                 Welcome to my website!
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

// // import React, { useRef, useEffect, useState } from "react";
// // import { heroImg, novaImg, rseries, novaVideo } from "../utils";
// // import RSeries from "./RSeries";
// // import Card from "./Card";
// // import { useGSAP } from "@gsap/react";
// // import gsap from "gsap";

// // const Hero = () => {
// //   useGSAP(() => {
// //     gsap.to("#hero", { opacity: 1, delay: 2 });
// //   }, []);

// //   const videoRef = useRef(null);
// //   const imageRef = useRef(null);
// //   const [isPlaying, setIsPlaying] = useState(true);

// //   useEffect(() => {
// //     const video = videoRef.current;
// //     const image = imageRef.current;
// //     if (video) {
// //       video.addEventListener("ended", () => {
// //         setIsPlaying(false);
// //       });
// //     }
// //   }, []);

// //   const videoSrc = novaVideo;

// //   return (
// //     <section className="w-full bg-black relative">
// //       <div className="h-5/6 w-full flex-center flex-col opacity-0" id="hero">
// //         <div
// //           className="relative bg-cover bg-center text-white py-20 px-10"
// //           style={{
// //             backgroundImage: `url(${novaImg})`,
// //           }}
// //         >
// //           <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
// //           {/* Dark overlay */}
// //           <div className="relative z-5 h-[750px]">
// //             <div className="w-full">
// //               <video
// //                 height={50}
// //                 autoPlay
// //                 muted
// //                 playsInline={true}
// //                 ref={videoRef}
// //               >
// //                 <source src={videoSrc} type="video/mp4" />
// //               </video>

// //               <h1 className="text-white text-6xl font-bold">
// //                 Richelle Haein Shim
// //               </h1>
// //             </div>
// //             <div className="w-[75%]">
// //               <p className="text-gray-50 font-semiboldbold text-2xl mt-2">
// //                 Welcome to my website!
// //               </p>
// //             </div>
// //           </div>
// //         </div>

// //         {/* <div className="md:w-10/12 w-9/12">
// //           <img src={heroImg} alt="hero" className="pointer-events-none" /> */}
// //         {/* <video
// //             className="pointer-events-none"
// //             autoPlay
// //             muted
// //             playsInline={true}
// //             key={videoSrc}
// //           >
// //             <source src={videoSrc} type="video/mp4" />
// //           </video> */}

// //         {/* </div> */}
// //       </div>
// //     </section>
// //   );
// // };

// // export default Hero;
