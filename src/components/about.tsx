import { Card, CardContent } from '@/src/components/ui/card'
import Image from 'next/image'
import { Atom, CodeXml, Layers3, ServerCog, Workflow } from 'lucide-react'
import ScrollReveal from './scroll-reveal'



const About = () => {
    const floatingIcons = [
        { Icon: Atom, className: "left-[5%] top-[18%]", tone: "text-cyan-500/45 dark:text-cyan-300/45", animation: "float-path-b" },
        { Icon: ServerCog, className: "right-[7%] top-[20%]", tone: "text-primary/50", animation: "float-path-a" },
        { Icon: Workflow, className: "left-[10%] bottom-[18%]", tone: "text-orange-500/45 dark:text-orange-300/45", animation: "float-path-c" },
        { Icon: CodeXml, className: "right-[6%] bottom-[22%]", tone: "text-blue-500/45 dark:text-blue-300/45", animation: "float-path-b" },
        { Icon: Layers3, className: "right-[22%] top-[12%]", tone: "text-violet-500/40 dark:text-violet-300/40", animation: "float-path-a" },
    ];

    return (
        <section
            id="about"
            className='relative overflow-hidden'
        >
            <div className="pointer-events-none absolute inset-0 hidden sm:block" aria-hidden="true">
                {floatingIcons.map(({ Icon, className, tone, animation }, index) => (
                    <div
                        key={`${animation}-${index}`}
                        className={`floating-tech-icon ${animation} ${className} ${tone}`}
                        style={{
                            animationDelay: `${0.35 + index * 0.55}s`,
                            animationDuration: `${7.5 + index * 0.6}s`,
                        }}
                    >
                        <Icon className="h-6 w-6 lg:h-7 lg:w-7" />
                    </div>
                ))}
            </div>
            {/* Section Header */}
            <ScrollReveal className="relative z-10 space-y-4 text-center mb-4">

                <h2 className=" text-3xl lg:text-4xl font-bold">
                    About Me
                </h2>
            </ScrollReveal>
            <ScrollReveal variant='pop' delay={90}>
                <Card
                    className="relative z-10 max-w-4xl mx-auto "
                >
                    <CardContent className='flex flex-col md:flex-row gap-6 md:gap-10'>
                        <div className='scroll-image relative w-full max-w-sm aspect-square rounded-xl mx-auto '>
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
                                    I’m a second-year English major at
                                    <span className='text-primary'> Yadanabon University </span>
                                    and a self-taught
                                    <span className='text-primary'> Full-Stack developer </span>
                                    with a strong focus on building real-world applications.


                                </p>
                                <p>
                                    I specialize in developing structured backend systems and
                                    <span className='text-primary'> scalable</span>, user-focused front-end applications using modern web technologies. Beyond writing code, I focus on  <span className='text-primary'> designing reliable systems </span> that solve practical business problems.
                                </p>
                                <p>
                                    I care deeply about
                                    <span className='text-primary'>  clean architecture, performance, </span> and    <span className='text-primary'> maintainability </span>. Every project I build is designed with long-term    <span className='text-primary'> scalability  </span>in mind, not just short-term functionality.
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
                                    <p>Team Collaborations</p>
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-foreground">3+ Years</p>
                                    <p>Learning & Building</p>
                                </div>
                            </div>
                        </div>
                    </CardContent>

                </Card>
            </ScrollReveal>
        </section>
    )
}

export default About

// components/sections/AboutSection.tsx

