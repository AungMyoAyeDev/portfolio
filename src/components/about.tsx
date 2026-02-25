import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'

import { BsEyeFill } from 'react-icons/bs'
import { FaDownload } from 'react-icons/fa6'


const About = () => {
    return (
        <section
            id="about"
            className="min-h-screen relative py-24 px-6 lg:px-8 max-w-6xl mx-auto"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                <Card className='relative w-full aspect-square p-4'>
                    <Image
                        src="/ama.jpg"
                        alt="Aung Myo Aye"
                        fill
                        className=" object-cover w-full h-auto aspect-square rounded-xl"
                    />

                </Card>

                {/* Soft Glow Background */}
                {/* <div className="absolute -z-10 inset-0 bg-gradient-to-br from-violet-500/20 to-transparent blur-3xl" /> */}


                {/* Content Block */}
                <div>
                    {/* Section Label */}
                    <p className="text-sm tracking-widest uppercase text-primary font-medium">
                        About Me
                    </p>

                    {/* Heading */}
                    <h2 className="mt-4 text-3xl lg:text-4xl font-bold leading-tight">
                        Backend-Focused Full Stack Developer
                        <span className="block text-default-500 text-lg font-medium mt-2">
                            Building Scalable & Real-World Systems
                        </span>
                    </h2>

                    {/* Bio */}
                    <div className="mt-6 space-y-4 text-default-600 leading-relaxed">
                        <p>
                            I am a second-year English major with strong technical training in
                            full-stack development. My primary focus is backend architecture,
                            authentication systems, and scalable application design.
                        </p>

                        <p>
                            I build real-world systems including booking platforms and utility
                            management systems, applying clean code principles and modern
                            development practices.
                        </p>

                        <p>
                            My goal is to contribute to remote and international teams by
                            delivering reliable, production-ready software.
                        </p>
                    </div>



                    {/* Mini Stats */}
                    <div className="mt-4 flex gap-10 text-sm text-default-500">
                        <div>
                            <p className="text-2xl font-bold text-foreground">10+</p>
                            <p>Projects Built</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-foreground">2</p>
                            <p>Flagship Systems</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-foreground">2+ Years</p>
                            <p>Learning & Building</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About

// components/sections/AboutSection.tsx

