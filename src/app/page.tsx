
import About from '../components/about';
import Contact from '../components/contact';
import Featured from '../components/featured';
import Hero from '../components/hero';
import Projects from '../components/projects';

export default function Home() {
  return (
    <section className='px-4'>
      <Hero />
      <About />
      <Featured />
      <Projects />
      <Contact />
    </section >
  );
}
