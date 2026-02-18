import { cn } from '@/utils/class-name';
import React from 'react';

export function CodeComment({ children, className }: React.ComponentProps<'p'>): React.JSX.Element {
  return <p className={cn('text-primary font-mono text-sm tracking-wider select-none', className)}>// {children}</p>;
}
