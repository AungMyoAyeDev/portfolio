"use client";

import { FcNext } from "react-icons/fc"
import { FaDownload, FaGithub, FaLinkedin, FaMailchimp, FaMobile, FaReact } from "react-icons/fa6"
import Link from "next/link"
import { MdMail } from "react-icons/md"
import { LuView } from "react-icons/lu"
import { BsArrowDown, BsEyeFill, BsEyeglasses } from "react-icons/bs"
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ui/theme-toggle";


const Hero = () => {
    return (
        <section
            id="portfolio"
            className="min-h-screen py-12 flex flex-col justify-center items-center gap-4">
            <ThemeToggle />
            <h1 className="font-bold text-6xl capitalize">I'm Aung Myo Aye</h1>
            <h2 className="font-semibold text-4xl capitalize">A full stack | Backend focus develper</h2>
            <p className="text-primary">I build structured, scalable web applications with clean architecture and production-ready backend systems.</p>

            <div className="flex items-center gap-4">
                <Button variant='outline' className={"rounded capitalize border-accent"}>
                    <BsEyeFill />
                    view projects</Button>
                <Button variant="default" className={"rounded capitalize "}>
                    <FaDownload />
                    download resume</Button>

            </div>
            <div className="flex items-center gap-4">

                <Button variant="secondary">

                    <FaGithub />
                </Button>


                <Button variant="secondary">

                    <MdMail />
                </Button>

                <Button variant="secondary">

                    <FaLinkedin />
                </Button>

            </div>

        </section>
    )
}

export default Hero
