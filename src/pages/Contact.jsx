// import React from "react";
// import { heroImg, rseries } from "../utils";

// const Contact = () => {
//   const backgroundImage = { heroImg };
//   return (
//     <section
//       className="w-full relative"
//       style={{
//         backgroundColor: "#242424",
//       }}
//     >
//       <div className="h-5/6 w-full">
//         <div className="md:w-full w-full">
//           <div
//             className="relative bg-cover max-w-screen bg-center text-white py-20 px-10"
//             style={{
//               height: "500px",
//             }}
//           >
//             <div className="absolute inset-0 bg-opacity-50"></div>
//             {/* Dark overlay */}
//             <div className="relative z-5">
//               <div className="">
//                 <img height={50} width={1000} src={rseries} alt="R Series" />

//                 {/* <img height={50} width={1000} src={rseries} alt="R Series" /> */}
//                 <h1 className="text-red-600 text-6xl font-bold">Contact Me!</h1>
//                 <div className="w-[75%] p-2">
//                   <h2 className="text-white font-bold text-lg mt-2">
//                     Email: richelleshim@g.ucla.edu
//                   </h2>
//                   <h2 className="text-white font-bold text-lg mt-2">
//                     github: @richelleshim
//                   </h2>
//                   <h2 className="text-white font-bold text-lg mt-2">
//                     Sorry for the inconvenience, but I don't have any other
//                     socials!
//                   </h2>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import React from "react";
import { heroImg, rseries } from "../utils";

const Contact = () => {
  return (
    <section
      className="w-full relative"
      style={{
        backgroundColor: "#242424",
      }}
    >
      <div style={{ height: "500px", width: "1200px", margin: "0 auto" }}>
        {" "}
        {/* Fixed width and height */}
        <div
          className="relative bg-cover bg-center text-white py-20 px-10"
          style={{
            height: "500px", // Maintain a fixed height
          }}
        >
          <div className="absolute inset-0 bg-opacity-50"></div>
          {/* Dark overlay */}
          <div className="relative z-5 flex flex-col">
            {" "}
            {/* Center content */}
            <img
              height={50} // Fixed height
              width={1000} // Fixed width
              src={rseries}
              alt="R Series"
            />
            <h1 className="text-red-600 text-6xl font-bold mt-4">
              Contact Me!
            </h1>
            <div className="w-[75%] p-2">
              <h2 className="text-white font-bold text-lg mt-2">
                Email: richelleshim@g.ucla.edu
              </h2>
              <h2 className="text-white font-bold text-lg mt-2">
                github: @richelleshim
              </h2>
              <h2 className="text-white font-bold text-lg mt-2 flex">
                Sorry for the inconvenience, but I don't have any other socials!
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
