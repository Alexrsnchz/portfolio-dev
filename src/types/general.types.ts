import * as React from 'react';

export interface LayoutProps {
  id?: string;
  icon?: React.ReactNode;
  title?: string;
  children?: React.ReactNode;
}

export interface IconProps {
  className?: string;
}
