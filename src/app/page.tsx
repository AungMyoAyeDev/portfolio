import About from "../components/about";
import ChatBot from "../components/chat-box";
import Contact from "../components/contact";
import FeaturedProject from "../components/featured";
import Hero from "../components/hero";
import TechStacks from "../components/tech-stacks";

export default function Home() {
  return (
    <section>
      <ChatBot />
      <Hero />
      <TechStacks />
      <About />
      <FeaturedProject />
      {/* <Projects /> */}
      <Contact />
    </section>
  );
}
