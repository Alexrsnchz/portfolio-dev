import type { LayoutProps } from '../../types/layout.types.ts';

export default function MainLayout({ children }: LayoutProps) {
  return (
    <>
      <header></header>
      <main>{children}</main>
      <footer></footer>
    </>
  );
}
