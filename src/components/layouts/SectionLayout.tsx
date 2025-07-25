import type { ExtendedLayoutProps } from '@customTypes/general.types';

export default function SectionLayout({ id, icon: Icon, title, children }: ExtendedLayoutProps) {
  return (
    <section id={id} className="pt-25 pb-10 md:pb-20">
      <div className="flex items-center gap-3">
        <Icon className="size-6 md:size-7 mt-1 text-gray-700 dark:text-gray-200" />
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-200">
          {title}
        </h2>
      </div>

      <div className="mt-12 md:mt-15">{children}</div>
    </section>
  );
}
