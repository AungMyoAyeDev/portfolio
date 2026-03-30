"use client";

import { cn } from "@/src/lib/utils";
import { type ReactNode, useEffect, useRef, useState } from "react";

type RevealVariant = "up" | "pop";

type ScrollRevealProps = {
    children: ReactNode;
    className?: string;
    delay?: number;
    variant?: RevealVariant;
};

export default function ScrollReveal({
    children,
    className,
    delay = 0,
    variant = "up",
}: ScrollRevealProps) {
    const ref = useRef<HTMLDivElement | null>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (!entry) return;
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(node);
                }
            },
            {
                threshold: 0.2,
                rootMargin: "0px 0px -40px 0px",
            }
        );

        observer.observe(node);

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            style={{ transitionDelay: `${delay}ms` }}
            className={cn(
                "scroll-reveal",
                variant === "up" ? "reveal-up" : "reveal-pop",
                visible && "is-visible",
                className
            )}
        >
            {children}
        </div>
    );
}
