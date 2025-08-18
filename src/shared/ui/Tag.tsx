import type { HTMLAttributes, ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/shared/lib/utils.ts';

interface TagProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof tagVariants> {
  children: ReactNode;
}

const tagVariants = cva('inline-flex rounded-sm', {
  variants: {
    variant: {
      green: 'bg-green-50 text-green-600',
      gray: 'bg-gray-100 text-gray-500',
      red: 'bg-red-50 text-red-500',
      blue: 'bg-blue-50 text-blue-500',
      purple: 'bg-indigo-50 text-indigo-500',
    },
    size: {
      md: 'p-1 text-xs leading-4 font-medium',
    },
  },
  defaultVariants: {
    variant: 'green',
    size: 'md',
  },
});

export default function Tag({ variant, size, className, children, ...props }: TagProps) {
  return (
    <div className={cn(tagVariants({ variant, size }), className)} {...props}>
      {children}
    </div>
  );
}
