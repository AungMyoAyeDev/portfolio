# Aung Myo Aye - Full Stack Developer Portfolio

A modern, responsive, and animated personal portfolio website built with Next.js, React, Tailwind CSS, and Shadcn UI. It showcases my skills, experience, and featured projects as a Full Stack Software Engineer.



- **Modern Tech Stack**: Built with the latest Next.js App Router and React 19.
- **Responsive Design**: Fully responsive layout that looks great on mobile, tablet, and desktop devices.
- **Dark/Light Mode**: Integrated theme toggling using `next-themes` for a seamless user experience.
- **Smooth Animations**: Custom scroll reveal animations and floating elements to make the UI feel alive.
- **Accessible UI**: Utilizes Radix UI primitives via Shadcn UI for highly accessible and customizable components.
- **Working Contact Form**: Integrated with **Resend** for server-side email dispatching without needing an external mail client.
- **SEO Optimized**: Standard metadata and semantic HTML tags.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/) & [Radix UI](https://www.radix-ui.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: Custom CSS Keyframes & Intersection Observer API
- **Email Service**: [Resend](https://resend.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## 📦 Getting Started

### Prerequisites

Make sure you have Node.js installed. It is recommended to use `npm`, or , `pnpm`

### Installation

1. Clone the repository:
   ```bash
   git clone [https://github.com/AungMyoAye101/portfolio.git](https://github.com/AungMyoAyeDev/portfolio.git)
   cd portfolio
   ```
2. Install dependencies:
```bash
pnpm install
```
3. Set up Environment Variables:
Create a `.env.local` file in the root of your project and add your Resend API Key for the contact form to work.
```bash
RESEND_API_KEY=your_resend_api_key_here
```
4. Start the depeloved server;
 ```bash
pnpm run dev
```

5. Open `http://localhost:3000` with your browser to see the result.
6. Project Structure
```
├── public/               # Static assets (images, icons, resume PDF)
├── src/
│   ├── app/              # Next.js App Router pages and global layouts
│   ├── components/       # Reusable React components (Hero, About, Projects, etc.)
│   │   └── ui/           # Shadcn UI base components
│   ├── lib/              # Utility functions, project data, and server actions
│   └── hooks/            # Custom React hooks (if any)
├── components.json       # Shadcn UI configuration
├── next.config.ts        # Next.js configuration
├── tailwind.config.ts    # Tailwind CSS configuration
└── package.json          # Project dependencies and scripts
```
## Contact Setup (Resend)

1. The contact form uses Server Actions to securely send emails. To make it functional:

2. Sign up for an account at Resend.

3. Verify your domain (or use their testing features).

4. Generate an API Key.

5. Update the to and from email addresses in `src/lib/send-email.ts` to match your configuration.

## Deployment
The easiest way to deploy this Next.js app is to use the Vercel Platform.

1. Push your code to your GitHub repository.

2. Import the project into Vercel.

3. Add your `RESEND_API_KEY` to the Vercel Environment Variables settings.

4. Deploy!

Designed and developed by Aung Myo Aye.
