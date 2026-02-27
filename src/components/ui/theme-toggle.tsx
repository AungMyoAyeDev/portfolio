"use client";

import { Button } from '@/src/components/ui/button'
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';


const ThemeToggle = () => {
    const { resolvedTheme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <Button
                variant='outline'
                size={'icon'}
                className={"rounded-full "}
                aria-label="Toggle theme"
            />
        )
    }

    return (
        <Button variant={'secondary'} size={'icon'} className={"rounded-full "}
            onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
            aria-label="Toggle theme"
        >
            {resolvedTheme === "light" ?
                <Moon />
                : <Sun />}
        </Button>
    )
}

export default ThemeToggle
