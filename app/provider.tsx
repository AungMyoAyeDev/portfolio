"use client";
import { ReactNode } from 'react'
import { HeroUIProvider } from '@heroui/react'

const Provider = ({ children }: { children: ReactNode }) => {
    return (
        <HeroUIProvider>
            {children}
        </HeroUIProvider>
    )
}

export default Provider