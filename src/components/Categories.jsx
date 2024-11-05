import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";
import { nextArrow, previousArrow, redNextArrow } from "../utils";
import { NavLink } from "react-router-dom";
import gsap from "gsap";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { IconButton } from "@mui/material";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";

const Categories = ({ page = "", title, items, link = "" }) => {
  const isProjects = page === "Projects";
  const validLink = link === "" ? false : true;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(4); // Display 4 items at a time

  //need to change itemsPerPage

  const totalItems = items.length;
  // const autoScrollInterval = 3000; // 3 seconds
  const cardRefs = useRef([]);
  const itemsPerTransitions = 1;

  const updateItemsPerPage = () => {
    const width = window.innerWidth;
    if (width < 640) {
      setItemsPerPage(2); // Small screens
    } else if (width >= 640 && width < 1024) {
      setItemsPerPage(3);
    } else {
      setItemsPerPage(4);
    }
  };

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

  useEffect(() => {
    updateItemsPerPage(); // Set initial items per page
    window.addEventListener("resize", updateItemsPerPage); // Listen for window resize
    return () => window.removeEventListener("resize", updateItemsPerPage); // Clean up listener on unmount
  }, []);

  useEffect(() => {
    gsap.fromTo(
      cardRefs.current,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.3,
        stagger: 0.2,
        ease: "power2.out",
      },
    );
  }, [currentIndex]);

  const translateX = -currentIndex * (100 / itemsPerPage); // Calculate the translateX based on the current index and items per page

  // Calculate the items to display
  const visibleItems =
    currentIndex + itemsPerPage > totalItems
      ? [
          ...items.slice(currentIndex, totalItems),
          ...items.slice(0, (currentIndex + itemsPerPage) % totalItems),
        ]
      : items.slice(currentIndex, currentIndex + itemsPerPage);

  useEffect(() => {
    cardRefs.current.forEach((card, index) => {
      if (card) {
        // Add a 'visible' class to animate the card in
        card.classList.add("visible");
      }
    });
  }, [visibleItems]);

  // useEffect(() => {
  //   if (isHovering) return; // Don't scroll if hovering
  //   const intervalId = setInterval(() => {
  //     handleNext(); // Automatically scroll every 3 seconds
  //   }, autoScrollInterval);

  //   return () => clearInterval(intervalId); // Clean up interval on unmount or hover state change
  // }, [isHovering, currentIndex]);

  // Handle card hover
  const handleCardHover = (index) => {
    cardRefs.current[index].classList.add("hovered");
  };

  const handleCardLeave = (index) => {
    cardRefs.current[index].classList.remove("hovered");
  };

  return (
    <div className="flex-center h-[46] screen-max-width">
      <div className="card-container">
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
          className="flex overflow-hidden w-full"
          onMouseEnter={() => setIsHovering(true)}
        >
          {/* <button className="opacity-1 pr-3 left-2 mb-32" onClick={handlePrev}>
            <img src={previousArrow} height={50} width={50} />
          </button> */}
          <IconButton
            className="opacity-1 pr-3 left-2 mb-32"
            onClick={handlePrev}
            size="small"
            sx={{ color: "white" }}
          >
            <NavigateBefore />
          </IconButton>
          <div className="grid grid-cols-4 gap-4 flex-center overflow-auto">
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
              />
            ))}
          </div>
          <IconButton
            className="opacity-1 pl-3 right-0 mb-32"
            onClick={handlePrev}
            size="small"
            sx={{ color: "white" }}
          >
            <NavigateNext />
          </IconButton>
          {/* <button className="opacity-1 pl-3 right-0 mb-32" onClick={handleNext}>
            <img src={nextArrow} height={50} width={50} />
          </button> */}
        </div>
        <div className="flex justify-between items-center w-full relative"></div>
      </div>
    </div>
  );
};

export default Categories;
