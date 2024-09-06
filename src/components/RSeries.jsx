import React from "react";
import { rseries } from "../utils";

const RSeries = ({ seriesTitle, subtitle, backgroundImage }) => {
  return (
    <div
      className="relative bg-cover bg-center text-white py-20 px-10"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        height: "500px", // Set this to whatever height fits your design
      }}
    >
      <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
      {/* Dark overlay */}
      <div className="relative z-5">
        <div className="p-1">
          <img height={50} width={1000} src={rseries} />
          <h1 className="text-white text-6xl font-bold">{seriesTitle}</h1>
        </div>
        <div className="w-[75%]">
          <p className="text-gray-50 text-lg mt-2">{subtitle}</p>
        </div>
        {/* <button
          // onClick={onPlay}
          className="mt-8 bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded-full text-xl"
        >
          Play
        </button> */}
      </div>
    </div>
  );
};

export default RSeries;
