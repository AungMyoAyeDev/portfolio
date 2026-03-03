"use client";

import { Button } from '@/src/components/ui/button'
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                aria-label="Toggle theme"
            />
        )
    }


    const isDark = resolvedTheme === "dark"

    return (
        <Button
            variant="outline"
            size="icon"
            className="rounded-full"

            onClick={() => setTheme(isDark ? "light" : "dark")}
        >
            {isDark ? (
                <Sun />
            ) : (
                <Moon />
            )}
        </Button>
    )
}
export default ThemeToggle