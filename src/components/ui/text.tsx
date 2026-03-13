import { cn } from '@/utils/class-name';
import { Slot } from 'radix-ui';
import React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

export const textVariants = tv({
  variants: {
    variant: {
      title: 'text-4xl sm:text-5xl md:text-7xl tracking-tight',
      subtitle: 'text-3xl md:text-4xl',
      paragraph: 'text-base leading-relaxed',
      lead: 'text-lg md:text-xl',
    },
    weight: {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
  },
  defaultVariants: {
    variant: 'paragraph',
    weight: 'normal',
  },
});

export type TextProps = React.ComponentPropsWithoutRef<'p'> &
  VariantProps<typeof textVariants> & {
    as?: 'h1' | 'h2' | 'p';
    asChild?: boolean;
  };

export function Text({
  className,
  align,
  variant,
  weight,
  as = 'p',
  asChild = false,
  ...props
}: TextProps): React.JSX.Element {
  const Component = asChild ? Slot.Root : as;

  return (
    <Component
      data-slot="text"
      data-variant={variant}
      className={cn(textVariants({ align, variant, weight, className }))}
      {...props}
    />
  );
}
