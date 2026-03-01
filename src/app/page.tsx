
import About from '../components/about';
import Contact from '../components/contact';
import Featured from '../components/featured';
import Hero from '../components/hero';
import Projects from '../components/projects';
import TechStacks from '../components/tech-stacks';

export default function Home() {
  return (
    <>
      <Hero />
      <TechStacks />
      <About />
      <Featured />
      <Projects />
      <Contact />
    </ >
  );
}

