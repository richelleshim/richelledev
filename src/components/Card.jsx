import React, { forwardRef, useState } from "react";

const Card = forwardRef(
  ({ title, rating, season, caption, image, year }, ref) => {
    const [isHovered, setIsHovered] = useState(false); // Hover state
    const [hasBeenHovered, setHasBeenHovered] = useState(false); // New state to track if hovered at least once
    const seasonExists = year !== "Coming Soon"; // Season existence check

    const handleMouseEnter = () => {
      setIsHovered(true);
      setHasBeenHovered(true); // Set to true when hovered at least once
    };

    const handleMouseLeave = () => {
      setIsHovered(false); // Reset isHovered on mouse leave
    };

    return (
      <div
        className="card"
        ref={ref}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="card-wrap" ref={ref}>
          <div>
            <div className="w-full relative h-48">
              <img
                src={image}
                alt={title}
                className="h-48 w-full object-cover"
              />
            </div>
          </div>
          <div className="p-1 pl-2">
            <div className="text-white font-semibold text-md">{title}</div>
            <div className="flex gap-1">
              <div className="text-green-500 font-bold text-sm">
                {rating} {" Match"}
              </div>
              <div className="text-gray-200 font-semibold text-sm">
                {year}{" "}
                {seasonExists && (
                  <>
                    {" | "} {season}
                  </>
                )}
              </div>
            </div>
            <p
              className={`h-48 object-cover caption text-gray-200 text-xs ${
                (isHovered || hasBeenHovered) ? 'opacity-1' : 'opacity-0'
              } transition-opacity duration-500`}
            >
              {caption}
            </p>
          </div>
        </div>
      </div>
    );
  }
);

export default Card;
