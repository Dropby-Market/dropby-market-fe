import { createContext, useContext, useState, type ReactNode } from 'react';
import CheckIcon from '@/assets/ui/CheckIcon.svg?react';

interface CheckboxGroupContextProps {
  value: Set<string>;
  toggleValue: (val: string) => void;
}

const CheckboxGroupContext = createContext<CheckboxGroupContextProps | null>(null);

function useCheckboxGroup() {
  const context = useContext(CheckboxGroupContext);
  if (!context) {
    throw new Error('Checkbox는 <CheckboxGroup.Root> 안에서 사용해야 합니다.');
  }
  return context;
}

function CheckboxGroupRoot({
  children,
  defaultValue = [],
  onChange,
}: {
  children: ReactNode;
  defaultValue?: string[];
  onChange?: (val: string[]) => void;
}) {
  const [value, setValue] = useState<Set<string>>(new Set(defaultValue));

  const toggleValue = (val: string) => {
    const newSet = new Set(value);
    if (newSet.has(val)) {
      newSet.delete(val);
    } else {
      newSet.add(val);
    }
    setValue(newSet);
    onChange?.(Array.from(newSet));
  };

  return (
    <CheckboxGroupContext.Provider value={{ value, toggleValue }}>
      <div>{children}</div>
    </CheckboxGroupContext.Provider>
  );
}

function CheckboxGroupItem({ value, children }: { value: string; children: ReactNode }) {
  const { value: groupValue, toggleValue } = useCheckboxGroup();
  const checked = groupValue.has(value);

  return (
    <label className="flex cursor-pointer items-center gap-1">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => toggleValue(value)}
        className="peer hidden"
      />
      <span className="flex h-5 w-5 items-center justify-center rounded-md border-2 border-gray-300 peer-checked:border-green-400 peer-checked:bg-green-400">
        <CheckIcon />
      </span>
      <span>{children}</span>
    </label>
  );
}

const CheckboxGroup = Object.assign(CheckboxGroupRoot, {
  Root: CheckboxGroupRoot,
  Item: CheckboxGroupItem,
});

export default CheckboxGroup;
