import MinusIcon from '@/assets/ui/MinusIcon.svg?react';
import PlusIcon from '@/assets/ui/PlusIcon.svg?react';
import { useCounter } from '@/shared/hooks/useCounter.ts';

interface CounterProps {
  initialValue?: number;
}

export function Counter({ initialValue = 0 }: CounterProps) {
  const { value, increment, decrement } = useCounter({ initialValue });

  return (
    <div className="inline-flex items-center justify-center rounded-lg bg-gray-100">
      <button
        onClick={decrement}
        disabled={value <= 0}
        className="py-1.75 cursor-pointer px-1 disabled:cursor-default disabled:text-gray-300"
      >
        <MinusIcon />
      </button>
      <div className="w-[30px] text-center text-xs font-medium leading-4">{value}</div>
      <button
        onClick={increment}
        disabled={value >= 9}
        className="py-1.75 cursor-pointer px-1 disabled:cursor-default disabled:text-gray-300"
      >
        <PlusIcon />
      </button>
    </div>
  );
}
