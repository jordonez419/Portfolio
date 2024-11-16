import React from "react";
import ProjectCard from "./ProjectCard";
import { projectsData } from "../data";

function PortfolioSection() {
  return (
    <section id="portfolio" className="px-6 py-32 bg-white">
      <div className="container flex flex-col gap-12">
        <h1 className="text-5xl font-bold text-center">Portfolio</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => {
            return (
              <ProjectCard
                key={index}
                thumbnail={project.thumbnail}
                techUsed={project.techUsed}
                description={project.description}
                name={project.name}
                link={project.link}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;
