"use client";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/src/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { PROJECTS } from "../lib/project-data";
import Link from "next/link";



export default function Projects() {
    return (
        <section
            id="projects"
        >
            {/* Section Header */}
            <div className="text-center space-y-4 mb-4">
                <p className="text-sm uppercase tracking-widest text-primary font-medium">
                    My Best Projects
                </p>
                <h2 className="text-3xl lg:text-4xl font-bold">
                    Projects I Have Built
                </h2>
                <p className="text-default-500 max-w-2xl mx-auto">
                    A collection of production-focused applications demonstrating backend
                    architecture, scalable APIs, and full-stack integration.
                </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-12">
                {PROJECTS.map((project, index) => (
                    <Card className=" overflow-hidden" key={index}>
                        <CardHeader

                        >
                            <div className=" group  relative  overflow-hidden   aspect-video rounded-lg">

                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </CardHeader>

                        <CardContent
                            className="space-y-2 "
                        >
                            <h3 className="text-xl font-semibold">
                                {project.title}
                            </h3>


                            <p
                                className="text-muted-foreground text-sm leading-relaxed"
                            >
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
                        <CardFooter
                            className="justify-between "
                        >
                            <Button
                                variant={'link'}
                                asChild
                            >
                                <Link href={project.links.live}>
                                    <ExternalLink />
                                    View Live Demo
                                </Link>

                            </Button>
                            <Button asChild>
                                <Link
                                    href={project.links.github}
                                >
                                    <Github />
                                    Soure Code
                                </Link>
                            </Button>

                        </CardFooter>
                    </Card>

                ))}
            </div>
        </section>
    );
}
