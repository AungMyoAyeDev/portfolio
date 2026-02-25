"use client";

import { Button } from '@/components/ui/button'
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';


const ThemeToggle = () => {
    const { theme, setTheme } = useTheme()

    return (
        <Button variant='outline' size={'icon'} className={"rounded-full "}
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
            {theme === "light" ?
                <Moon />
                : <Sun />}
        </Button>
    )
}

export default ThemeToggle