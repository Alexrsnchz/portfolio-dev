import type { LayoutProps } from '@customTypes/layout.types.ts';

export default function MainLayout({ children }: LayoutProps) {
  return (
    <>
      <header></header>
      <main>{children}</main>
      <footer></footer>
    </>
  );
}
