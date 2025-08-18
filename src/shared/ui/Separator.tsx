import { cn } from '@/shared/lib/utils';

export default function Separator({ className }: { className?: string }) {
  return <div className={cn('h-[1.5px] w-full bg-gray-100', className)} />;
}
