import React from "react";

import { comingSoonImg, logoImg, richflixImg, rseries } from "../utils";

const ComingSoon = ({ heroImg }) => {
  return (
    <section className="w-full bg-black relative">
      <div className="w-full  flex-center">
        <div className="md:w-full w-full">
          <div
            className="flex-center bg-cover bg-center text-white py-20 px-10"
            style={{
              backgroundImage: `url(${heroImg})`,
              height: "500px", // Set this to whatever height fits your design
            }}
          >
            <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
            {/* Dark overlay */}
            <div className="relative z-5">
              <div className="">
                <img height={50} width={1000} src={rseries} />

                <h2 className="text-white font-bold text-lg mt-2">
                  {/* Email: richelleshim@g.ucla.edu */}
                </h2>

                <div className="flex-center w-full">
                  <img src={comingSoonImg} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
