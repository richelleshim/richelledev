import React from "react";
import RSeries from "../components/RSeries";
import { heroImg } from "../utils";
import Categories from "../components/Categories";
import { favoriteList, progtools, projects } from "../constants";

const AboutMe = () => {
  return (
    <section className="w-full bg-black relative">
      <div className="h-5/6 w-full  flex-center flex-col">
        <div className="md:w-full w-full">
          <RSeries
            seriesTitle="Projects"
            subtitle="Here are a few projects of mine!"
            // onPlay=""
            backgroundImage={heroImg}
          />
          <div className=" w-full pt-1 ">
            <div className="mt-2 flex-col">
              <Categories title="Projects" items={projects} />
              <Categories title="Programing Languages + Tools" items={progtools} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
