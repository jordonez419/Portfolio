import React from "react";
import SkillsCard from "./SkillsCard";
import { skillsData } from "../data.js";

function SkillsSection() {
  return (
    <section id="skills" className="bg-white py-32 px-6">
      <div className="container">
        <h1 className="text-5xl font-bold text-center bg-white mb-20">
          Skills
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skillsData.map((skill, index) => {
            return (
              <SkillsCard key={index} icon={skill.icon} text={skill.text} />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
