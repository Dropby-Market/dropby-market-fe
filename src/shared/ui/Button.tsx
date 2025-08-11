import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/shared/lib/utils.ts';

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  children: ReactNode;
}

const buttonVariants = cva(
  'flex items-center justify-center rounded-lg cursor-pointer disabled:cursor-default',
  {
    variants: {
      variant: {
        default: 'bg-green-400 text-white hover:bg-green-400/90',
        soft: 'bg-gray-100 text-gray-500 hover:bg-gray-100/70',
        outline: 'border border-gray-300 text-gray-500 hover:border-gray-300/50',
      },
      size: {
        sm: 'py-2.5 text-xs leading-4 font-medium',
        md: 'py-3.5 text-sm leading-5 font-semibold',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

export function Button({
  asChild = false,
  variant,
  size,
  className,
  children,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button';
  return (
    <Comp className={cn(buttonVariants({ variant, size }), className)} {...props}>
      {children}
    </Comp>
  );
}
