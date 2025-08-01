import { IconProps } from '@customTypes/general.types';
import * as React from 'react';

export interface LangListProps {
  flag: React.ComponentType<IconProps>;
  text: string;
  code: string;
}

export interface NavLinksProps {
  url: string;
  aria: string;
  text: string;
}

export interface TechProps {
  logo: React.ComponentType<IconProps>;
  text: string;
  colors: string;
}
