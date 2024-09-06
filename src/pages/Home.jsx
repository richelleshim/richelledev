import React from "react";
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

const Home = () => {
  return (
    <section className="w-full bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <Hero />
        <div className="pd-2">
          <Categories title="My Favorites" items={favoriteList} />

          <Categories title="About Me" link="/aboutme" items={aboutMePreview} />
          <Categories title="@ UCLA!" items={clubs} />
          <Categories title="What I want to learn!" items={learn} />
        </div>
      </div>
    </section>
  );
};

export default Home;
