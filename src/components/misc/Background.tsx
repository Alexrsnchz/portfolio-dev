import type { LayoutProps } from '@customTypes/general.types';

export default function Background({ children }: LayoutProps) {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-white dark:bg-black">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute md:top-[50px] md:left-[4%] top-[50px] lg:top-[10px] left-[1%] lg:left-[1%] size-[180px] sm:size-[260px] lg:size-[300px] rounded-full opacity-30 blur-2xl bg-[#8b5cf6]" />

        <div className="absolute md:top-[800px] md:right-[7%] lg:top-[400px] lg:right-[10%] sm:size-[200px] md:size-[230px] lg:size-[250px] rounded-full opacity-25 blur-2xl bg-[#ec4899]" />

        <div className="absolute md:top-[300px] md:right-[8%] top-[250px] lg:top-[10px] right-[4%] lg:right-[38%] size-[100px] sm:size-[130px] lg:size-[160px] opacity-15 rounded-full blur-xl bg-[#8b5cf6]" />

        <div className="absolute md:top-[650px] md:left-[16%] top-[500px] lg:top-[530px] left-[20%] lg:left-[24%] size-[90px] sm:size-[120px] lg:size-[140px] rounded-full opacity-20 blur-xl bg-[#ec4899]" />
      </div>

      <div className="relative z-10">{children}</div>
    </div>
  );
}
