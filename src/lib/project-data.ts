export const FEATURE_PROJECTS = [
    {
        title: "Utility Management System",
        shortDescription:
            "Role-based system for managing billing, payments, and service records with secure API architecture.",
        description:
            "Role-based system for managing billing, payments, and service records with secure API architecture.",
        image: "/projects/ums.jpg",

        techStacks: [
            { name: 'React', icon: '/icons/react.svg', },
            { name: 'TailwindCss', icon: '/icons/tailwindcss.svg', },
            { name: 'Node.js', icon: '/icons/nodejs.svg' },
            { name: 'Express', icon: '/icons/expressjs.svg' },
            { name: 'PostgreSQL', icon: '/icons/postgresql.svg' },
            { name: "Prisma", icon: "/icons/prisma.svg" },

        ],
        keyFeatures: [
            "Role-based access control (Admin, Staff, Customer)",
            "Automated billing and invoice generation",
            "Payment tracking and transaction history",
            "Service request and record management",
            "Secure RESTful API with validation layer",
            "Modular backend architecture for scalability"
        ],
        links: {
            live: "https://tenant-web-app-omega.vercel.app/",
            live2: "https://utility-management-system-dashboard.vercel.app",
            github: "https://github.com/AungMyoAye101/ums-dashboard",

        },
    },
    {
        title: "Hotel Booking System",
        shortDescription: "A full-stack booking platform with authentication, room management, availability tracking, and secure payment-ready architecture.",
        description:
            "A production-style hotel reservation platform built with MERN and Next.js (BFF architecture), featuring secure booking workflows, advanced filtering, role-based dashboards, and scalable API design. Deployed and structured to simulate real-world  operations.",
        image: "/projects/booking.png",
        techStacks: [
            { name: 'React', icon: '/icons/react.svg', },
            { name: 'Nextjs', icon: '/icons/nextjs.svg', },
            { name: 'TailwindCss', icon: '/icons/tailwindcss.svg', },
            { name: 'Node.js', icon: '/icons/nodejs.svg', },
            { name: 'Express', icon: '/icons/expressjs.svg', },
            { name: 'MongoDB', icon: '/icons/mongodb.svg', },

        ],
        keyFeatures: [
            "Hotel , room ,booking and payment managment",
            "Secure room booking workflow",
            "User review and rating system",
            "Room inventory and pricing control",


        ],
        links: {
            live: "https://hotel-booking-virid-two.vercel.app",
            live2: "https://booking-dashboard-one.vercel.app",
            github: "https://github.com/AungMyoAye101/hotel-booking"
        },
    },
]


export const PROJECTS = [
    {
        title: "Utility Management System",
        shortDescription:
            "Role-based system for managing billing, payments, and service records with secure API architecture.",

        fullDescription:
            "A scalable utility management platform designed to handle billing cycles, payment tracking, and service record management with structured role-based access control and secure backend architecture.",

        image: "/projects/ums.jpg",

        keyFeatures: [
            "Role-based access control (Admin, Staff, Customer)",
            "Automated billing and invoice generation",
            "Payment tracking and transaction history",
            "Service request and record management",
            "Secure RESTful API with validation layer",
            "Modular backend architecture for scalability"
        ],

        techStacks: [
            { name: 'React', icon: '/icons/react.svg', },
            { name: 'TailwindCss', icon: '/icons/tailwindcss.svg', },
            { name: 'Node.js', icon: '/icons/nodejs.svg' },
            { name: 'Express', icon: '/icons/expressjs.svg' },
            { name: 'PostgreSQL', icon: '/icons/postgresql.svg' },
            { name: "Prisma", icon: "/icons/prisma.svg" },

        ],

        links: {
            live: "/",
            github: "/",
        },
    },

    // {
    //     title: "Real-Time Chat App",
    //     shortDescription:
    //         "Socket.IO powered messaging app with typing indicators, read receipts and file uploads.",

    //     fullDescription:
    //         "A real-time messaging platform supporting user-to-user and group communication with persistent message storage and live interaction features.",

    //     image: "/projects/chat.jpg",

    //     keyFeatures: [
    //         "Real-time messaging using Socket.IO",
    //         "Typing indicators and read receipts",
    //         "User-to-user and group chat support",
    //         "File upload and media sharing",
    //         "Persistent message history with MongoDB",
    //         "JWT-based authentication with protected routes"
    //     ],

    //     techStacks: [
    //         { name: 'React', icon: '/icons/react.svg', },
    //         { name: 'TailwindCss', icon: '/icons/tailwindcss.svg', },
    //         { name: 'Node.js', icon: '/icons/nodejs.svg' },
    //         { name: 'Express', icon: '/icons/expressjs.svg' },
    //         { name: 'MongoDB', icon: '/icons/mongodb.svg' },
    //         { name: "Mongoose", icon: "/icons/mongoose.svg" },

    //     ],

    //     links: {
    //         live: "/",
    //         github: "/",
    //     },
    // },

    // {
    //     title: "Authentication System",
    //     shortDescription:
    //         "Reusable authentication module using JWT, bcrypt and secure cookie handling.",

    //     fullDescription:
    //         "A secure and reusable authentication module implementing JWT-based access control, password hashing, and HTTP-only cookie management for modern web applications.",

    //     image: "/projects/mern-auth.jpg",

    //     keyFeatures: [
    //         "JWT access and refresh token implementation",
    //         "Password hashing using bcrypt",
    //         "HTTP-only cookie authentication",
    //         "Role-based authorization middleware",
    //         "Input validation with structured schemas",
    //         "Reusable authentication architecture"
    //     ],

    //     techStacks: [
    //         { name: 'Node.js', icon: '/icons/nodejs.svg' },
    //         { name: 'Express', icon: '/icons/expressjs.svg' },
    //         { name: 'MongoDB', icon: '/icons/mongodb.svg' },
    //         { name: "Mongoose", icon: "/icons/mongoose.svg" },
    //         { name: 'PostgreSQL', icon: '/icons/postgresql.svg' },
    //         { name: "Prisma", icon: "/icons/prisma.svg" },
    //         { name: "Firebase", icon: "/icons/firebase.svg" }
    //     ],

    //     links: {
    //         live: "/",
    //         github: "/",
    //     },
    // },

    {
        title: "Hotel Booking System",
        shortDescription:
            "Full-stack booking platform with JWT authentication, room availability tracking and admin dashboard.",

        fullDescription:
            "A production-style hotel reservation platform built with MERN and Next.js (BFF architecture), featuring secure booking workflows, advanced filtering, and a role-based admin dashboard.",

        image: "/projects/booking.png",

        keyFeatures: [
            "Advanced hotel filtering (destination, price, rating)",
            "Room availability tracking and booking validation logic",
            "Booking status management (pending, confirmed, cancelled)",
            "Role-based admin dashboard for hotel and room management",
            "JWT authentication with secure cookie handling",
            "Demo payment integration with scalable API design"
        ],

        techStacks: [
            { name: 'React', icon: '/icons/react.svg', },
            { name: 'Nextjs', icon: '/icons/nextjs.svg', },
            { name: 'TailwindCss', icon: '/icons/tailwindcss.svg', },
            { name: 'Node.js', icon: '/icons/nodejs.svg', },
            { name: 'Express', icon: '/icons/expressjs.svg', },
            { name: 'MongoDB', icon: '/icons/mongodb.svg', },

        ],

        links: {
            live: "https://hotel-booking-virid-two.vercel.app",
            live2: "https://booking-dashboard-one.vercel.app",
            github: "https://github.com/AungMyoAye101/hotel-booking"
        },
    }
];