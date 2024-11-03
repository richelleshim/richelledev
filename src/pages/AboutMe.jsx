"use client"


import React, { useEffect } from "react";
import RSeriesVideo from "../components/RSeriesVideo";
import Categories from "../components/Categories";
import { aboutMeVideo, heroImg } from "../utils";
import { brainChemistry, season1, season2, season3 } from "../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    gsap.to("#season1", { opacity: 1, delay: 1.5 });

    ScrollTrigger.create({
      trigger: "#season1",
      start: "top 70%",
      end: "bottom top",
      onEnter: () => gsap.to("#season1", { opacity: 1, duration: 1 }),
      onLeave: () => gsap.to("#season1", { opacity: 0 }),
      onEnterBack: () => gsap.to("#season1", { opacity: 1, duration: 1 }),
      onLeaveBack: () => gsap.to("#season1", { opacity: 0 }),
    });

    ScrollTrigger.create({
      trigger: "#season2",
      start: "top 80%",
      end: "bottom top",
      onEnter: () => gsap.to("#season2", { opacity: 1, duration: 1 }),
      onLeave: () => gsap.to("#season2", { opacity: 0 }),
      onEnterBack: () => gsap.to("#season2", { opacity: 1, duration: 1 }),
      onLeaveBack: () => gsap.to("#season2", { opacity: 0 }),
    });

    // Add additional ScrollTriggers for other sections as needed
    ScrollTrigger.create({
      trigger: "#season3",
      start: "top 80%",
      end: "bottom top",
      onEnter: () => gsap.to("#season3", { opacity: 1, duration: 1 }),
      onLeave: () => gsap.to("#season3", { opacity: 0 }),
      onEnterBack: () => gsap.to("#season3", { opacity: 1, duration: 1 }),
      onLeaveBack: () => gsap.to("#season3", { opacity: 0 }),
    });

    ScrollTrigger.create({
      trigger: "#brainChemistry",
      start: "top 80%",
      end: "bottom top",
      onEnter: () => gsap.to("#brainChemistry", { opacity: 1, duration: 1 }),
      onLeave: () => gsap.to("#brainChemistry", { opacity: 0 }),
      onEnterBack: () =>
        gsap.to("#brainChemistry", { opacity: 1, duration: 1 }),
      onLeaveBack: () => gsap.to("#brainChemistry", { opacity: 0 }),
    });
  }, []);

  return (
    <section className="w-full bg-black relative">
      <div className="h-full w-full flex-center flex-col">
        <div className="md:w-full w-full">
          <RSeriesVideo
            title="About Me"
            subtitle="Born in 2003, Richelle Shim is on a journey to find out more about herself and the world. Along the way, she meets new people, finds new experiences, and even though she falls down sometimes, she always gets back up!"
            backgroundImage={heroImg}
            vid={aboutMeVideo}
          />
          <div className="w-full flex-center">
            <div className="flex-col">
              <div id="season1" className="opacity-0">
                <Categories title="Season 1: Who am I?" items={season1} />
              </div>
              <div id="season2" className="opacity-0">
                <Categories title="Season 2: Finding my why" items={season2} />
              </div>

              <div id="season3" className="opacity-0">
                <Categories
                  title="Season 3: Who I want to be"
                  items={season3}
                />
              </div>
              <div id="brainChemistry" className="opacity-0">
                <Categories
                  title="Things that changed my brain chemistry!"
                  items={brainChemistry}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
