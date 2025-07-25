import * as React from 'react';

export interface IconProps {
  className?: string;
}

export interface LayoutProps {
  id?: string;
  icon?: React.ComponentType<IconProps>;
  title?: string;
  children?: React.ReactNode;
}
