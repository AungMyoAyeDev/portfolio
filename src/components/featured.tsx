import Image from 'next/image'
import React from 'react'
import Button from './ui/button'

const Featured = () => {
    return (
        <section className='py-6'>
            <h1 className='text-4xl font-bold my-4'>Feature Project</h1>
            <div className='flex gap-6'>
                <div className='w-full md:w-1/2 relative aspect-video'>
                    <Image
                        src={'/mockup-design.png'}
                        alt='Booking project photo'
                        fill
                        className='aspect-video object-cover'
                    />
                </div>
                <div className='space-y-4'>
                    <h2 className='text-2xl font-bold captilize'>
                        Hotel Booking mangment system
                    </h2>
                    <p>A full-featured booking system designed to handle room reservations, payment tracking, availability control, and booking state management.</p>

                    <p>The system implements secure authentication, role-based access control, automated room lock expiration, and structured booking workflows.</p>

                    <p>This project demonstrates backend architecture planning, transactional logic handling, and deployment-ready system organization.</p>

                    <Button variant='tertiary' className={'rounded'}>View </Button>
                </div>
            </div>

        </section>
    )
}

export default Featured