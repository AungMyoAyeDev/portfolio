"use client";


import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

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
                <p className="text-sm uppercase tracking-widest text-accent font-medium">
                    Selected Projects
                </p>
                <h2 className="mt-4 text-3xl lg:text-4xl font-bold">
                    Systems I've Built
                </h2>
                <p className="mt-4 text-default-500 max-w-2xl mx-auto">
                    A collection of production-focused applications demonstrating backend
                    architecture, scalable APIs, and full-stack integration.
                </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {projects.map((project, index) => (
                    <Link key={index} href={project.link}>
                        <Card

                            className="group bg-background/60 backdrop-blur-xl border border-default-200 rounded-2xl transition-all  hover:shadow-2xl"
                        >
                            <CardContent className="p-0">
                                {/* Image */}
                                <div className="relative mb-6 overflow-hidden rounded-xl">
                                    <Image
                                        src={'/mockup-design.png'}
                                        alt={project.title}
                                        width={600}
                                        height={400}
                                        className="rounded-xl object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-semibold">
                                    {project.title}
                                </h3>

                                {/* Description */}
                                <p className="mt-3 text-default-600 text-sm leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="mt-5 flex flex-wrap gap-2">
                                    {project.tech.map((tech, i) => (
                                        <Button key={i} size="sm" variant='outline'>
                                            {tech}
                                        </Button>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
        </section>
    );
}
