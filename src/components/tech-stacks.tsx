"use client";

import { Button, Card, Chip } from "@heroui/react";
import { useMemo } from "react";
import { BiCode } from "react-icons/bi";
import { FaTools } from "react-icons/fa";
import { FaCode, FaReact, FaServer } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { SiJavascript, SiTailwindcss, SiSass, SiRedux, SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiSocketdotio, SiPrisma, SiMongoose } from "react-icons/si";

const techStacksData = [
    {
        name: 'Frontend',
        description: 'Building responsive and interactive user interfaces.',
        icon: FaCode,
        techStack: [
            { name: 'React', icon: FaReact, color: '#61DAFB' },
            { name: 'Next.js', icon: RiNextjsFill, color: '#000000' },
            { name: 'JavaScript', icon: SiJavascript, color: '#c0ac13' },
            { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38B2FF' },
            { name: 'SCSS', icon: SiSass, color: '#CC6699' },
            { name: 'TanStack Query', icon: BiCode, color: '#FF4154' },
            { name: 'Zustand', icon: BiCode, color: '#00A86B' },
            { name: 'Redux', icon: SiRedux, color: '#764ABC' }
        ]
    },
    {
        name: 'Backend',
        description: 'Designing secure APIs and scalable server architecture.',
        icon: FaServer,
        techStack: [
            { name: 'Node.js', icon: SiNodedotjs, color: '#43853d' },
            { name: 'Express', icon: SiExpress, color: '#000000' },
            { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
            { name: 'PostgreSQL', icon: SiPostgresql, color: '#336790' }
        ]
    },
    {
        name: 'DevOps & Tools',
        description: 'Deployment, testing and production optimization.',
        icon: FaTools,
        techStack: [
            { name: 'Socket.IO', icon: SiSocketdotio, color: '#010101' },
            { name: 'Prisma', icon: SiPrisma, color: '#0EA5A4' },
            { name: 'Mongoose', icon: SiMongoose, color: '#C02942' },
            { name: 'JWT', icon: BiCode, color: '#333333' }
        ]
    }
];




const COLORS = ["success", "accent", "danger", "default", "warning"]
const TechStacks = () => {



    return (
        <section >
            <h1 className='head1'>Tech Stack</h1>
            <h2 className="head3">Technologies I use to build scalable and production-ready applications.</h2>
            <main className='grid grid-cols-1 sm:grid-cols-3  gap-4 my-4'>
                {
                    techStacksData.map((stack, index) => (
                        <Card key={index} className='rounded-lg  border border-accent shadow p-6'>

                            <Card.Header className='space-y-4'>
                                <stack.icon className="text-4xl text-accent"

                                />
                                <h1 className='text-xl font-bold'>{stack.name}</h1>
                                <p>



                                    {stack.description}
                                </p>
                            </Card.Header>
                            <Card.Footer>
                                <div className="flex flex-wrap gap-1 ">
                                    {stack.techStack.map((tech, idx) => (
                                        <Chip
                                            key={idx}
                                            variant="secondary"
                                            size="sm"
                                            style={{ backgroundColor: tech.color }}
                                            className={`rounded-lg py-1 px-1.5  text-white`}


                                        >
                                            <tech.icon className={`text-xl     `}

                                            />
                                            <span className="">{tech.name}</span>
                                        </Chip>
                                    ))}
                                </div>
                            </Card.Footer>
                        </Card>
                    ))
                }

            </main>
        </section>
    )
}

export default TechStacks