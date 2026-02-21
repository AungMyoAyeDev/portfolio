"use client";
import { ButtonProps, Button as HeroButton } from "@heroui/react"
import { ReactNode } from "react";

interface Props extends ButtonProps {
    text?: string,
    children?: ReactNode,
}
const Button = ({ text, children, ...props }: Props) => {
    return (
        <HeroButton  {...props}>
            {children ?? text}
        </HeroButton>
    )
}

export default Button
