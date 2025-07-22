import MainLayout from '@components/layouts/MainLayout';
import Hero from '@components/sections/hero/Hero';
import Experience from '@components/sections/experience/Experience';

function App() {
  return (
    <MainLayout>
      <Hero />
      <Experience />
      <div className="min-h-screen"></div>
    </MainLayout>
  );
}

export default App;
