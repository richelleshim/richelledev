import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";
import { nextArrow, previousArrow, redNextArrow } from "../utils";
import { NavLink } from "react-router-dom";
import gsap from "gsap";

const Categories = ({ title, items, link = "" }) => {
  const validLink = link === "" ? false : true;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const itemsPerPage = 4; // Display 4 items at a time
  const totalItems = items.length;
  // const autoScrollInterval = 3000; // 3 seconds
  const cardRefs = useRef([]);

  // Move to the next set of items
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= totalItems ? 0 : prevIndex + 1,
    );
  };

  // Move to the previous set of items
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalItems - 1 : prevIndex - 1,
    );
  };

  // Calculate the items to display
  const visibleItems =
    currentIndex + itemsPerPage > totalItems
      ? [
          ...items.slice(currentIndex, totalItems),
          ...items.slice(0, (currentIndex + itemsPerPage) % totalItems),
        ]
      : items.slice(currentIndex, currentIndex + itemsPerPage);

  useEffect(() => {
    gsap.to("#card", { opacity: 1, delay: 1 });
  }, [visibleItems]);

  // useEffect(() => {
  //   if (isHovering) return; // Do not auto-scroll if hovering

  //   // Set up an interval to automatically move to the next set of items
  //   const intervalId = setInterval(() => {
  //     handleNext();
  //   }, autoScrollInterval);

  //   // Clean up the interval on component unmount or hover state change
  //   return () => clearInterval(intervalId);
  // }, [currentIndex, isHovering]);

  // Handle card hover
  const handleCardHover = (index) => {
    cardRefs.current[index].classList.add("hovered");
  };

  const handleCardLeave = (index) => {
    cardRefs.current[index].classList.remove("hovered");
  };

  return (
    <div className="flex-center h-[46] screen-max-width">
      <div className="card-container relative">
        {validLink ? (
          <NavLink className="nav-link" to={link}>
            {title}
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
            {title}
          </h2>
        )}
        <div
          className="flex overflow-hidden  w-full"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <button className="opacity-1 pr-3 left-0" onClick={handlePrev}>
            <img src={previousArrow} height={15} width={15} />
          </button>
          <div className="grid grid-cols-4 gap-4 opacity-0" id="card">
            {visibleItems.map((list, index) => (
              <Card
                key={list.id}
                ref={(el) => (cardRefs.current[index] = el)}
                title={list.title}
                rating={list.rating}
                season={list.season}
                year={list.year}
                caption={list.caption}
                image={list.image}
                onMouseEnter={() => handleCardHover(index)}
                onMouseLeave={() => handleCardLeave(index)}
              />
            ))}
          </div>
          <button className="opacity-1 pl-3 right-0" onClick={handleNext}>
            <img src={nextArrow} height={15} width={15} />
          </button>
        </div>
        {/* Controls */}
        <div className="flex justify-between items-center w-full relative"></div>
      </div>
    </div>
  );
};

export default Categories;

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
