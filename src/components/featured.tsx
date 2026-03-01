
import { Button } from "@/src/components/ui/button";
import { Card, CardContent } from "@/src/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { Badge } from "./ui/badge";

export default function FeaturedProject() {
    return (
        <section
            id="featured-project"

        >
            {/* Section Header */}
            <div className="space-y-4  text-center mb-4">
                <p className="text-sm uppercase tracking-widest text-violet-500 font-medium">
                    Featured Project
                </p>
                <h2 className=" text-3xl lg:text-4xl font-bold">
                    Hotel Booking Management System
                </h2>
                <p className=" text-default-500 max-w-2xl mx-auto">
                    A full-stack booking platform with authentication, room management,
                    availability tracking, and secure payment-ready architecture.
                </p>
            </div>

            {/* Project Card */}
            <Card className="py-4">
                <CardContent className="px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">

                        {/* Project Image */}
                        <div className="relative">

                            <Image
                                src="/mockup-design.png"
                                alt="Hotel Booking Website"
                                width={800}
                                height={600}
                                className="rounded-xl shadow-lg object-cover"
                            />
                        </div>

                        {/* Project Content */}
                        <div className="space-y-4 flex flex-col justify-between">
                            <h3 className="text-2xl font-semibold">
                                Booking Managment Platform for Hotels
                            </h3>

                            <p className=" text-default-600 leading-relaxed">
                                Designed and developed a complete booking system allowing users
                                to search rooms, check availability, manage reservations, and
                                authenticate securely using JWT-based authentication.
                            </p>

                            <p className=" text-default-600 leading-relaxed">
                                The system includes admin dashboards, booking status tracking,
                                role-based access control, and optimized API performance for
                                scalable deployment.
                            </p>

                            {/* Tech Stack */}
                            <div className=" flex flex-wrap gap-2">
                                <Badge variant={'secondary'}>Next js</Badge>
                                <Badge variant={'secondary'}>Next js</Badge>
                                <Badge variant={'secondary'}>Next js</Badge>
                                <Badge variant={'secondary'}>Next js</Badge>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex justify-between ">


                                <Button variant={'link'}>
                                    <ExternalLink />
                                    View Live Demo</Button>
                                <Button>
                                    <Github />
                                    Soure Code</Button>

                            </div>
                        </div>

                    </div>
                </CardContent>
            </Card>
        </section>
    );
}
