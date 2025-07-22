import { useTranslation } from 'react-i18next';
import SectionLayout from '@components/layouts/SectionLayout';
import { CaseIcon } from '@icons/Icons';
import type { ExperienceProps } from '@customTypes/experience.types';
import TimelineEntry from '@components/sections/experience/TimelineEntry';

export default function Experience() {
  const { t } = useTranslation();
  const experience = t('experience.list', { returnObjects: true }) as ExperienceProps[];

  return (
    <SectionLayout id="experience" icon={CaseIcon} title={t('experience.header')}>
      {experience.map((exp, index) => (
        <TimelineEntry
          key={index}
          startDate={exp.startDate}
          endDate={exp.endDate}
          position={exp.position}
          company={exp.company}
          tasks={exp.tasks}
        />
      ))}
    </SectionLayout>
  );
}
