import SectionLayout from '@components/structures/layouts/SectionLayout';
import { LayoutIcon } from '@components/ui/icons/Icons';
import { useTranslation } from 'react-i18next';
import ProjectCard from '@components/sections/projects/ProjectCard';
import { projects } from '@data/projectsData';

export default function Projects() {
  const { t } = useTranslation();

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
            preview={prj.preview}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>
    </SectionLayout>
  );
}
