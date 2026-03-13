import { cn } from '@/utils/class-name';
import { Slot } from 'radix-ui';
import React from 'react';

export type AnchorProps = React.ComponentProps<'a'> & {
  disabled?: boolean;
  active?: boolean;
  asChild?: boolean;
};

export function Anchor({
  className,
  active,
  disabled,
  href,
  asChild = false,
  ...props
}: AnchorProps): React.JSX.Element {
  const Component = asChild ? Slot.Root : 'a';

  return (
    <Component
      data-slot="anchor"
      href={disabled ? undefined : href}
      className={cn(
        'hover:text-primary text-sm font-medium transition-colors [&_svg]:size-5 [&_svg]:shrink-0',
        'focus-visible:text-primary focus-visible:outline-none',
        disabled && 'pointer-events-none cursor-default opacity-50',
        active && 'text-primary',
        className
      )}
      aria-disabled={disabled}
      {...props}
    />
  );
}
