import React, { forwardRef } from "react";
import ProjectModal from "./ProjectModal";

const ProjectCard = forwardRef(
  ({ children, title, rating, season, caption, image, year }, ref) => {
    const seasonExists = year !== "Coming Soon"; // Simplified season existence check

    return (
      // // <div className="card group" ref={ref}>
      // <>
      <div className="card" ref={ref}>
        <div className="card-wrap" ref={ref}>
          <div>
            <div className="w-full relative h-48">
              <img src={image} alt={title} className=" h-48 object-cover" />
              <p className=" h-48 object-cover caption text text-gray-200 text-xs">
                {caption}
              </p>
            </div>
          </div>
          <div className="p-1 pl-2">
            <div className="text-white font-semibold text-md">{title}</div>
            <div className="flex gap-2">
              <div className="text-green-500 font-bold text-sm">
                {rating} {" Match"}
              </div>
              <div className="text-gray-200 font-semibold text-sm">
                <div className="flex gap-2">
                  {" | "}
                  <ProjectModal>{children}</ProjectModal>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      // </>
    );
  },
);

export default ProjectCard;
