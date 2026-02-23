import Image from 'next/image'
import React from 'react'
import Button from './ui/button'
import { BsEyeFill } from 'react-icons/bs'
import { FaDownload } from 'react-icons/fa6'

const About = () => {
    return (
        <section className=''>

            <div className='flex gap-12 justify-center items-center py-6'>

                <div className='w-full md:w-2/4 flex flex-col gap-4'>
                    <h1 className='head1'>About Me</h1>
                    <h2 className='font-lg font-semibold text-lg'>
                        Software engineer focused on building scalable, maintainable, and production-ready web applications.
                    </h2>
                    <p>
                        I specialize in backend system design, authentication workflows, booking and payment logic, and structured API development. My approach emphasizes clean architecture, clear separation of concerns, and long-term maintainability.
                    </p>
                    <p>I am comfortable working independently, translating business requirements into technical solutions, and shipping features from planning to deployment.</p>

                    <div className=" flex items-center gap-4">
                        <Button variant='tertiary' className={"rounded capitalize"}>
                            <BsEyeFill />
                            view projects</Button>
                        <Button variant="primary" className={"rounded capitalize text-foreground"}>
                            <FaDownload />
                            download resume</Button>

                    </div>
                </div>
                <aside className=' '>

                    <Image
                        src={'/ama.jpg'}
                        alt='Aung Myo Aye photo'
                        width={300}
                        height={300}
                        className='aspect-square object-cover border-6 border-accent/40 rounded-full shadow shadow-accent'
                    />


                </aside>
            </div>

        </section>
    )
}

export default About