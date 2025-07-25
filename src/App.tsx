import MainLayout from '@components/layouts/MainLayout';
import Hero from '@components/sections/hero/Hero';
import Experience from '@components/sections/experience/Experience';
import Projects from '@components/sections/projects/Projects';

function App() {
  return (
    <MainLayout>
      <Hero />
      <Experience />
      <Projects />
      <div className="min-h-screen"></div>
    </MainLayout>
  );
}

export default App;
