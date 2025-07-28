import MainLayout from '@components/layouts/MainLayout';
import Hero from '@components/sections/hero/Hero';
import Experience from '@components/sections/experience/Experience';
import Projects from '@components/sections/projects/Projects';
import Stack from '@components/sections/stack/Stack';
import Contact from '@components/sections/contact/Contact';

function App() {
  return (
    <MainLayout>
      <Hero />
      <Experience />
      <Projects />
      <Stack />
      <Contact />
    </MainLayout>
  );
}

export default App;
