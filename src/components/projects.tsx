"use client";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/src/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { projects } from "../lib/utils";


export default function Projects() {
    return (
        <section
            id="projects"
            className="min-h-screen relative py-24 px-6 lg:px-8 max-w-6xl mx-auto"
        >
            {/* Section Header */}
            <div className="text-center mb-16">
                <p className="text-sm uppercase tracking-widest text-primary font-medium">
                    My Best Projects
                </p>
                <h2 className="mt-4 text-3xl lg:text-4xl font-bold">
                    Systems I Have Built
                </h2>
                <p className="mt-4 text-default-500 max-w-2xl mx-auto">
                    A collection of production-focused applications demonstrating backend
                    architecture, scalable APIs, and full-stack integration.
                </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {projects.map((project, index) => (

                    <Card className="p-0 overflow-hidden" key={index}>
                        <CardHeader className=" group p-0 relative  overflow-hidden  w-full aspect-video">

                            <Image
                                src={'/mockup-design.png'}
                                alt={project.title}
                                fill
                                className=" object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                            />

                        </CardHeader>

                        <CardContent className="space-y-2 px-4" >

                            <h3 className="text-xl font-semibold">
                                {project.title}
                            </h3>


                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex ">
                                {project.techStack.map((tech, i) => (
                                    <Button
                                        key={i}
                                        variant='outline'
                                        size={'icon'}
                                        className={`rounded-full  border-2 border-secondary`}
                                    >
                                        <Image
                                            src={tech.icon}
                                            alt="icon"
                                            width={24}
                                            height={24}

                                        />
                                    </Button>
                                ))}
                            </div>
                        </CardContent>
                        <CardFooter className="justify-between mb-4 px-4">


                            <Button variant={'link'}>
                                <ExternalLink />
                                View Live Demo</Button>
                            <Button>
                                <Github />
                                Soure Code</Button>

                        </CardFooter>
                    </Card>

                ))}
            </div>
        </section>
    );
}
