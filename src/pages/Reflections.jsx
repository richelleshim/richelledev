import React from "react";
import { heroImg, reflectionVideo } from "../utils";
import RSeries from "../components/RSeries";
import { season1 } from "../constants";
import Categories from "../components/Categories";
import RSeriesVideo from "../components/RSeriesVideo";
import ComingSoon from "../components/ComingSoon";

const Reflections = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="w-full bg-black relative">
      <div className="h-5/6 w-full  flex-center flex-col">
        <div className="md:w-full w-full">
          <RSeriesVideo
            title="Blog!"
            subtitle="A collection of thoughts and reflections!"
            backgroundImage={heroImg}
            vid={reflectionVideo}
          />
          <div className=" w-full pt-1 ">
            <div className="mt-2 flex-col">
              <ComingSoon />
              {/* <Categories title="Season 1: Who am I?" items={season1} /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reflections;
