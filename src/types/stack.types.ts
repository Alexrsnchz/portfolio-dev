import * as React from 'react';
import { IconProps } from '@customTypes/general.types';

interface TechProps {
  name: string;
  logo: React.ComponentType<IconProps>;
}

export interface StackProps {
  icon: React.ComponentType<IconProps>;
  title: string;
  tech: TechProps[];
}
