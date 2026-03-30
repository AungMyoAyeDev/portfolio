"use client";

import Link from "next/link"

import { Button } from "@/src/components/ui/button";
import {
    ArrowDown,
    Braces,
    Code2,
    Cpu,
    Database,
    Download,
    Globe,
    Search,
    Target,
} from "lucide-react";
import { SOCIAL_LINKS } from "../lib/utils";
import { Badge } from "./ui/badge";




const Hero = () => {
    const floatingIcons = [
        { Icon: Braces, className: "left-[8%] top-[14%]", tone: "text-primary/55", animation: "float-path-a" },
        { Icon: Database, className: "right-[10%] top-[18%]", tone: "text-emerald-500/45 dark:text-emerald-400/45", animation: "float-path-b" },
        { Icon: Code2, className: "left-[6%] bottom-[28%]", tone: "text-blue-500/45 dark:text-blue-300/45", animation: "float-path-c" },
        { Icon: Globe, className: "right-[7%] bottom-[34%]", tone: "text-amber-500/45 dark:text-amber-300/45", animation: "float-path-a" },
        { Icon: Cpu, className: "left-[24%] top-[8%]", tone: "text-pink-500/40 dark:text-pink-300/40", animation: "float-path-b" },
    ];

    return (
        <section
            id="portfolio"
            className="min-h-screen relative overflow-hidden">
            <div className="pointer-events-none absolute inset-0 hidden sm:block" aria-hidden="true">
                {floatingIcons.map(({ Icon, className, tone, animation }, index) => (
                    <div
                        key={`${animation}-${index}`}
                        className={`floating-tech-icon ${animation} ${className} ${tone}`}
                        style={{
                            animationDelay: `${index * 0.65}s`,
                            animationDuration: `${7 + index * 0.7}s`,
                        }}
                    >
                        <Icon className="h-6 w-6 lg:h-7 lg:w-7" />
                    </div>
                ))}
            </div>
            <div className="relative z-10 flex flex-col gap-6 items-center max-w-4xl mx-auto mt-16">
                <div className="space-y-6 ">
                    <h1 className="capitalize  text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tightest leading-[1.05]">
                        Hello,  I&apos;m Aung Myo Aye
                    </h1>
                    <h2 className="capitalize  text-center  text-lg sm:text-xl md:text-2xl font-medium text-muted-foreground leading-relaxed">
                        Full Stack Software Engineer
                    </h2>
                    <p className="text-center ">
                        I build modern web applications from frontend to infrastructure <br /> Focusing on scalability, security, and long-term maintainability
                    </p>
                </div>

                <div className="flex items-center justify-center flex-wrap gap-4">
                    <Button variant='secondary' className={" capitalize "} asChild>
                        <Link href={'#projects'}>

                            <Search />
                            Explore My Work
                        </Link>
                    </Button>
                    <Button variant="default" className={" capitalize "} asChild>
                        <Link href={'/Aung_Myo_Aye_FullStack_Resume.pdf'} target="_blank" >
                            <Download />
                            View Resume
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
                <Target className="text-xl" /> Avaliable for hire...
            </Badge>


        </section>
    )
}

export default Hero
