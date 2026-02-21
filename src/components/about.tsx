import Image from 'next/image'
import React from 'react'
import Button from './ui/button'
import { BsEyeFill } from 'react-icons/bs'
import { FaDownload } from 'react-icons/fa6'

const About = () => {
    return (
        <section className='py-6 flex flex-col md:flex-row gap-6   '>
            <aside className='w-full md:w-1/2 flex justify-center   '>
                <Image
                    src={'/linn lat aung.jpg'}
                    alt='Aung Myo Aye photo'
                    width={300}
                    height={400}
                    className=' object-cover aspect-square h-auto w-sm'
                />
            </aside>
            <div className='flex-1 space-y-4'>
                <h1 className='font-lg font-semibold'>
                    Software engineer focused on building scalable, maintainable, and production-ready web applications.
                </h1>
                <p>
                    I specialize in backend system design, authentication workflows, booking and payment logic, and structured API development. My approach emphasizes clean architecture, clear separation of concerns, and long-term maintainability.
                </p>
                <p>I am comfortable working independently, translating business requirements into technical solutions, and shipping features from planning to deployment.</p>

                <div className="flex items-center gap-4">
                    <Button variant='tertiary' className={"rounded capitalize"}>
                        <BsEyeFill />
                        view projects</Button>
                    <Button variant="primary" className={"rounded capitalize"}>
                        <FaDownload />
                        download resume</Button>

                </div>
            </div>
        </section>
    )
}

export default About