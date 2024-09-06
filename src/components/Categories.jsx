import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { nextArrow, previousArrow, redNextArrow } from "../utils";
import { NavLink } from "react-router-dom";

const Categories = ({ title, items, link = "" }) => {
  const validLink = link === "" ? false : true;
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4; // Display 4 items at a time
  const totalItems = items.length;

  // Move to the next set of items
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= totalItems ? 0 : prevIndex + 1,
    );
  };

  // Move to the previous set of items
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalItems : prevIndex - 1,
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

  return (
    <div className="flex-center h-[46] screen-max-width">
      <div className="card-container w-full relative">
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
          <h2 className="text-white font-semibold text-[20px] hover:text-red-600">
            {title}
          </h2>
        )}
        <div className="flex overflow-hidden w-full">
          <div className="grid grid-cols-4 gap-4">
            {visibleItems.map((list) => (
              <Card
                key={list.id}
                title={list.title}
                rating={list.rating}
                season={list.season}
                year={list.year}
                caption={list.caption}
                image={list.image}
              />
            ))}
          </div>
        </div>
        {/* Controls */}
        <div className="flex justify-between items-center w-full relative">
          <button
            className="text-white bg-gray-800 p-2 rounded hover:bg-gray-700 "
            onClick={handlePrev}
          >
            <img src={previousArrow} height={25} width={25} />
          </button>
          <button
            className="text-white bg-gray-800 p-2 rounded hover:bg-gray-700"
            onClick={handleNext}
          >
            <img src={nextArrow} height={25} width={25} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
