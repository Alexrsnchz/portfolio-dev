import type { ExperienceProps } from '@customTypes/experience.types';
import { BuildingIcon, CalendarIcon } from '@icons/Icons';

export default function TimelineEntry({
  startDate,
  endDate,
  position,
  company,
  tasks,
}: ExperienceProps) {
  return (
    <div>
      <div className="flex items-center relative my-3 gap-5">
        <div className="absolute -left-1 size-3 rounded-full bg-sky-500 dark:bg-purple-500"></div>

        <div className="flex items-center pl-7 md:pl-10 gap-2">
          <CalendarIcon className="size-4 text-gray-600 dark:text-gray-400" />
          <span className="text-sm text-gray-600 dark:text-gray-400">
            {startDate} - {endDate}
          </span>
        </div>
      </div>

      <div className="pl-7 md:pl-10 pb-18 border-l-2 border-sky-500/30 dark:border-purple-500/30">
        <h3 className="text-xl md:text-2xl font-bold text-gray-700 dark:text-gray-200">
          {position}
        </h3>

        <div className="flex items-center mt-2 mb-8 gap-2">
          <BuildingIcon className="size-5 text-sky-300 dark:text-purple-400" />
          <span className="text-lg font-semibold bg-gradient-to-r from-sky-300 dark:from-purple-500 via-rose-300 dark:via-pink-500 to-amber-400 dark:to-pink-500 bg-clip-text text-transparent">
            {company}
          </span>
        </div>

        <div className="space-y-5">
          {tasks.map((task) => (
            <p className="max-w-xl text-gray-600 dark:text-gray-300">• {task}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
