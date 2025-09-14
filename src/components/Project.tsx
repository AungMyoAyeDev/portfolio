"use client";

import { projects } from "@/data";
import Card from "./ui/Card";
import { useRef, useState } from "react";
import { delay, motion, useInView } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.2,
      staggerChildren: 0.2, // Delay between each card's animation
      delayChildren: 0.2, // Initial delay before the first card starts animating
    },
  },
}

const tab = ["All", "Front-End", "Full-Stack"];
const Project = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [projectFilter, setProjectFilter] = useState(projects);

  const containerRef = useRef<HTMLDivElement | null>(null)
  const inView = useInView(containerRef, { margin: "-100px" })

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
    <section className="section-container relative" id="project" ref={containerRef}>
      <h1 className="heading">My Recent Projects</h1>
      <div className="rounded-full relative flex border-2 border-orange-400">
        {tab.map((t, i) => (
          <div
            key={i}
            className="relative px-4 py-2 text-base md:text-lg font-semibold font-poppin rounded-full cursor-pointer"
            onClick={() => {
              filteredProjects(t);
              setActiveTab(i);
            }}
          >
            <span className="relative z-10 text-white">{t}</span>
            {activeTab === i && (
              <motion.span
                layoutId="activeTab"
                transition={{ ease: "easeOut" }}
                className="absolute inset-1 rounded-full bg-primary-purple"
              />
            )}
          </div>
        ))}
      </div>

      <motion.main
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-4  ">
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
      </motion.main>
    </section>
  );
};

export default Project;
