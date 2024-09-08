import React, { forwardRef } from "react";

const Card = forwardRef(
  ({ title, rating, season, caption, image, year }, ref) => {
    const seasonExists = year !== "Coming Soon"; // Simplified season existence check

    return (
      // // <div className="card group" ref={ref}>
      // <>
      <div className="card" ref={ref}>
        <div className="card-wrap" ref={ref}>
          <div>
            <div className="w-full relative h-48">
              <img src={image} alt={title} className=" h-48 object-cover" />
              <p className=" h-48 object-cover caption text text-gray-200 text-xs">
                {caption}
              </p>
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
          </div>
        </div>
      </div>

      // </>
    );
  },
);

export default Card;

// import React from "react";

// const Card = ({ title, rating, season, caption, image, year }) => {
//   const seasonExists = year !== "Coming Soon"; // Simplified season existence check

//   return (
//     <div className="card group">
//       <div className="h-48">
//         <img src={image} alt={title} className="w-full h-48 object-cover" />
//       </div>

//       <div className="p-1  pl-2">
//         <div className="text-white font-semibold text-md">{title}</div>
//         <div className="flex gap-1">
//           <div className="text-green-500 font-bold text-sm">
//             {rating} {" Match"}
//           </div>
//           <div className="text-gray-200 font-semibold text-sm">
//             {year}{" "}
//             {seasonExists && (
//               <>
//                 {" "}
//                 {" | "} {season}
//               </>
//             )}
//           </div>
//         </div>
//         <p className="caption text-gray-200 text-xs mt-2">{caption}</p>
//       </div>
//     </div>
//   );
// };

// export default Card;

// import React, { useState } from "react";

// const Card = ({ title, rating, season, caption, image, year }) => {
//   const [seasonExists, setSeasonExists] = useState(true);
//   if (year === "Coming Soon") {
//     useState(false);
//   }
//   return (
//     <div className="bg-black flex-col text-white overflow-hidden shadow-lg w-full max-w-[250px]">
//       <div className="h-48">
//         <img src={image} alt={title} className="w-full h-48 object-cover" />
//       </div>

//       <div className="p-1">
//         <div className="text-white font-semibold text-md">{title}</div>
//         <div className="flex gap-1">
//           <div className="text-green-500 font-bold text-sm">
//             {rating}
//             {" Match"}
//           </div>

//           <div className="text-gray-200 font-semibold text-sm">
//             {year}
//             {seasonExists && (
//               <>
//                 {" | "} {season}
//               </>
//             )}
//           </div>
//         </div>
//         <p className="text-gray-200 text-xs mt-2">{caption}</p>
//       </div>
//     </div>
//   );
// };

// export default Card;
