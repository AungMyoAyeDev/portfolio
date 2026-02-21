"use client";

import { useEffect, useState } from "react";
import { Switch } from "@heroui/react";
import { LuMoon, LuSun } from "react-icons/lu";

type Theme = "light" | "dark";

export default function ThemeToggle() {
    const [theme, setTheme] = useState<Theme>("light");
    const [mounted, setMounted] = useState(false);

    // On mount → detect saved or system theme
    useEffect(() => {
        const saved = localStorage.getItem("theme") as Theme | null;

        if (saved) {
            setTheme(saved);
            document.documentElement.setAttribute("data-theme", saved);
        } else {
            const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            const initial = systemDark ? "dark" : "light";
            setTheme(initial);
            document.documentElement.setAttribute("data-theme", initial);
        }

        setMounted(true);
    }, []);

    // Toggle handler
    const handleChange = () => {
        const newTheme: Theme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    };

    if (!mounted) return null; // Prevent hydration mismatch

    return (
        <Switch
            isSelected={theme === "dark"}
            onChange={handleChange}
            size="lg"

        >
            <Switch.Control>
                <Switch.Thumb>
                    <Switch.Icon>
                        {theme === "dark" ? (
                            <LuSun className="size-3 text-inherit opacity-100" />
                        ) : (
                            <LuMoon className="size-3 text-inherit opacity-70" />
                        )}
                    </Switch.Icon>

                </Switch.Thumb>
            </Switch.Control>
        </Switch >
    );
}