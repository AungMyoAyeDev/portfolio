
import About from '../components/about';
import Contact from '../components/contact';
import FeaturedProject from '../components/featured';
import Hero from '../components/hero';
import TechStacks from '../components/tech-stacks';

export default function Home() {
  return (
    <>
      <Hero />
      <TechStacks />
      <About />
      <FeaturedProject />
      {/* <Projects /> */}
      <Contact />
    </ >
  );
}

