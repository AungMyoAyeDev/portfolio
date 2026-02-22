
import About from '../components/about';
import Contact from '../components/contact';
import Featured from '../components/featured';
import Hero from '../components/hero';
import Projects from '../components/projects';
import TechStacks from '../components/tech-stacks';

export default function Home() {
  return (
    <section className='px-4'>
      <Hero />
      <TechStacks />
      <About />
      <Featured />
      <Projects />
      <Contact />
    </section >
  );
}
