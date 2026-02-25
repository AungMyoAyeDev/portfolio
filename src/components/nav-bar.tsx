// 

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@heroui/react";
import Image from "next/image";
import ThemeToggle from "./ui/theme-toggle";

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


            className={`max-w-6xl mx-auto fixed top-1 left-0 right-0 z-50 rounded-full py-1.5 px-4   transition-all duration-300 flex gap-4 justify-between items-center 
        ${isScrolled
                    ? "bg-background/70 backdrop-blur-xl border-b border-default-200  shadow-sm shadow-accent/10"
                    : "bg-background"
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
                    <span className="text-name font-bold text-lg   uppercase">Aung Myo AYe</span>


                </Link>
            </div>

            {/* Center Navigation */}
            <div className="hidden md:flex gap-2 items-center">
                {
                    NAV_LINKS.map(item => (
                        <Link
                            href={`#${item}`}

                            key={item}
                        >

                            <Button
                                variant='outline'
                                className={' capitalize font-medium hover:bg-accent'}



                            >

                                {item}

                            </Button>
                        </Link>
                    ))
                }

            </div>

            {/* Right Side */}
            <div>
                <ThemeToggle />
            </div>
        </nav>

    );
}