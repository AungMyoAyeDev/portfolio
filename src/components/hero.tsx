"use client";

import Link from "next/link"

import { Button } from "@/src/components/ui/button";
import { ArrowDown, Download, Search, Target, } from "lucide-react";
import { SOCIAL_LINKS } from "../lib/utils";
import { Badge } from "./ui/badge";
import Image from "next/image";




const Hero = () => {
    return (
        <section
            id="portfolio"
            className="min-h-screen relative overflow-hidden">
            <div className=" flex flex-col gap-6 items-center max-w-4xl mx-auto mt-16">
                <div className="space-y-6 ">
                    <h1 className="capitalize  text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tightest leading-[1.05]">
                        Hello,  I&apos;m Aung Myo Aye
                    </h1>
                    <h2 className="capitalize  text-center  text-lg sm:text-xl md:text-2xl font-medium text-muted-foreground leading-relaxed">
                        Full Stack Developer | Scalable Web Applications
                    </h2>
                    <p className="text-center ">
                        I build modern web applications from frontend to infrastructure <br /> Focusing on scalability, security, and long-term maintainability
                    </p>
                </div>

                <div className="flex items-center justify-center flex-wrap gap-4">
                    <Button variant='secondary' className={" capitalize "} asChild>
                        <Link href={'mailto:aungmyoayedev@gmail.com'}>

                            <Search />
                            view projects
                        </Link>
                    </Button>
                    <Button variant="default" className={" capitalize "} asChild>
                        <Link href={'/globe.svg'} target="_blank" download>
                            <Download />
                            download resume
                        </Link>


                    </Button>

                </div>
                <div className="flex items-center gap-4">
                    {
                        SOCIAL_LINKS.map(item => (
                            <Button
                                key={item.name}

                                asChild
                                variant="outline"
                                size={'icon'}
                                className="rounded-full hover:-translate-y-1 transition-all ease-in-out "
                            >
                                <Link href={item.link}>
                                    <item.icon className="text-primary" />
                                </Link>

                            </Button>
                        ))
                    }



                </div>

                <Button asChild size={'icon'} variant={'secondary'} className=" mt-4 animate-bounce rounded-full">
                    <Link href={'#about'}>
                        <ArrowDown />
                    </Link>
                </Button>
            </div>
            <Badge
                variant={'outline'}
                className="hidden sm:flex absolute z-10 right-4 bottom-4 text-green-500 animate-pulse"
            >
                <Target className="text-xl" /> Avaliable for hiring...
            </Badge>


        </section>
    )
}

export default Hero
