"use client";

import { projects } from "@/data";
import Card from "./ui/Card";
import { useState } from "react";
import { motion } from "framer-motion";

const tab = ["All", "Front-End", "Full-Stack"];
const Project = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [projectFilter, setProjectFilter] = useState(projects);

  const filteredProjects = (pjType: string) => {
    if (pjType === "Front-End") {
      setProjectFilter(projects.filter((pj) => pj.type === pjType));
    } else if (pjType === "Full-Stack") {
      setProjectFilter(projects.filter((pj) => pj.type === pjType));
    } else {
      setProjectFilter(projects);
    }
  };

  return (
    <section className="section-container relative" id="project">
      <h1 className="heading">My Recent Projects</h1>
      <div className="rounded-full relative flex border-2 border-orange-400">
        {tab.map((t, i) => (
          <div
            key={i}
            className="relative px-4 py-2 text-base md:text-lg font-semibold font-poppin rounded-full cursor-pointer"
            onMouseEnter={() => setActiveTab(i)}
            onClick={() => filteredProjects(t)}
          >
            <span className="relative z-10">{t}</span>
            {activeTab === i && (
              <motion.span
                layoutId="activeTab"
                transition={{ ease: "easeOut" }}
                className="absolute inset-1 rounded-full bg-gradient-to-tr from-orange-500 via-purple-500 to-sky-500"
              />
            )}
          </div>
        ))}
      </div>

      <main className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6  ">
        {projectFilter.map((item) => (
          <Card
            key={item.id}
            image={item.image}
            name={item.name}
            description={item.description}
            iconList={item.iconList}
            sourceCode={item.sourceCode}
            siteLink={item.siteLink}
          />
        ))}
      </main>
    </section>
  );
};

export default Project;
