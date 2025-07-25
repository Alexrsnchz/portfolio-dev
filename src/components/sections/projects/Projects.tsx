import SectionLayout from '@components/layouts/SectionLayout';
import { LayoutIcon } from '@icons/Icons';
import { useTranslation } from 'react-i18next';
import ProjectCard from '@components/sections/projects/ProjectCard';
import type { ProjectProps } from '@customTypes/projects.types';

export default function Projects() {
  const { t } = useTranslation();
  const projects = t('projects.list', { returnObjects: true }) as ProjectProps[];

  return (
    <SectionLayout id="projects" icon={LayoutIcon} title={t('projects.header')}>
      <div className="flex flex-col gap-15 md:gap-20">
        {projects.map((prj, index) => (
          <ProjectCard
            key={index}
            thumbnail={prj.thumbnail}
            title={prj.title}
            description={prj.description}
            stack={prj.stack}
            source={prj.source}
            sourceAria={prj.sourceAria}
            sourceButton={prj.sourceButton}
            preview={prj.preview}
            previewAria={prj.previewAria}
            previewButton={prj.previewButton}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>
    </SectionLayout>
  );
}
