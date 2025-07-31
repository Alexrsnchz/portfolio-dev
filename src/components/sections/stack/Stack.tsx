import SectionLayout from '@components/layouts/SectionLayout';
import { LayerIcon } from '@icons/Icons';
import { useTranslation } from 'react-i18next';
import StackCard from '@components/sections/stack/StackCard';
import { stack } from '@data/stackData';

export default function Stack() {
  const { t } = useTranslation();

  return (
    <SectionLayout id="stack" icon={LayerIcon} title={t('stack.header')}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {stack.map((stk, index) => (
          <StackCard key={index} icon={stk.icon} title={stk.title} tech={stk.tech} />
        ))}
      </div>
    </SectionLayout>
  );
}
