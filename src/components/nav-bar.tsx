// 

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@heroui/react";


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


            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex gap-4 justify-between items-center p-4
        ${isScrolled
                    ? "bg-background/70 backdrop-blur-xl border-b border-default-200 shadow-sm"
                    : "bg-transparent"
                }`}
        >
            {/* Brand */}
            <div >
                <div>
                    <Link href="/" className="font-bold text-lg tracking-tight">
                        Aung Myo Aye
                    </Link>
                </div>
            </div>

            {/* Center Navigation */}
            <div className="hidden md:flex gap-8">
                <div>
                    <Link href="#about" className="text-sm text-default-600 hover:text-foreground transition-colors">
                        About
                    </Link>
                </div>
                <div>
                    <Link href="#projects" className="text-sm text-default-600 hover:text-foreground transition-colors">
                        Projects
                    </Link>
                </div>
                <div>
                    <Link href="#contact" className="text-sm text-default-600 hover:text-foreground transition-colors">
                        Contact
                    </Link>
                </div>
            </div>

            {/* Right Side */}
            <div>
                <div>
                    <Button

                    >
                        Hire Me
                    </Button>
                </div>
            </div>
        </nav>
    );
}