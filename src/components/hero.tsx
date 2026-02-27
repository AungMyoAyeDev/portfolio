"use client";

import Link from "next/link"

import { Button } from "@/src/components/ui/button";
import { ArrowDown, Download, Search, Target, } from "lucide-react";
import { SOCIAL_LINKS } from "../lib/utils";
import { Badge } from "./ui/badge";




const Hero = () => {
    return (
        <main
            id="portfolio"
            className="min-h-screen  flex flex-col justify-center  items-center gap-6 relative ">
            <div className="space-y-4 ">


                <h1 className="capitalize  text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tightest leading-[1.05]">
                    I&apos;m Aung Myo Aye
                </h1>
                <h2 className="capitalize  text-center  text-lg sm:text-xl md:text-2xl font-medium text-muted-foreground leading-relaxed">
                    A full stack | Backend focus developer
                </h2>
                <p className="text-center">
                    I build structured,
                    scalable web applications  <br /> with clean architecture and
                    production-ready backend systems.
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

            <Button asChild size={'icon'} variant={'secondary'} className="animate-bounce rounded-full">
                <Link href={'#about'}>
                    <ArrowDown />
                </Link>
            </Button>
            <Badge variant={'outline'} className="absolute z-10 right-4 bottom-28 text-green-500">
                <Target className="text-xl" /> Avaliable for hiring...
            </Badge>
        </main>
    )
}

export default Hero
