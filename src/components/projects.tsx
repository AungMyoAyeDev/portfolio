"use client";
import { Card } from '@heroui/react'
import Image from 'next/image';
import React from 'react'
import Button from './ui/button';

const Projects = () => {
    return (
        <section className='py-6'>
            <h1 className='text-2xl font-bold my-4'>Projects</h1>
            <main className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>

                <Card className='rounded p-0 border shadow'>

                    <div className='relative w-full aspect-video'>
                        <Image
                            src={'/mockup-design.png'}
                            alt='Booking project photo'
                            fill
                            className='aspect-video object-cover'
                        />

                    </div>

                    <Card.Header className='p-2'>




                        <h1 className='text-xl font-bold'>project name</h1>

                        <Button variant='tertiary' className={'rounded'}>View </Button>
                    </Card.Header>


                </Card>

                <Card className='rounded p-0 border shadow'>

                    <div className='relative w-full aspect-video'>
                        <Image
                            src={'/mockup-design.png'}
                            alt='Booking project photo'
                            fill
                            className='aspect-video object-cover'
                        />

                    </div>

                    <Card.Header className='p-2'>




                        <h1 className='text-xl font-bold'>project name</h1>

                        <Button variant='tertiary' className={'rounded'}>View </Button>
                    </Card.Header>


                </Card>

                <Card className='rounded p-0 border shadow'>

                    <div className='relative w-full aspect-video'>
                        <Image
                            src={'/mockup-design.png'}
                            alt='Booking project photo'
                            fill
                            className='aspect-video object-cover'
                        />

                    </div>

                    <Card.Header className='p-2'>




                        <h1 className='text-xl font-bold'>project name</h1>

                        <Button variant='tertiary' className={'rounded'}>View </Button>
                    </Card.Header>


                </Card>

                <Card className='rounded p-0 border shadow'>

                    <div className='relative w-full aspect-video'>
                        <Image
                            src={'/mockup-design.png'}
                            alt='Booking project photo'
                            fill
                            className='aspect-video object-cover'
                        />

                    </div>

                    <Card.Header className='p-2'>




                        <h1 className='text-xl font-bold'>project name</h1>

                        <Button variant='tertiary' className={'rounded'}>View </Button>
                    </Card.Header>


                </Card>

            </main>
        </section>
    )
}

export default Projects