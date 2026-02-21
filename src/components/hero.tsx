import { FcNext } from "react-icons/fc"
import Button from "./ui/button"
import { FaMobile, FaReact } from "react-icons/fa6"
import ThemeToggle from "./ui/theme-toggle"

const Hero = () => {
    return (
        <section className="flex flex-col justify-center items-center h-screen gap-5 bg-background">
            <Button variant="tertiary" isIconOnly className={"rounded "}>
                <FaReact />

            </Button>
            <Button variant='secondary' className={"rounded "}>
                Button

            </Button>
            <Button variant='outline' className={"rounded "}>
                hello

            </Button>
            <Button variant='ghost' className={"rounded "}>
                <FaMobile />
                hello

            </Button>
            <Button variant='danger' className={"rounded "}>
                <FcNext />
                hello

            </Button>
            <ThemeToggle />
            <div className="text-primary-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, molestiae corporis, veritatis et in, ex at ratione earum hic vero unde odio sint! Reprehenderit illo saepe doloremque repellendus amet. Dolorum.
            </div>
            <div className="w-20 h-20 bg-accent-soft-foreground">

            </div>
        </section>
    )
}

export default Hero