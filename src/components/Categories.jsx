import React, { useState } from "react";
import Card from "./Card";

const Categories = ({ title, items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 1; // Display 4 items at a time
  const totalItems = items.length;

  // Move to the next set of items
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage >= totalItems ? 0 : prevIndex + itemsPerPage,
    );
  };

  // Move to the previous set of items
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalItems - itemsPerPage : prevIndex - itemsPerPage,
    );
  };

  // Calculate the items to display
  const visibleItems = items.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <div className="card-container w-full relative">
      <h2 className="text-white font-semibold text-[20px]">{title}</h2>
      <div className="flex overflow-hidden w-full">
        <div className="flex transition-transform duration-500 ease-in-out">
          {visibleItems.map((list) => (
            <div key={list.id} className="p-2">
              <Card
                title={list.title}
                rating={list.rating}
                season={list.season}
                year={list.year}
                caption={list.caption}
                image={list.image}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="controls flex justify-between mt-4">
        <button
          className="text-white bg-gray-800 p-2 rounded hover:bg-gray-700"
          onClick={handlePrev}
        >
          Previous
        </button>
        <button
          className="text-white bg-gray-800 p-2 rounded hover:bg-gray-700"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Categories;
