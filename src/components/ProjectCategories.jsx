import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";
import {
  bruinGramCardImg,
  bruinGramHeroImg,
  bruinGramVid,
  bruingramTitleImg,
  nextArrow,
  plutusLogoImg,
  previousArrow,
  redNextArrow,
  spotifyHeroImg,
  spotifySvg,
  spotifyVideo,
} from "../utils";
import { NavLink } from "react-router-dom";
import gsap from "gsap";
import ProjectCard from "./ProjectCard";
import ProjectDescription from "./ProjectDescription";

const ProjectCategories = ({ page = "", title, items, link = "" }) => {
  const isProjects = page === "Projects";
  const validLink = link === "" ? false : true;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const itemsPerPage = 4; // Display 4 items at a time

  // const autoScrollInterval = 3000; // 3 seconds
  const cardRefs = useRef([]);

  //   // Move to the next set of items
  //   const handleNext = () => {
  //     setCurrentIndex((prevIndex) =>
  //       prevIndex + 1 >= totalItems ? 0 : prevIndex + 1,
  //     );
  //   };
  //   // Move to the previous set of items
  //   const handlePrev = () => {
  //     setCurrentIndex((prevIndex) =>
  //       prevIndex === 0 ? totalItems - 1 : prevIndex - 1,
  //     );
  //   };

  //   useEffect(() => {
  //     gsap.fromTo(
  //       cardRefs.current,
  //       { opacity: 0, x: 50 },
  //       {
  //         opacity: 1,
  //         x: 0,
  //         duration: 0.3,
  //         stagger: 0.2,
  //         ease: "power2.out",
  //       },
  //     );
  //   }, [currentIndex]);

  //   const translateX = -currentIndex * (100 / itemsPerPage); // Calculate the translateX based on the current index and items per page

  //   // Calculate the items to display
  //   const visibleItems =
  //     currentIndex + itemsPerPage > totalItems
  //       ? [
  //           ...items.slice(currentIndex, totalItems),
  //           ...items.slice(0, (currentIndex + itemsPerPage) % totalItems),
  //         ]
  //       : items.slice(currentIndex, currentIndex + itemsPerPage);

  //   const handleCardHover = (index) => {
  //     cardRefs.current[index].classList.add("hovered");
  //   };

  //   const handleCardLeave = (index) => {
  //     cardRefs.current[index].classList.remove("hovered");
  //   };

  return (
    <div className="flex-center h-[46] screen-max-width ">
      <div className="card-container relative">
        {validLink ? (
          <NavLink className="nav-link" to={link}>
            Hello
            <img
              src={redNextArrow}
              className="arrow"
              width={15}
              height={15}
              alt="red arrow"
            />
          </NavLink>
        ) : (
          <h2 className="text-white font-semibold text-[25px] hover:text-red-600 pl-6">
            Projects
          </h2>
        )}
        <div
          className="flex overflow-visible w-full"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <button className="pr-3 left-0 opacity-0 cursor-default">
            <img src={previousArrow} height={15} width={15} />
          </button>
          <div className="grid grid-cols-4 gap-4">
            {/* <ProjectModal>
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
            </ProjectModal>
            <ProjectModal>
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
            </ProjectModal> */}
            <ProjectCard
              title="Spotify Wrapped"
              rating="100%"
              season="2024"
              caption="Shareholder Reports for a Gen-Z Audience"
              image={spotifyHeroImg}
              year="2024"
            >
              <ProjectDescription
                title="Wrapped"
                titleImg={spotifySvg}
                heroImg={spotifyHeroImg}
                subtitle="Bruingram"
                titleImgWidth="300px"
                titleImgHeight="70px"
                genre="2024 | Design + Web Dev"
                paragraphs={[
                  " Spotify has changed the streaming platform in the last decade, combining ways for people to connect with music with their friend feature, public profiles, shareable playlists, Jams, and, most famously, their Wrapped.",
                  "At the end of the year, Spotify Wrapped gifts users a summary of their listening history in the last year, where they are able to reflect on their last year through the music they listened to.",
                  "Taking inspiration from this, I thought that it would be cool to display Spotify’s shareholder’s report in their iconic “Spotify Wrapped” format.",
                ]}
                technologies="React, GSAP, Figma, Slider"
                isDirectors={false}
                heroVideo={spotifyVideo}
              />
            </ProjectCard>

            <ProjectCard
              title="Plutus Banking App"
              rating="50%"
              season="2024"
              caption="Banking Made Easy"
              image={bruinGramCardImg}
              year="2024"
            >
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
            </ProjectCard>

            <ProjectCard
              title="Bruingram"
              rating="50%"
              season="2023 | 3 episodes"
              caption="a fun take on a UCLA-centered social media app"
              image={bruinGramCardImg}
              year="2024"
            >
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
            </ProjectCard>

            <ProjectCard
              title="Bruingram"
              rating="50%"
              season="2023 | 3 episodes"
              caption="a fun take on a UCLA-centered social media app"
              image={bruinGramCardImg}
              year="2024"
            >
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
            </ProjectCard>
            <ProjectCard
              title="Bruingram"
              rating="50%"
              season="2023 | 3 episodes"
              caption="a fun take on a UCLA-centered social media app"
              image={bruinGramCardImg}
              year="2024"
            >
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
            </ProjectCard>
            {/*                 
            {visibleItems.map((list, index) => (
              <ProjectCard
                key={list.id}
                ref={(el) => (cardRefs.current[index] = el)}
                title={list.title}
                rating={list.rating}
                season={list.season}
                year={list.year}
                caption={list.caption}
                image={list.image}
                projectDescription={}
                onMouseEnter={() => handleCardHover(index)}
                onMouseLeave={() => handleCardLeave(index)}
              />
            ))} */}
          </div>
          <button className="pl-3 opacity-0 cursor-default">
            <img src={nextArrow} height={15} width={15} />
          </button>
        </div>
        {/* Controls */}
        <div className="flex justify-between items-center w-full relative"></div>
      </div>
    </div>
  );
};

export default ProjectCategories;

// import React from "react";

// const Categories = ({ page = "", title, items, link = "" }) => {
//   const isProjects = page === "Projects";
//   const validLink = link === "" ? false : true;
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isHovering, setIsHovering] = useState(false);
//   const itemsPerPage = 4; // Display 4 items at a time
//   const totalItems = items.length;
//   // const autoScrollInterval = 3000; // 3 seconds
//   const cardRefs = useRef([]);
//   const itemsPerTransitions = 1;

//   // Move to the next set of items
//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex + 1 >= totalItems ? 0 : prevIndex + 1,
//     );
//   };
//   // Move to the previous set of items
//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? totalItems - 1 : prevIndex - 1,
//     );
//   };

//   useEffect(() => {
//     gsap.fromTo(
//       cardRefs.current,
//       { opacity: 0, x: 50 },
//       {
//         opacity: 1,
//         x: 0,
//         duration: 0.3,
//         stagger: 0.2,
//         ease: "power2.out",
//       },
//     );
//   }, [currentIndex]);

//   const translateX = -currentIndex * (100 / itemsPerPage); // Calculate the translateX based on the current index and items per page

//   // Calculate the items to display
//   const visibleItems =
//     currentIndex + itemsPerPage > totalItems
//       ? [
//           ...items.slice(currentIndex, totalItems),
//           ...items.slice(0, (currentIndex + itemsPerPage) % totalItems),
//         ]
//       : items.slice(currentIndex, currentIndex + itemsPerPage);

//   // useEffect(() => {
//   //   cardRefs.current.forEach((card, index) => {
//   //     if (card) {
//   //       // Add a 'visible' class to animate the card in
//   //       card.classList.add("visible");
//   //     }
//   //   });
//   // }, [visibleItems]);

//   // useEffect(() => {
//   //   if (isHovering) return; // Don't scroll if hovering
//   //   const intervalId = setInterval(() => {
//   //     handleNext(); // Automatically scroll every 3 seconds
//   //   }, autoScrollInterval);

//   //   return () => clearInterval(intervalId); // Clean up interval on unmount or hover state change
//   // }, [isHovering, currentIndex]);

//   // Handle card hover
//   const handleCardHover = (index) => {
//     cardRefs.current[index].classList.add("hovered");
//   };

//   const handleCardLeave = (index) => {
//     cardRefs.current[index].classList.remove("hovered");
//   };

//   return (
//     <div className="flex-center h-[46] screen-max-width ">
//       <div className="card-container relative">
//         {validLink ? (
//           <NavLink className="nav-link" to={link}>
//             {title}
//             <img
//               src={redNextArrow}
//               className="arrow"
//               width={15}
//               height={15}
//               alt="red arrow"
//             />
//           </NavLink>
//         ) : (
//           <h2 className="text-white font-semibold text-[25px] hover:text-red-600 pl-6">
//             {title}
//           </h2>
//         )}
//         <div
//           className="flex overflow-visible w-full"
//           onMouseEnter={() => setIsHovering(true)}
//           onMouseLeave={() => setIsHovering(false)}
//         >
//           <button className="opacity-1 pr-3 left-0" onClick={handlePrev}>
//             <img src={previousArrow} height={15} width={15} />
//           </button>
//           <div className="grid grid-cols-4 gap-4 overflow-auto">
//             <Card
//               key={list.id}
//               ref={(el) => (cardRefs.current[index] = el)}
//               title={list.title}
//               rating={list.rating}
//               season={list.season}
//               year={list.year}
//               caption={list.caption}
//               image={list.image}
//               onMouseEnter={() => handleCardHover(index)}
//               onMouseLeave={() => handleCardLeave(index)}
//             />
//           </div>
//           <button className="opacity-1 pl-3 right-0" onClick={handleNext}>
//             <img src={nextArrow} height={15} width={15} />
//           </button>
//         </div>
//         {/* Controls */}
//         <div className="flex justify-between items-center w-full relative"></div>
//       </div>
//     </div>
//   );
// };

// export default Categories;

// import React, { useEffect, useRef, useState } from "react";
// import Card from "./Card";
// import { nextArrow, previousArrow, redNextArrow } from "../utils";
// import { NavLink } from "react-router-dom";

// const Categories = ({ title, items, link = "" }) => {
//   const validLink = link === "" ? false : true;
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isHovering, setIsHovering] = useState(false);
//   const itemsPerPage = 4; // Display 4 items at a time
//   const totalItems = items.length;
//   const autoScrollInterval = 3000; // 3 seconds
//   const cardRefs = useRef([]);

//   // Move to the next set of items
//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex + 1 >= totalItems ? 0 : prevIndex + 1,
//     );
//   };

//   // Move to the previous set of items
//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? totalItems - 1 : prevIndex - 1,
//     );
//   };

//   // Calculate the items to display
//   const visibleItems =
//     currentIndex + itemsPerPage > totalItems
//       ? [
//           ...items.slice(currentIndex, totalItems),
//           ...items.slice(0, (currentIndex + itemsPerPage) % totalItems),
//         ]
//       : items.slice(currentIndex, currentIndex + itemsPerPage);

//   useEffect(() => {
//     if (isHovering) return; // Do not auto-scroll if hovering

//     // Set up an interval to automatically move to the next set of items
//     const intervalId = setInterval(() => {
//       handleNext();
//     }, autoScrollInterval);

//     // Clean up the interval on component unmount or hover state change
//     return () => clearInterval(intervalId);
//   }, [currentIndex, isHovering]);

//   // Handle card hover
//   const handleCardHover = (index) => {
//     cardRefs.current[index].classList.add("hovered");
//   };

//   const handleCardLeave = (index) => {
//     cardRefs.current[index].classList.remove("hovered");
//   };

//   return (
//     <div className="flex-center h-[46] screen-max-width">
//       <div className="card-container w-full relative">
//         {validLink ? (
//           <NavLink className="nav-link" to={link}>
//             {title}
//             <img
//               src={redNextArrow}
//               className="arrow"
//               width={15}
//               height={15}
//               alt="red arrow"
//             />
//           </NavLink>
//         ) : (
//           <h2 className="text-white font-semibold text-[20px] hover:text-red-600">
//             {title}
//           </h2>
//         )}
//         <div
//           className="flex overflow-hidden w-full"
//           onMouseEnter={() => setIsHovering(true)}
//           onMouseLeave={() => setIsHovering(false)}
//         >
//           <div className="grid grid-cols-4 gap-4">
//             {visibleItems.map((list, index) => (
//               <Card
//                 key={list.id}
//                 ref={(el) => (cardRefs.current[index] = el)}
//                 title={list.title}
//                 rating={list.rating}
//                 season={list.season}
//                 year={list.year}
//                 caption={list.caption}
//                 image={list.image}
//                 onMouseEnter={() => handleCardHover(index)}
//                 onMouseLeave={() => handleCardLeave(index)}
//               />
//             ))}
//           </div>
//         </div>
//         {/* Controls */}
//         <div className="flex justify-between items-center w-full relative">
//           <button
//             className="text-white bg-gray-800 p-2 rounded hover:bg-gray-700"
//             onClick={handlePrev}
//           >
//             <img src={previousArrow} height={25} width={25} />
//           </button>
//           <button
//             className="text-white bg-gray-800 p-2 rounded hover:bg-gray-700"
//             onClick={handleNext}
//           >
//             <img src={nextArrow} height={25} width={25} />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Categories;
