import { Card } from '@/src/components/ui/card'
import Image from 'next/image'



const About = () => {
    return (
        <section
            id="about"
            className=""
        >
            <div className="grid grid-cols-1 md:grid-cols-2  gap-0 max-w-4xl mx-auto">

                <Card className='relative w-full sm:w-sm aspect-square rounded-xl'>
                    <Image
                        src="/ama.jpg"
                        alt="Aung Myo Aye"
                        fill
                        className=" object-cover w-full h-auto aspect-square  p-2 rounded-xl"
                    />

                </Card>

                {/* Soft Glow Background */}



                {/* Content Block */}
                <div className='space-y-6 '>
                    {/* Section Label */}
                    <p className="text-sm tracking-widest uppercase text-primary font-medium">
                        About Me
                    </p>



                    {/* Bio */}
                    <div className=" space-y-4 leading-relaxed">
                        <p>
                            I am a second-year English major at <span className='text-primary'>
                                Yadanabon University  </span>with at <span className='text-primary'>
                                strong technical training    </span>in
                            full-stack development.
                        </p>
                        <p>
                            I focus on building structured <span className='text-primary'>
                                backend systems and scalable
                                front-end
                            </span>  applications. My goal is not just to write code,
                            but to design reliable systems that solve real business problems.
                        </p>
                        <p>
                            I value clarity, performance, and clean architecture. Every
                            project I build is structured for maintainability and growth.
                        </p>


                    </div>



                    {/* Mini Stats */}
                    <div className="mt-4 flex gap-4 text-sm text-default-500">
                        <div>
                            <p className="text-2xl font-bold text-foreground">20+</p>
                            <p>Projects Built</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-foreground">
                                3+  Team</p>
                            <p> Collabration projects</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-foreground">3+ Years</p>
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

