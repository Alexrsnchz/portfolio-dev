import { IconProps } from '@customTypes/general.types';
import * as React from 'react';

export interface LinkProps {
  icon: React.ComponentType<IconProps>;
  text: string;
  url: string;
}
