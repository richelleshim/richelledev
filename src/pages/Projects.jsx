import React from "react";
import RSeries from "../components/RSeries";
import { heroImg, plutusLogoImg, spotifyHeroImg, spotifyVideo } from "../utils";
import Categories from "../components/Categories";
import { favoriteList, progtools, projects } from "../constants";

const Projects = () => {
  return (
    <section className="w-full bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <div className="md:w-full w-full">
          <RSeries
            seriesTitle="Projects"
            subtitle="Here are a few projects of mine!"
            // onPlay=""
            backgroundImage={heroImg}
          />
          <div className=" w-full flex-center ">
            <div className="flex-col">
              <Categories title="Projects" items={projects} />
              <Categories
                title="Programing Languages + Tools"
                items={progtools}
              />
            </div>
          </div>
        </div>
      </div>
      <ProjectDescription
        title=""
        titleImg={plutusLogoImg}
        heroImg={spotifyHeroImg}
        subtitle="Plutus"
        titleImgWidth="300px"
        titleImgHeight="70px"
        genre="2024 | Design + Web Dev"
        paragraphs={[
          "Plutus is a banking application that allows users to create their own account, connect their bank using Plaid, and transfer payments to other users. The home interface displays transactions, their current balance, and their bank accounts.",
        ]}
        technologies="Appwrite, Sentry, Plaid, Figma, Nextjs"
        heroVideo={spotifyVideo}
      />
    </section>
  );
};

export default Projects;
