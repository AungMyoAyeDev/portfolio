import { BiCode } from "react-icons/bi";
import { FaTools } from "react-icons/fa";
import { FaCode, FaFacebook, FaGithub, FaLinkedinIn, FaReact, FaServer } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { SiJavascript, SiTailwindcss, SiSass, SiRedux, SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiSocketdotio, SiPrisma, SiMongoose } from "react-icons/si";


export const SOCIAL_LINKS = [
    {
        name: "facebook",
        icon: FaFacebook,
        link: "https://www.facebook.com/aung.myo.aye.294573"
    },
    {
        name: "linkedIn",
        icon: FaLinkedinIn,
        link: "https://www.linkedin.com/in/aung-myo-aye-119017311"
    },
    {
        name: "github",
        icon: FaGithub,
        link: "https://github.com/AungMyoAye101"
    },
];

export const TECH_STACKS = [
    {
        name: 'Frontend',
        description: 'Building responsive and interactive user interfaces.',
        icon: FaCode,
        techStack: [
            { name: 'React', icon: FaReact, color: '#61DAFB' },
            { name: 'Next.js', icon: RiNextjsFill, color: '#000000' },
            { name: 'JavaScript', icon: SiJavascript, color: '#c0ac13' },
            { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38B2FF' },
            { name: 'SCSS', icon: SiSass, color: '#CC6699' },
            { name: 'TanStack Query', icon: BiCode, color: '#FF4154' },
            { name: 'Zustand', icon: BiCode, color: '#00A86B' },
            { name: 'Redux', icon: SiRedux, color: '#764ABC' }
        ]
    },
    {
        name: 'Backend',
        description: 'Designing secure APIs and scalable server architecture.',
        icon: FaServer,
        techStack: [
            { name: 'Node.js', icon: SiNodedotjs, color: '#43853d' },
            { name: 'Express', icon: SiExpress, color: '#000000' },
            { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
            { name: 'PostgreSQL', icon: SiPostgresql, color: '#336790' }
        ]
    },
    {
        name: 'DevOps & Tools',
        description: 'Deployment, testing and production optimization.',
        icon: FaTools,
        techStack: [
            { name: 'Socket.IO', icon: SiSocketdotio, color: '#010101' },
            { name: 'Prisma', icon: SiPrisma, color: '#0EA5A4' },
            { name: 'Mongoose', icon: SiMongoose, color: '#C02942' },
            { name: 'JWT', icon: BiCode, color: '#333333' }
        ]
    }
];