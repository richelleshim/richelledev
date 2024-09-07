import React, { useEffect } from "react";
import { heroImg } from "../utils";
import RSeries from "../components/RSeries";
import Card from "../components/Card";
import Hero from "../components/Hero";
import {
  aboutMePreview,
  clubs,
  favoriteList,
  learn,
  season1,
} from "../constants";
import Categories from "../components/Categories";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useEffect(() => {
    gsap.to("#item1", { opacity: 1, delay: 1.5 });
    ScrollTrigger.create({
      trigger: "#item1",
      start: "top 70%",
      end: "bottom top",
      onEnter: () => gsap.to("#item1", { opacity: 1, duration: 1 }),
      onLeave: () => gsap.to("#item1", { opacity: 0 }),
      onEnterBack: () => gsap.to("#item1", { opacity: 1, duration: 1 }),
      onLeaveBack: () => gsap.to("#item1", { opacity: 0 }),
    });

    ScrollTrigger.create({
      trigger: "#item2",
      start: "top 80%",
      end: "bottom top",
      onEnter: () => gsap.to("#item2", { opacity: 1, duration: 1 }),
      onLeave: () => gsap.to("#item2", { opacity: 0 }),
      onEnterBack: () => gsap.to("#item2", { opacity: 1, duration: 1 }),
      onLeaveBack: () => gsap.to("#item2", { opacity: 0 }),
    });

    // Add additional ScrollTriggers for other sections as needed
    ScrollTrigger.create({
      trigger: "#item3",
      start: "top 80%",
      end: "bottom top",
      onEnter: () => gsap.to("#item3", { opacity: 1, duration: 1 }),
      onLeave: () => gsap.to("#item3", { opacity: 0 }),
      onEnterBack: () => gsap.to("#item3", { opacity: 1, duration: 1 }),
      onLeaveBack: () => gsap.to("#item3", { opacity: 0 }),
    });

    ScrollTrigger.create({
      trigger: "#item4",
      start: "top 80%",
      end: "bottom top",
      onEnter: () => gsap.to("#item4", { opacity: 1, duration: 1 }),
      onLeave: () => gsap.to("#item4", { opacity: 0 }),
      onEnterBack: () => gsap.to("#item4", { opacity: 1, duration: 1 }),
      onLeaveBack: () => gsap.to("#item4", { opacity: 0 }),
    });
  }, []);

  return (
    <section className=" bg-black flex-center">
      <div className="h-5/6  flex-col">
        <Hero />
        <div className="pd-2">
          <div id="item1" className="opacity-0">
            <Categories title="My Favorites" items={favoriteList} />
          </div>
          <div id="item2" className="opacity-0">
            <Categories
              title="About Me"
              link="/aboutme"
              items={aboutMePreview}
            />
          </div>
          <div id="item3" className="opacity-0">
            <Categories title="@ UCLA!" items={clubs} />
          </div>
          <div id="item4" className="opacity-0">
            <Categories title="What I want to learn!" items={learn} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
