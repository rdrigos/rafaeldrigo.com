import { cn } from '@/utils/class-name';
import { Slot } from 'radix-ui';
import React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

export const buttonVariants = tv({
  base: [
    'inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors duration-300',
    'disabled:pointer-events-none disabled:opacity-50',
    'focus-visible:ring-primary/35 focus-visible:ring-3 focus-visible:outline-none',
    '[&_svg:not([class*="size-"])]:size-4 [&_svg]:shrink-0',
  ],
  variants: {
    variant: {
      primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
      outline: 'bg-background border hover:border-primary hover:text-primary',
    },
    size: {
      default: 'h-9 px-3',
      icon: 'size-9',
    },
    effect: {
      'expand-icon': 'group gap-0 relative',
    },
    danger: {
      true: 'focus-visible:ring-danger/35',
    },
  },
  compoundVariants: [
    {
      variant: 'primary',
      danger: true,
      class: 'bg-danger text-danger-foreground hover:bg-danger/90',
    },
    {
      variant: 'outline',
      danger: true,
      class: 'text-danger border-danger hover:border-danger/80 hover:text-danger/80',
    },
  ],
  defaultVariants: {
    variant: 'primary',
    size: 'default',
  },
});

interface IconProps {
  icon: React.ElementType;
  iconPlacement: 'left' | 'right';
}

interface IconRefProps {
  icon?: never;
  iconPlacement?: undefined;
}

export type ButtonIconProps = IconProps | IconRefProps;

export type ButtonProps = React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> &
  ButtonIconProps & {
    asChild?: boolean;
  };

export function Button({
  children,
  className,
  danger,
  effect,
  size,
  variant,
  iconPlacement,
  icon: Icon,
  asChild = false,
  ...props
}: ButtonProps): React.JSX.Element {
  const Component = asChild ? Slot.Root : 'button';

  return (
    <Component
      data-slot="button"
      className={cn(buttonVariants({ danger, effect, size, variant, className }))}
      {...props}
    >
      {Icon &&
        iconPlacement === 'left' &&
        (effect === 'expand-icon' ? (
          <div className="w-0 translate-x-0 pr-0 opacity-0 transition-all duration-200 group-hover:w-6 group-hover:pr-2 group-hover:opacity-100">
            <Icon />
          </div>
        ) : (
          <Icon />
        ))}
      <Slot.Slottable>{children}</Slot.Slottable>
      {Icon &&
        iconPlacement === 'right' &&
        (effect === 'expand-icon' ? (
          <div className="w-0 translate-x-1 pl-0 opacity-0 transition-all duration-200 group-hover:w-6 group-hover:translate-x-0 group-hover:pl-2 group-hover:opacity-100">
            <Icon />
          </div>
        ) : (
          <Icon />
        ))}
    </Component>
  );
}
