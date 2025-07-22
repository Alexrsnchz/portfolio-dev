import MainLayout from '@components/layouts/MainLayout';
import Hero from '@components/sections/hero/Hero';

function App() {
  return (
    <MainLayout>
      <Hero />
      <div className="min-h-screen"></div>
    </MainLayout>
  );
}

export default App;
