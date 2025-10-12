import type { LayoutProps } from '@customTypes/general.types';
import Footer from '@components/navigation/footer/Footer';
import Background from '@components/structures/backgrounds/Background';
import Navbar from '@components/navigation/navbar/Navbar';

export default function MainLayout({ children }: LayoutProps) {
  return (
    <Background>
      <header>
        <Navbar />
      </header>
      <main className="px-3 md:px-12 lg:px-0 mx-auto md:max-w-4xl lg:max-w-5xl">{children}</main>
      <Footer />
    </Background>
  );
}
