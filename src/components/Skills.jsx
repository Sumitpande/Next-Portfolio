"use client";

import { SkillCard } from "./SkillCard";
import data from "@/data/index.json";

export const SkillsSection = () => {
  return (
    <section className="min-h-screen relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Skills grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 max-w-7xl mx-auto">
          {data.skills.data
            .flatMap((category) => category.items)
            .map((skill, index) => (
              <SkillCard
                key={skill.name}
                name={skill.name}
                icon={skill.icon}
                color={skill.color}
                index={index}
              />
            ))}
        </div>
      </div>
    </section>
  );
};
