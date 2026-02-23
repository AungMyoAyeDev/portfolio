// components/layout/Footer.tsx

import Link from "next/link";


export default function Footer() {
    return (
        <footer className="relative mt-24 border-t border-default-200 bg-background/60 backdrop-blur-xl">
            <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">

                {/* Top Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

                    {/* Brand */}
                    <div>
                        <h3 className="text-xl font-bold">
                            Aung Myo Aye
                        </h3>
                        <p className="mt-4 text-default-600 text-sm leading-relaxed">
                            Backend-focused full stack developer building scalable,
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
                        <ul className="mt-4 space-y-3 text-sm text-default-600">
                            <li>
                                <Link
                                    href="https://github.com/"
                                    target="_blank"
                                    className="hover:text-foreground transition-colors"
                                >
                                    GitHub
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="https://linkedin.com/"
                                    target="_blank"
                                    className="hover:text-foreground transition-colors"
                                >
                                    LinkedIn
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="mailto:aungmyoaye@email.com"
                                    className="hover:text-foreground transition-colors"
                                >
                                    Email
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>



                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between text-sm text-default-500 gap-4">
                    <p>
                        © {new Date().getFullYear()} Aung Myo Aye. All rights reserved.
                    </p>
                    <p>
                        Built with Next.js & HeroUI v3
                    </p>
                </div>
            </div>

            {/* Subtle Background Glow */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-violet-500/5 to-transparent blur-3xl" />
        </footer>
    );
}