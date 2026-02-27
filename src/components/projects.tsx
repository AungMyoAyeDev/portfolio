"use client";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/src/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { Badge } from "./ui/badge";

const projects = [
    {
        title: "Hotel Booking System",
        description:
            "Full-stack booking platform with JWT authentication, room availability tracking and admin dashboard.",
        image: "/projects/hotel.png",
        tech: ["Next.js", "Node.js", "MongoDB", "JWT"],
        link: "#",
    },
    {
        title: "Utility Management System",
        description:
            "Role-based system for managing billing, payments, and service records with secure API architecture.",
        image: "/projects/utility.png",
        tech: ["React", "Express", "MongoDB"],
        link: "#",
    },
    {
        title: "Real-Time Chat App",
        description:
            "Socket.IO powered messaging app with typing indicators, read receipts and file uploads.",
        image: "/projects/chat.png",
        tech: ["MERN", "Socket.IO"],
        link: "#",
    },
    {
        title: "Authentication System",
        description:
            "Reusable authentication module using JWT, bcrypt and secure cookie handling.",
        image: "/projects/auth.png",
        tech: ["Node.js", "JWT", "Redux Toolkit"],
        link: "#",
    },
];

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

                            <div className="flex gap-2">
                                {project.tech.map((tech, i) => (
                                    <Badge key={i} variant='secondary' className="rounded-full">
                                        <Github /> {tech}
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>
                        <CardFooter className="justify-between  pb-2 px-4">


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
