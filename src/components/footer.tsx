// components/layout/Footer.tsx

import { Download } from "lucide-react";
import Link from "next/link";
import { SOCIAL_LINKS } from "../lib/utils";
import { Button } from "./ui/button";


export default function Footer() {
    return (
        <footer className="relative  border-t border-border bg-background/60 backdrop-blur-xl">

            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">

                {/* Top Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

                    {/* Brand */}
                    <div>
                        <h3 className="text-xl font-bold">
                            Aung Myo Aye
                        </h3>
                        <p className="mt-4 text-default-600 text-sm leading-relaxed">
                            A full stack developer building scalable,
                            production-ready systems with modern technologies.
                        </p>

                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="font-semibold text-sm uppercase tracking-wider">
                            Navigation
                        </h4>
                        <ul className="mt-4 space-y-3 text-sm text-default-600">
                            <li>
                                <Link href="/" className="hover:text-foreground transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="#about" className="hover:text-foreground transition-colors">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="#projects" className="hover:text-foreground transition-colors">
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link href="#contact" className="hover:text-foreground transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h4 className="font-semibold text-sm uppercase tracking-wider">
                            Connect
                        </h4>
                        <ul className="mt-4 space-y-2 text-sm text-default-600">
                            {
                                SOCIAL_LINKS.map(item => (
                                    <li key={item.name}>
                                        <Button variant={'secondary'} size={'icon'} asChild >
                                            <Link
                                                href={item.link}
                                                target="_blank"
                                                className="hover:text-foreground transition-colors"
                                            >
                                                <item.icon />
                                            </Link>
                                        </Button>

                                    </li>
                                ))
                            }


                        </ul>
                    </div>
                </div>

                <div className="flex flex-wrap-reverse gap-4 justify-between mt-6">
                    <small>© 2026 Aung Myo Aye. All rights reserved.</small>
                    <Button variant="default" className={" capitalize "} asChild>
                        <Link href={'/globe.svg'} target="_blank" download>
                            <Download />
                            download resume
                        </Link>


                    </Button>
                </div>
            </div>




        </footer>
    );
}