import React from "react";

const Card = ({ title, rating, season, caption, image, year }) => {
  return (
    <div className="bg-black flex-col text-white overflow-hidden shadow-lg w-64">
      <div>
        <img src={image} alt={title} className="w-full h-40 object-cover" />
      </div>

      <div className="p-1">
        <div className="text-white font-semibold text-md">{title}</div>
        <div className="flex gap-1">
          <div className="text-green-500 font-bold text-sm">
            {rating}
            {" Match"}
          </div>

          <div className="text-gray-200  font-semibold text-sm ">
            {year}
            {" | "}
            {season}
          </div>
        </div>
        <p className="text-gray-200 text-xs mt-2">{caption}</p>
      </div>
    </div>
  );
};

export default Card;
