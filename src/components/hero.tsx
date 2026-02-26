"use client";

import Link from "next/link"

import { Button } from "@/src/components/ui/button";
import { Download, View } from "lucide-react";
import { SOCIAL_LINKS } from "../lib/utils";




const Hero = () => {
    return (
        <section
            id="portfolio"
            className="min-h-screen py-12 flex flex-col justify-center items-center gap-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tightest leading-[1.05]">I'm Aung Myo Aye</h1>
            <h2 className="mt-4 text-lg sm:text-xl md:text-2xl font-medium text-muted-foreground leading-relaxed">A full stack | Backend focus develper</h2>
            <p >I build structured, scalable web applications with clean architecture and production-ready backend systems.</p>


            <div className="flex items-center gap-4">
                <Button variant='secondary' className={" capitalize "}>
                    <View />
                    view projects</Button>
                <Button variant="default" className={" capitalize "}>
                    <Download />
                    download resume</Button>

            </div>
            <div className="flex items-center gap-4">
                {
                    SOCIAL_LINKS.map(item => (
                        <Button
                            key={item.name}

                            asChild
                            variant="outline"
                            size={'icon'}
                            className="rounded-full"
                        >
                            <Link href={item.link}>
                                <item.icon />
                            </Link>



                        </Button>
                    ))
                }



            </div>

        </section>
    )
}

export default Hero
