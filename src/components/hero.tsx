import { FcNext } from "react-icons/fc"
import Button from "./ui/button"
import { FaDownload, FaGithub, FaLinkedin, FaMailchimp, FaMobile, FaReact } from "react-icons/fa6"
import ThemeToggle from "./ui/theme-toggle"
import Link from "next/link"
import { MdMail } from "react-icons/md"
import { LuView } from "react-icons/lu"
import { BsArrowDown, BsEyeFill, BsEyeglasses } from "react-icons/bs"

const Hero = () => {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center  gap-4 ">
            <h1 className="font-bold text-4xl capitalize">I'm Aung Myo Aye</h1>
            <h2 className="font-semibold text-2xl capitalize">A full stack | Backend focus develper</h2>
            <p>I build structured, scalable web applications with clean architecture and production-ready backend systems.</p>

            <div className="flex items-center gap-4">
                <Button variant='tertiary' className={"rounded capitalize"}>
                    <BsEyeFill />
                    view projects</Button>
                <Button variant="primary" className={"rounded capitalize"}>
                    <FaDownload />
                    download resume</Button>

            </div>
            <div className="flex items-center gap-4">
                <Link href='/'>
                    <FaGithub />
                </Link>
                <Link href='/'>
                    <MdMail />
                </Link>
                <Link href='/'>
                    <FaLinkedin />
                </Link>
            </div>

        </section>
    )
}

export default Hero