import Link from 'next/link'
import React from 'react'
import ThemeToggle from './ui/theme-toggle'
import Image from 'next/image'
import Button from './ui/button'

const NavBar = () => {
    return (
        <header>
            <nav className='flex justify-between px-4 py-2 fixed top-0 left-0 right-0 max-w-7xl mx-auto z-50 backdrop-blur-sm bg-background/25'>
                <Link href={'/'} className='flex items-center gap-2'>
                    <Image
                        src={'/globe.svg'}
                        alt='Aung Myo Aye profile photo'
                        width={25}
                        height={25}
                        className='object-cover rounded-full '
                    />
                    <h1 className='text-xl font-bold text-accent'>Aung Myo Aye</h1>
                </Link>
                <div className='flex items-center gap-2 text-foreground'>

                    <Button variant='tertiary' size='sm' className={"rounded-sm"}>
                        Portfolio
                    </Button>
                    <Button variant='tertiary' size='sm' className={"rounded-sm"}>
                        Portfolio
                    </Button>
                    <Button variant='tertiary' size='sm' className={"rounded-sm"}>
                        Portfolio
                    </Button>
                    <Button variant='tertiary' size='sm' className={"rounded-sm"}>
                        Portfolio
                    </Button>

                </div>
                <ThemeToggle />
            </nav>
        </header>
    )
}

export default NavBar