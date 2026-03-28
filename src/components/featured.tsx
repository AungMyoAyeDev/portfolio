
import { Button } from "@/src/components/ui/button";
import { Card, CardContent } from "@/src/components/ui/card";
import { Check, ExternalLink, Github, LayoutDashboard } from "lucide-react";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { FEATURE_PROJECTS } from "../lib/project-data";
import Link from "next/link";

export default function FeaturedProject() {
    return (
        <section
            id="projects"
            className="space-y-12"
        >
            {
                FEATURE_PROJECTS.map((data, i) => (
                    <div key={data.title}>
                        {/* Section Header */}
                        <div className=" flex flex-col gap-3 items-center mb-4">
                            <p className="text-sm uppercase tracking-widest text-violet-500 font-medium">
                                Featured Project {i + 1}
                            </p>

                            <h2 className=" text-3xl lg:text-4xl font-bold text-center ">
                                {data.title}
                            </h2>
                            <p className=" text-default-500 max-w-2xl mx-auto text-center">
                                {data.shortDescription}
                            </p>
                            {/* Tech Stack */}

                            <div className="flex gap-1 flex-wrap justify-center">


                                {
                                    data.techStacks.map((tech, idx) => (
                                        <Badge
                                            key={idx}
                                            variant="outline"
                                            className="rounded-full px-2 py-1 hover:border-primary"
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

                        {/* Project Card */}
                        <Card className="py-4">
                            <CardContent className="px-4">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">

                                    {/* Project Image */}
                                    <div className="relative">

                                        <Image
                                            src={data.image}
                                            alt="Hotel Booking Website"
                                            width={800}
                                            height={600}
                                            className="rounded-xl shadow-lg object-cover"
                                        />
                                    </div>

                                    {/* Project Content */}
                                    <div className="space-y-4 flex flex-col justify-between">
                                        <h3 className="text-2xl font-semibold">
                                            {data.title}
                                        </h3>

                                        <p className=" text-default-600 leading-relaxed">
                                            {data.description}
                                        </p>

                                        <ul className="space-y-2">
                                            <li>Key Features are :</li>
                                            {
                                                data.keyFeatures.map((feature, idx) => (
                                                    <li key={idx} className="flex gap-2 items-center text-sm">
                                                        <Check className="text-green-600" />
                                                        {feature}
                                                    </li>
                                                ))
                                            }
                                        </ul>


                                        {/* Action Buttons */}
                                        <div className="flex justify-between ">


                                            <div>
                                                <Button variant={'link'} asChild>


                                                    <Link href={data.links.live} target="_blank">
                                                        <ExternalLink />
                                                        View Live Demo
                                                    </Link>
                                                </Button>
                                                <Button variant={'link'} asChild>
                                                    <Link href={data.links.live2} target="_blank">
                                                        <LayoutDashboard />
                                                        View Dashboard
                                                    </Link>
                                                </Button>


                                            </div>
                                            <Button asChild>
                                                <Link href={data.links.github} target="_blank">
                                                    <Github />
                                                    Source Code
                                                </Link>
                                            </Button>

                                        </div>
                                    </div>

                                </div>
                            </CardContent>
                        </Card>
                    </div>
                ))
            }

        </section>
    );
}
