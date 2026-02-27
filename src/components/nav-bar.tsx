// 

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import Image from "next/image";
import ThemeToggle from "./ui/theme-toggle";
import { Button } from "@/src/components/ui/button";

const NAV_LINKS = [
    "portfolio", "about", "projects", "contact"
]

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (


        <nav
            className={`max-w-6xl mx-auto fixed top-1 left-0 right-0 z-50 rounded-full py-1.5 px-4 border border-border   transition-all duration-300 flex gap-4 justify-between items-center 
        ${isScrolled
                    ? "bg-card/70 backdrop-blur-xl  shadow-sm shadow-accent/10"
                    : "bg-card"
                }`}
        >
            {/* Brand */}
            <div >
                <Link href="/" className="flex items-center gap-1 ">
                    <Image
                        src={'/ama.jpg'}
                        alt="aung myo aye photo"
                        width={40}
                        height={40}
                        className="rounded-full object-cover w-10 h-10"
                    />
                    <span className="text-primary  font-bold text-lg   uppercase hidden md:block">Aung Myo AYe</span>


                </Link>
            </div>

            {/* Center Navigation */}
            <div className="hidden md:flex gap-2 items-center">
                {
                    NAV_LINKS.map(item => (
                        <Button
                            asChild

                            variant='outline'

                            size={'sm'}
                            key={item}
                            className="rounded-full capitalize"
                        >
                            <Link
                                href={`#${item}`}


                            >

                                {item}
                            </Link>


                        </Button>

                    ))
                }

            </div>

            {/* Right Side */}
            <div className="flex items-center gap-2">
                <ThemeToggle />
                <Button
                    className="rounded-full"
                >
                    Let's contact
                </Button>
            </div>
        </nav>

    );
}