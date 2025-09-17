export const NavLinks = [
  { id: 1, link: "#", name: "Home" },
  { id: 2, link: "#skill", name: "Skills" },
  { id: 3, link: "#project", name: "Projects" },
  { id: 4, link: "#about", name: "About" },
  { id: 5, link: "#contact", name: "Contact" },
];

export const skills = [
  {
    id: 1,
    image: "/design.png",
    title: " UI & UX Design",
    description:
      " UI/UX design expertise with a focus on user-friendly, mobile-responsive interfaces using Figma.",
  },
  {
    id: 2,
    image: "/coding.png",
    title: " Full-Stack Development",
    description:
      "Proficient in full-stack development using technologies such as  React js, Next.js,  Node.js, Express js, and MongoDB.",
  },
  {
    id: 3,
    image: "/database.png",
    title: " Database ",
    description:
      " Experienced in designing and developing complex applications with database management using Prisma,Postgresql, and MongoDB.",
  },
];

export const projects = [
  {
    id: 1,
    type: "Full-Stack",
    image: "/project/dev-overflow.jpg",
    name: "DEV-Overflow",
    description: "a dynamic and feature-rich web application designed for developers to ask and answer questions, engage in community discussions, and manage their profiles. Built with modern web technologies, the platform ensures an intuitive and seamless user experience.",

    sourceCode: "https://github.com/AungMyoAye101/dev-overflow-nextjs",
    siteLink: "https://dev-overflow-indol.vercel.app/",
    iconList: [
      {
        icon: "/react.svg",
        name: "React Js",
      },
      {
        icon: "/typescript.svg",
        name: "TypeScript",
      },
      {
        icon: "/nextjs.svg",
        name: "Next Js",
      },
      {
        icon: "/mongodb.svg",
        name: "Mongo Db",
      },
    ],
  },
  {
    id: 2,
    image: "/project/chat-app.png",
    type: "Full-Stack",
    name: "Chat App",
    description: "A real-time chat application built with MongoDB, Express, React, Node.js, and Socket.IO.",
    sourceCode: "https://github.com/AungMyoAye101/chat-app",
    siteLink: "https://chat-app-woad-beta.vercel.app",
    iconList: [
      {
        icon: "/react.svg",
        name: "React Js",
      },
      {
        icon: "/expressjs.svg",
        name: "Express Js",
      },
      {
        icon: "/mongodb.svg",
        name: "Mongo Db",
      },
      {
        icon: "/nodejs.svg",
        name: "Node Js",
      },
      {
        icon: "/typescript.svg",
        name: "typescript",
      },
    ],
  },
  {
    id: 3,
    image: "/project/booking.jpg",
    name: "Hotel Booking",
    type: "Full-Stack",
    description:
      "a full-stack web application that allows users to search, book, and manage hotel reservations easily. It provides a seamless user experience with authentication, hotel and room management, booking features, and advanced search functionalities.",
    sourceCode: "https://github.com/AungMyoAye101/Booking-MERN",
    siteLink: "https://bookingbyama.vercel.app/",
    iconList: [
      {
        icon: "/react.svg",
        name: "React Js",
      },
      {
        icon: "/react.svg",
        name: "react Js",
      },
      {
        icon: "/mongodb.svg",
        name: "Mongo Db",
      },
      {
        icon: "/nodejs.svg",
        name: "Node Js",
      },
      {
        icon: "/typescript.svg",
        name: "TypeScript",
      },
    ],
  },
  {
    id: 4,
    image: "/project/mern-auth.jpg",
    name: "MERN_AUTH",
    type: "Full-Stack",
    description: "A full-stack authentication system built with MongoDB, Express, React, Node.js, and TypeScript.",

    sourceCode: "https://github.com/AungMyoAye101/AUTH-MERN",
    siteLink: "https://simple-auth-7s1n.onrender.com",
    iconList: [
      {
        icon: "/nodejs.svg",
        name: "Node Js",
      },
      {
        icon: "/react.svg",
        name: "react Js",
      },
      {
        icon: "/expressjs.svg",
        name: "Express Js",
      },
      {
        icon: "/mongodb.svg",
        name: "Mongo Db",
      },

    ],
  },
  {
    id: 5,
    type: "Front-End",
    image: "/project/shop-react.jpg",
    name: "Ecommerce ",
    description:
      "This is a comprehensive e-commerce shop application built with React, Vite, and TypeScript. The app leverages the Fake Store API for product data and includes features such as responsive design, add to cart, search by text, category filtering, and a dynamic discount pricing mechanism at checkout. The UI includes skeleton loading components for a smooth user experience.",
    sourceCode: "https://github.com/AungMyoAye101/shop-react",
    siteLink: "https://shop-react-iota.vercel.app/",
    iconList: [
      {
        icon: "/react.svg",
        name: "React Js",
      },
      {
        icon: "/tailwindcss.svg",
        name: "Tailwind CSS",
      },
      {
        icon: "/typescript.svg",
        name: "TypeScript",
      },
    ],
  },
  {
    id: 7,
    type: "Front-End",
    image: "/project/movie-app.jpg",
    name: "Movie Search",
    description:
      "The Movie Review Web App is a comprehensive platform for movie enthusiasts to explore and review trending movies and TV shows. This web application allows users to search for movies and TV shows, view personal details of each title, and receive personalized recommendations based on their preferences.",
    sourceCode: "https://github.com/AungMyoAye101/next-movie",
    siteLink: "https://movieama-aung-myo-ayes-projects.vercel.app/",
    iconList: [
      {
        icon: "/react.svg",
        name: "React Js",
      },
      {
        icon: "/tailwindcss.svg",
        name: "Tailwind CSS",
      },
      {
        icon: "/typescript.svg",
        name: "TypeScript",
      },
    ],
  },


];

export const frontEnd = {
  title: "Frontend Skills",
  skills: [
    {
      icon: "/javascript.svg",
      name: "JavaScript",
      count: 80,
    },
    {
      icon: "/react.svg",
      name: "React Js",
      count: 70,
    },

    {
      icon: "/jquery.svg",
      name: "Jquery",
      count: 60,
    },
    {
      icon: "/tailwindcss.svg",
      name: "Tailwindcss",
      count: 80,
    },
    {
      icon: "/sass.svg",
      name: "SASS ",
      count: 60,
    },
    {
      icon: "/bootstrap.svg",
      name: "bootstrap",
      count: 70,
    },
    {
      icon: "/typescript.svg",
      name: "Typescript",
      count: 70,
    },
    {
      icon: "/nextjs.svg",
      name: "Next Js",
      count: 80,
    },
  ],
};

export const backEnd = {
  title: "Backend Skills",
  skills: [
    {
      icon: "/nodejs.svg",
      name: "Node Js",
      count: 60,
    },
    {
      icon: "/expressjs.svg",
      name: "Express Js",
      count: 60,
    },
    {
      icon: "/nextjs.svg",
      name: "Next Js",
      count: 70,
    },


  ],
};

export const others = {
  title: "Database and Others",
  skills: [
    {
      icon: "/mongodb.svg",
      name: "Mongo DB",
      count: 60,
    },

    {
      icon: "/postgresql.svg",
      name: "Postgresql",
      count: 40,
    },
    {
      icon: "/git.svg",
      name: "Git",
      count: 40,
    },
    {
      icon: "/github.svg",
      name: "GitHub",
      count: 40,
    },
    {
      icon: "/figma.svg",
      name: "Figma",
      count: 90,
    },
    {
      icon: "/framer-motion.svg",
      name: "Framer Motion",
      count: 40,
    },
    {
      icon: "/wordpress.svg",
      name: "Wordpress",
      count: 40,
    },
  ],
};
