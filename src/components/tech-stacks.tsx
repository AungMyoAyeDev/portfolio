"use client";



import { Button } from "@/src/components/ui/button";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/src/components/ui/card"
import { TECH_STACKS } from "../lib/utils";
import { Badge } from "./ui/badge";





const COLORS = ["success", "accent", "danger", "default", "warning"]
const TechStacks = () => {



    return (
        <section >
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-center'>Tech Stack</h1>
            <h2 className="text-base sm:text-lg md:text-xl text-center my-4">Technologies I use to build scalable and production-ready applications.</h2>
            <main className='grid grid-cols-1 sm:grid-cols-3  gap-6 sm:gap-8  mt-12'>
                {
                    TECH_STACKS.map((stack, index) => (
                        <Card key={index} >

                            <CardHeader >
                                <stack.icon className="text-2xl text-primary" />
                                <CardTitle className='text-xl font-bold'>{stack.name}</CardTitle>
                                <CardDescription>
                                    {stack.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-1 ">
                                    {stack.techStack.map((tech, idx) => (
                                        <Badge
                                            key={idx}
                                            variant='outline'
                                            className="bg-primary/75 text-primary-foreground"
                                        >
                                            {tech.name}
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
