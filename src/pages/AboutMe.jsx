import React from "react";
import RSeries from "../components/RSeries";
import { aboutMeVideo, heroImg } from "../utils";
import Categories from "../components/Categories";
import {
  brainChemistry,
  favoriteList,
  season1,
  season2,
  season3,
} from "../constants";
import RSeriesVideo from "../components/RSeriesVideo";

const AboutMe = () => {
  return (
    <section className="w-full bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <div className="md:w-full w-full">
          <RSeriesVideo
            title="About Me"
            subtitle="Born in 2003, Richelle Shim is on a
            journey to find out more about herself and the
             world. Along the way, she meets new people, finds 
            new experiences, and even though she falls 
            down sometimes, she always gets back up!"
            // onPlay=""
            backgroundImage={heroImg}
            vid={aboutMeVideo}
          />
          <div className=" w-full flex-center ">
            <div className="flex-col">
              <Categories title="Season 1: Who am I?" items={season1} />
              <Categories title="Season 2: Finding my why" items={season2} />
              <Categories title="Season 3: Who I want to be" items={season3} />
              <Categories
                title="Things that changed my brain chemistry!"
                items={brainChemistry}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
