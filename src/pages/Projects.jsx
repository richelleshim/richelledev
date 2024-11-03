"use client"

import React, { useEffect } from "react";
import RSeries from "../components/RSeries";
import {
  heroImg
} from "../utils";
import ProjectCategories from "../components/ProjectCategories";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
              {/* <ComingSoon /> */}
              {/* <Categories
                title="Projects"
                page="Projects"
                items={projects}
              ></Categories> */}

              <ProjectCategories />

              {/* <ProjectCard
              title="Bruingram"
              rating="50%"
              season="2023 | 3 episodes"
              caption="a fun take on a UCLA-centered social media app"
              image={bruinGramHeroImg}
              year="2024">
                <ProjectDescription
                  title=""
                  titleImg={bruingramTitleImg}
                  heroImg={bruinGramHeroImg}
                  subtitle="Bruingram"
                  titleImgWidth="300px"
                  titleImgHeight="70px"
                  genre="2024 | Design + Web Dev"
                  paragraphs={[
                    "Working in a team of 6, we created an application with the inspiration of Hinge, Instagram, and Facebook. We thought that it would be cool to create a social media application specific for Bruins, where users could filter out other users based on Major and Year to make friends, seek out career advice, and find roommates!        ",
                  ]}
                  technologies="React, MaterialUI, Firebase, Git"
                  directors="Elizabeth, Yousra, Chai, Jennifer, Daniel, Richelle"
                  isDirectors={true}
                  heroVideo={bruinGramVid}
                />
                children, title, rating, season, caption, image, year
              </ProjectCard>
              <ProjectModal>
                <ProjectDescription
                  title=""
                  titleImg={bruingramTitleImg}
                  heroImg={bruinGramHeroImg}
                  subtitle="Bruingram"
                  titleImgWidth="300px"
                  titleImgHeight="70px"
                  genre="2024 | Design + Web Dev"
                  paragraphs={[
                    "Working in a team of 6, we created an application with the inspiration of Hinge, Instagram, and Facebook. We thought that it would be cool to create a social media application specific for Bruins, where users could filter out other users based on Major and Year to make friends, seek out career advice, and find roommates!        ",
                  ]}
                  technologies="React, MaterialUI, Firebase, Git"
                  directors="Elizabeth, Yousra, Chai, Jennifer, Daniel, Richelle"
                  isDirectors={true}
                  heroVideo={bruinGramVid}
                />
              </ProjectModal>
              <ProjectModal>
                <ProjectDescription
                  title=""
                  titleImg={bruingramTitleImg}
                  heroImg={bruinGramHeroImg}
                  subtitle="Bruingram"
                  titleImgWidth="300px"
                  titleImgHeight="70px"
                  genre="2024 | Design + Web Dev"
                  paragraphs={[
                    "Working in a team of 6, we created an application with the inspiration of Hinge, Instagram, and Facebook. We thought that it would be cool to create a social media application specific for Bruins, where users could filter out other users based on Major and Year to make friends, seek out career advice, and find roommates!        ",
                  ]}
                  technologies="React, MaterialUI, Firebase, Git"
                  directors="Elizabeth, Yousra, Chai, Jennifer, Daniel, Richelle"
                  isDirectors={true}
                  heroVideo={bruinGramVid}
                />
              </ProjectModal> */}
              {/* <Categories
                title="Programing Languages + Tools"
                items={progtools}
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
