import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

import { Code, Facebook, Github, Icon, Linkedin, LucidePenTool, Server, Settings, TicketCheck, Toolbox, ToolCase } from "lucide-react";



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
    icon: Code,
    techStack: [
      { name: 'React', icon: TicketCheck, color: '#61DAFB' },
      { name: 'Next.js', icon: Icon, color: '#000000' },
      { name: 'JavaScript', icon: Icon, color: '#c0ac13' },
      { name: 'Tailwind CSS', icon: Icon, color: '#38B2FF' },
      { name: 'SCSS', icon: Icon, color: '#CC6699' },
      { name: 'TanStack Query', icon: Icon, color: '#FF4154' },
      { name: 'Zustand', icon: Icon, color: '#00A86B' },
      { name: 'Redux', icon: Icon, color: '#764ABC' }
    ]
  },
  {
    name: 'Backend',
    description: 'Designing secure APIs and scalable server architecture.',
    icon: Server,
    techStack: [
      { name: 'Node.js', icon: Icon, color: '#43853d' },
      { name: 'Express', icon: Icon, color: '#000000' },
      { name: 'MongoDB', icon: Icon, color: '#47A248' },
      { name: 'PostgreSQL', icon: Icon, color: '#336790' }
    ]
  },
  {
    name: 'DevOps & Tools',
    description: 'Deployment, testing and production optimization.',
    icon: Settings,
    techStack: [
      { name: 'Socket.IO', icon: Icon, color: '#010101' },
      { name: 'Prisma', icon: Icon, color: '#0EA5A4' },
      { name: 'Mongoose', icon: Icon, color: '#C02942' },
      { name: 'JWT', icon: Icon, color: '#333333' }
    ]
  }
];
