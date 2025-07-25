import MainLayout from '@components/layouts/MainLayout';
import Hero from '@components/sections/hero/Hero';
import Experience from '@components/sections/experience/Experience';
import Projects from '@components/sections/projects/Projects';
import Stack from '@components/sections/stack/Stack';

function App() {
  return (
    <MainLayout>
      <Hero />
      <Experience />
      <Projects />
      <Stack />
      <div className="min-h-screen"></div>
    </MainLayout>
  );
}

export default App;
