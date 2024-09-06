import React from "react";
import { heroImg, rseries } from "../utils";

const Contact = () => {
  const backgroundImage = { heroImg };
  return (
    <section className="w-full bg-black relative">
      <div className="h-5/6 w-full  flex-center flex-col">
        <div className="md:w-full w-full">
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
              <div className="" >
                <img height={50} width={1000} src={rseries} />
                <h1 className="text-red-600 text-6xl font-bold">Contact Me!</h1>
              <div className="w-[75%] p-2">
                <h2 className="text-white font-bold text-lg mt-2">
                  Email: richelleshim@g.ucla.edu
                </h2>
                <h2 className="text-white font-bold text-lg mt-2">
                  github: @richelleshim
                </h2>
                <h2 className="text-white font-bold text-lg mt-2">
                  Sorry for the inconvenience, but I don't have any other
                  socials!
                </h2>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
