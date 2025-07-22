import type { LayoutProps } from '@customTypes/general.types';
import Footer from '@components/navigation/footer/Footer';

export default function MainLayout({ children }: LayoutProps) {
  return (
    <div className="bg-gray-50 dark:bg-neutral-950">
      <header></header>
      <main>{children}</main>

      <Footer />
    </div>
  );
}
