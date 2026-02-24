import { cn } from '@/utils/class-name';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import React from 'react';

export type InputProps = React.ComponentProps<'input'> & {
  icon?: React.ElementType;
};

export function Input({ className, disabled, type, icon: Icon, ...props }: InputProps): React.JSX.Element {
  const [showPassword, setShowPassword] = React.useState<boolean>(false);

  const togglePasswordVisibility = (): void => {
    setShowPassword(!showPassword);
  };

  const inputType = type === 'password' && showPassword ? 'text' : type;

  return (
    <div
      className={cn(
        'border-input not-focus-within:hover:border-primary/75 inline-flex h-9 w-full items-center rounded-md border text-base shadow-xs transition-all duration-150',
        '[&_svg]:text-input-foreground not-focus-within:hover:[&_svg]:text-primary/75 [&_svg]:shrink-0 [&_svg]:stroke-[1.25] [&_svg:not([class*="size-"])]:size-5',
        'has-disabled:pointer-events-none has-disabled:opacity-50',
        'has-[input[aria-invalid="true"]]:border-danger has-[input[aria-invalid="true"]]:not-focus-within:hover:border-danger/80 has-[input[aria-invalid="true"]]:not-focus-within:hover:[&_svg]:text-danger/80 has-[input[aria-invalid="true"]]:[&_svg]:text-danger has-[input[aria-invalid="true"]]:ring-danger/35',
        'focus-within:border-primary focus-within:ring-primary/35 focus-within:[&_svg]:text-primary focus-within:ring-3'
      )}
    >
      {Icon && <Icon className="ml-3" />}
      <input
        type={inputType}
        data-slot="input"
        disabled={disabled}
        className={cn(
          'placeholder:text-input-foreground h-full w-full bg-transparent px-3 py-1 outline-none',
          'selection:bg-primary selection:text-primary-foreground',
          'file:text-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium',
          '[&::-ms-clear]:hidden [&::-ms-reveal]:hidden',
          className
        )}
        {...props}
      />
      {type === 'password' && !disabled && (
        <button onClick={togglePasswordVisibility} tabIndex={-1} className="mr-3 cursor-pointer">
          {showPassword ? <EyeIcon /> : <EyeOffIcon />}
        </button>
      )}
    </div>
  );
}
