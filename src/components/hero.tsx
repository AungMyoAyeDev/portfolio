import { FcNext } from "react-icons/fc"
import Button from "./ui/button"
import { FaMobile, FaReact } from "react-icons/fa6"

const Hero = () => {
    return (
        <section className="flex justify-center items-center h-screen gap-5">
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
        </section>
    )
}

export default Hero