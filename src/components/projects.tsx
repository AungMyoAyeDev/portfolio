"use client";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/src/components/ui/card";
import { Check, ExternalLink, Github, Info, LayoutDashboard, X } from "lucide-react";
import Image from "next/image";
import { PROJECTS } from "../lib/project-data";
import Link from "next/link";
import { useState } from "react";
import { Badge } from "./ui/badge";
import ScrollReveal from "./scroll-reveal";

export default function Projects() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const activeProject =
        activeIndex !== null ? PROJECTS[activeIndex] : null;

    return (
        <section id="projects" className="relative">
            {/* Header */}
            <div className="text-center space-y-4 mb-8">
                <p className="text-sm uppercase tracking-widest text-primary font-medium">
                    My Best Projects
                </p>
                <h2 className="text-3xl lg:text-4xl font-bold">
                    Projects I Have Built
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    A collection of production-focused applications demonstrating backend
                    architecture and full-stack integration.
                </p>
            </div>

            {/* Grid */}
            <div
                className={`
                    grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 transition-opacity duration-500
                     ${activeIndex !== null
                        ? "opacity-20 pointer-events-none"
                        : "opacity-100"
                    }`}
            >
                {PROJECTS.map((project, index) => (
                    <ScrollReveal
                        key={project.title}
                        variant="pop"
                        delay={120 + index * 120}
                        className={`transition-all duration-300 ${activeIndex === index ? "opacity-0 scale-95" : ""
                            }`}
                    >
                        <Card className="project-popup-card">
                        <CardHeader>
                            <div className="scroll-image relative aspect-video rounded-lg overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </CardHeader>

                        <CardContent className="space-y-2">
                            <h3 className="text-xl font-semibold">{project.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {project.shortDescription}
                            </p>
                            <div className="flex gap-1">
                                {
                                    project.techStacks.map((tech, idx) => (
                                        <Button
                                            key={idx}
                                            variant="outline"
                                            size={'icon'}
                                            className="rounded-full"
                                        >
                                            <Image
                                                src={tech.icon}
                                                alt={tech.name + " icon"}
                                                width={24}
                                                height={24}
                                            />

                                        </Button>
                                    ))
                                }

                            </div>
                        </CardContent>

                        <CardFooter className="justify-between">
                            <Button variant="link" asChild>
                                <Link href={project.links.live}>
                                    <ExternalLink className="mr-1 h-4 w-4" />
                                    Live Demo
                                </Link>
                            </Button>

                            <Button onClick={() => setActiveIndex(index)}>
                                <Info className="mr-1 h-4 w-4" />
                                View Details
                            </Button>
                        </CardFooter>
                        </Card>
                    </ScrollReveal>
                ))}
            </div>

            {/* Modal */}
            {activeProject && (
                <div className="fixed inset-0 z-50 flex items-center justify-center ">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-fadeIn"
                        onClick={() => setActiveIndex(null)}
                    />

                    {/* Modal Content */}
                    <Card
                        className="relative z-10 w-[90%] h-[90%]  max-w-xl bg-background rounded-2xl shadow-2xl p-6 animate-scaleIn ">

                        <Button
                            size="icon"
                            variant="ghost"
                            className="absolute right-4 top-4"
                            onClick={() => setActiveIndex(null)}
                        >
                            <X className="h-4 w-4" />
                        </Button>
                        <CardContent className="  overflow-hidden overflow-y-scroll no-scrollbar">



                            <h3 className="text-2xl font-bold mb-4">
                                {activeProject.title}
                            </h3>

                            <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                                <Image
                                    src={activeProject.image}
                                    alt={activeProject.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <p className="text-muted-foreground mb-6">
                                {activeProject.fullDescription}
                            </p>

                            <ul className="space-y-2 mb-4 bg-muted text-muted-foreground p-2 rounded">
                                <li>Key Features are :</li>
                                {
                                    activeProject.keyFeatures.map((feature, idx) => (
                                        <li key={idx} className="flex gap-2 items-center text-sm">
                                            <Check className="text-green-600" />
                                            {feature}
                                        </li>
                                    ))
                                }
                            </ul>

                            <div className="space-y-2">


                                <h4>Tech Stacks are : </h4>
                                <div className="flex gap-1 flex-wrap">


                                    {
                                        activeProject.techStacks.map((tech, idx) => (
                                            <Badge
                                                key={idx}
                                                variant="outline"
                                                className="rounded-full px-2 py-1"
                                            >
                                                <Image
                                                    src={tech.icon}
                                                    alt={tech.name + " icon"}
                                                    width={24}
                                                    height={24}
                                                />
                                                {tech.name}
                                            </Badge>
                                        ))
                                    }
                                </div>
                            </div>
                        </CardContent>

                        <CardFooter className="flex-wrap items-center justify-between gap-2">

                            <Button variant="link" asChild>
                                <Link href={activeProject.links.live}  >
                                    <ExternalLink />
                                    Live Demo
                                </Link>
                            </Button>
                            {
                                activeProject.links.live2
                                && <Button variant="link" asChild>
                                    <Link href={activeProject.links.live}  >
                                        <LayoutDashboard />
                                        View Dashboard
                                    </Link>
                                </Button>
                            }



                            <Button asChild>
                                <Link href={activeProject.links.github} className="w-full sm:w-fit" >
                                    <Github />
                                    Source Code
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            )}
        </section>
    );
}
