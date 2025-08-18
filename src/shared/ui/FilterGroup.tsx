import { useState } from 'react';
import { cn } from '@/shared/lib/utils.ts';

interface FilterButtonProps {
  label: string;
  selected: boolean;
  onClick: () => void;
}

interface FilterGroupProps {
  options: string[];
  defaultSelectedIndex?: number;
  onChange?: (selectedIndex: number) => void;
}

function FilterButton({ label, selected, onClick }: FilterButtonProps) {
  return (
    <button
      className={cn(
        'shrink-0 rounded-2xl px-3 py-2.5',
        'text-xs font-medium leading-4',
        selected ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800'
      )}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default function FilterGroup({
  options,
  defaultSelectedIndex = 0,
  onChange,
}: FilterGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(defaultSelectedIndex);

  const handleClick = (index: number) => {
    setSelectedIndex(index);
    onChange?.(index);
  };

  return (
    <div className="flex w-full space-x-2 overflow-x-auto">
      {options.map((option, i) => (
        <FilterButton
          key={option}
          label={option}
          selected={i === selectedIndex}
          onClick={() => handleClick(i)}
        />
      ))}
    </div>
  );
}
