import * as React from 'react';

export interface IconProps {
  id?: string;
  className?: string;
}

export interface LayoutProps {
  children?: React.ReactNode;
}

export interface ExtendedLayoutProps extends LayoutProps {
  id: string;
  icon: React.ComponentType<IconProps>;
  title: string;
}
