import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

import { Facebook, Github, icons, LayoutPanelLeft, Linkedin, Server, Settings, } from "lucide-react";



export const SOCIAL_LINKS = [
  {
    name: "facebook",
    icon: Facebook,
    link: "https://www.facebook.com/aung.myo.aye.294573"
  },
  {
    name: "linkedIn",
    icon: Linkedin,
    link: "https://www.linkedin.com/in/aung-myo-aye-119017311"
  },
  {
    name: "github",
    icon: Github,
    link: "https://github.com/AungMyoAye101"
  },
];

export const TECH_STACKS = [
  {
    name: 'Frontend',
    description: 'Building responsive and interactive user interfaces.',
    icon: LayoutPanelLeft,
    techStack: [

      { name: 'JavaScript', icon: '/icons/js.svg' },
      { name: "TypeScript", icon: "/icons/typescript.svg" },
      { name: 'React', icon: '/icons/react.svg', },
      { name: 'Next.js', icon: 'icons/nextjs.svg', },
      { name: "Css", icon: '/icons/css3.svg' },
      { name: 'Tailwind CSS', icon: '/icons/tailwindcss.svg', },


    ]
  },

  {
    name: 'Backend',
    description: 'Designing secure APIs and scalable server architecture.',
    icon: Server,
    techStack: [
      { name: 'Node.js', icon: '/icons/nodejs.svg', },
      { name: 'Express', icon: '/icons/expressjs.svg', },
      { name: "NestJs", icon: "/icons/nestjs.svg" },
      { name: 'MongoDB', icon: '/icons/mongodb.svg', },
      { name: 'PostgreSQL', icon: '/icons/postgresql.svg' },
      { name: "Prisma", icon: "/icons/prisma.svg" },

    ]
  },
  {
    name: 'DevOps & Tools',
    description: 'Deployment, testing and production optimization.',
    icon: Settings,
    techStack: [
      { name: "Git", icon: "/icons/git.svg" },
      { name: "Jest", icon: "/icons/jest.svg" },
      { name: "Docker", icon: "/icons/docker.svg" },

      { name: "Sentry", icon: "/icons/sentry.svg" },
    ]
  }
];

export const projects = [
  {
    title: "Hotel Booking System",
    description:
      "Full-stack booking platform with JWT authentication, room availability tracking and admin dashboard.",
    image: "/projects/hotel.png",
    techStack: [
      { name: 'Node.js', icon: '/icons/nodejs.svg', },
      { name: 'Express', icon: '/icons/expressjs.svg', },
      { name: 'MongoDB', icon: '/icons/mongodb.svg', },
      { name: "Mongoose", icon: "/icons/mongoose.svg" },
      { name: 'PostgreSQL', icon: '/icons/postgresql.svg' },
      { name: "Prisma", icon: "/icons/prisma.svg" },
      { name: "Firebase", icon: "/icons/firebase.svg" }
    ],
    link: "#",
  },
  {
    title: "Utility Management System",
    description:
      "Role-based system for managing billing, payments, and service records with secure API architecture.",
    image: "/projects/utility.png",
    techStack: [
      { name: 'Node.js', icon: '/icons/nodejs.svg', },
      { name: 'Express', icon: '/icons/expressjs.svg', },
      { name: 'MongoDB', icon: '/icons/mongodb.svg', },
      { name: "Mongoose", icon: "/icons/mongoose.svg" },
      { name: 'PostgreSQL', icon: '/icons/postgresql.svg' },
      { name: "Prisma", icon: "/icons/prisma.svg" },
      { name: "Firebase", icon: "/icons/firebase.svg" }
    ],
    link: "#",
  },
  {
    title: "Real-Time Chat App",
    description:
      "Socket.IO powered messaging app with typing indicators, read receipts and file uploads.",
    image: "/projects/chat.png",
    techStack: [
      { name: 'Node.js', icon: '/icons/nodejs.svg', },
      { name: 'Express', icon: '/icons/expressjs.svg', },
      { name: 'MongoDB', icon: '/icons/mongodb.svg', },
      { name: "Mongoose", icon: "/icons/mongoose.svg" },
      { name: 'PostgreSQL', icon: '/icons/postgresql.svg' },
      { name: "Prisma", icon: "/icons/prisma.svg" },
      { name: "Firebase", icon: "/icons/firebase.svg" }
    ],
    link: "#",
  },
  {
    title: "Authentication System",
    description:
      "Reusable authentication module using JWT, bcrypt and secure cookie handling.",
    image: "/projects/auth.png",
    techStack: [
      { name: 'Node.js', icon: '/icons/nodejs.svg', },
      { name: 'Express', icon: '/icons/expressjs.svg', },
      { name: 'MongoDB', icon: '/icons/mongodb.svg', },
      { name: "Mongoose", icon: "/icons/mongoose.svg" },
      { name: 'PostgreSQL', icon: '/icons/postgresql.svg' },
      { name: "Prisma", icon: "/icons/prisma.svg" },
      { name: "Firebase", icon: "/icons/firebase.svg" }
    ],
    link: "#",
  },
];