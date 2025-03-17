import React from "react";
import SkillCategories from "./SkillCategories";

const Skills = () => {
  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 animate-fade-up">
          Explore Skill Categories
        </h2>
        <p className="text-[#748397] text-center max-w-2xl mx-auto animate-fade-up animation-delay-100">
          Browse through our diverse range of skill categories and find the
          perfect exchange opportunity.
        </p>
      </div>
      <SkillCategories />
    </div>
  );
};

export default Skills;
