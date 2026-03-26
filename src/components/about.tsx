import { Card, CardContent } from '@/src/components/ui/card'
import Image from 'next/image'



const About = () => {
    return (
        <section
            id="about"
        >
            {/* Section Header */}
            <div className="space-y-4  text-center mb-4">

                <h2 className=" text-3xl lg:text-4xl font-bold">
                    About Me
                </h2>
            </div>
            <Card
                className="max-w-4xl mx-auto "
            >
                <CardContent className='flex flex-col md:flex-row gap-6 md:gap-10'>
                    <div className='relative w-full max-w-sm aspect-square rounded-xl '>
                        <Image
                            src="/aungmyoaye.jpg"
                            alt="Aung Myo Aye"
                            fill
                            className=" object-cover w-full h-auto aspect-square  p-2 rounded-xl"
                        />

                    </div>




                    {/* Content Block */}
                    <div className='flex flex-col justify-between'>
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
                        <div className="mt-4 flex justify-between gap-4 text-sm text-default-500 ">
                            <div>
                                <p
                                    className="text-2xl font-bold text-foreground">
                                    5+
                                </p>
                                <p>Projects Built</p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-foreground">
                                    2+</p>
                                <p>Team Collabration projects</p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-foreground">3+ Years</p>
                                <p>Learning & Building</p>
                            </div>
                        </div>
                    </div>
                </CardContent>

            </Card>
        </section>
    )
}

export default About

// components/sections/AboutSection.tsx

