"use client";



import { Button } from "@/components/ui/button";
import { TECH_STACKS } from "../lib/utitly";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"





const COLORS = ["success", "accent", "danger", "default", "warning"]
const TechStacks = () => {



    return (
        <section className="min-h-screen py-12">
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-center'>Tech Stack</h1>
            <h2 className="text-base sm:text-lg md:text-xl text-center">Technologies I use to build scalable and production-ready applications.</h2>
            <main className='grid grid-cols-1 sm:grid-cols-3  gap-4 my-4'>
                {
                    TECH_STACKS.map((stack, index) => (
                        <Card key={index} >

                            <CardHeader >
                                <stack.icon className="text-4xl text-primary" />
                                <CardTitle className='text-xl font-bold'>{stack.name}</CardTitle>
                                <CardDescription>
                                    {stack.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-1 ">
                                    {stack.techStack.map((tech, idx) => (
                                        <Button
                                            key={idx}
                                            variant='outline'
                                            size="sm"
                                        >
                                            <tech.icon
                                                className="text-lg"
                                                style={{ color: tech.color }}
                                            />
                                            <span className="text-xs" >{tech.name}</span>
                                        </Button>
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
