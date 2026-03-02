"use client";

import {
    Card,

    CardContent,
    CardDescription,

    CardHeader,
    CardTitle,
} from "@/src/components/ui/card"
import { TECH_STACKS } from "../lib/utils";
import { Badge } from "./ui/badge";
import Image from "next/image";

const TechStacks = () => {



    return (
        <section >
            <h1
                className='text-2xl sm:text-3xl md:text-4xl font-bold text-center'
            >
                Tech Stack

            </h1>
            <h2
                className="text-base sm:text-lg md:text-xl text-center my-4"
            >Technologies I use to build scalable and production-ready applications.
            </h2>
            <main className='grid grid-cols-1 sm:grid-cols-3  gap-6 sm:gap-8  mt-12'>
                {
                    TECH_STACKS.map((stack, index) => (
                        <Card key={index}
                            className="w-full shadow-xl"
                        >

                            <CardHeader  >
                                <stack.icon className="text-2xl text-primary" />
                                <CardTitle className='text-xl font-bold'>{stack.name}</CardTitle>
                                <CardDescription>
                                    {stack.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent >
                                <div className="flex flex-wrap gap-2 ">
                                    {stack.techStack.map((tech, idx) => (
                                        <Badge
                                            key={idx}
                                            variant="secondary"
                                            className="hover:border-primary hover:shadow-xs shadow-primary/25"

                                        >
                                            <Image
                                                src={tech.icon}
                                                alt={tech.name + "icon"}
                                                width={24}
                                                height={24}
                                            />
                                            <span className="text-xs font-light leading-tight">{tech.name}</span>
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))
                }

            </main>
        </section>
    )
}

export default TechStacks
