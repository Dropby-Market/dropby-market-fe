import { createContext, useContext, useState, type ReactNode } from 'react';
import CheckIcon from '@/assets/ui/CheckIcon.svg?react';

interface CheckboxGroupContextProps {
  value: Set<string>;
  toggleValue: (val: string) => void;
  selectAll: () => void;
  clearAll: () => void;
  isAllSelected: boolean;
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
  options,
  onChange,
}: {
  children: ReactNode;
  options: string[];
  defaultValue?: string[];
  onChange?: (val: string[]) => void;
}) {
  const [value, setValue] = useState<Set<string>>(new Set(defaultValue));

  const update = (newSet: Set<string>) => {
    setValue(newSet);
    onChange?.(Array.from(newSet));
  };

  const toggleValue = (val: string) => {
    const newSet = new Set(value);
    if (newSet.has(val)) newSet.delete(val);
    else newSet.add(val);
    update(newSet);
  };

  const selectAll = () => update(new Set(options));
  const clearAll = () => update(new Set());

  const isAllSelected = options.length > 0 && options.every(opt => value.has(opt));

  return (
    <CheckboxGroupContext.Provider
      value={{ value, toggleValue, selectAll, clearAll, isAllSelected }}
    >
      {children}
    </CheckboxGroupContext.Provider>
  );
}

function CheckboxGroupItem({
  value,
  children,
  isSelectAll = false,
}: {
  value: string;
  children: ReactNode;
  isSelectAll?: boolean;
}) {
  const { value: groupValue, toggleValue, selectAll, clearAll, isAllSelected } = useCheckboxGroup();
  const checked = isSelectAll ? isAllSelected : groupValue.has(value);

  const handleClick = () => {
    if (isSelectAll) {
      if (isAllSelected) {
        clearAll();
      } else {
        selectAll();
      }
    } else {
      toggleValue(value);
    }
  };

  return (
    <div className="flex gap-2">
      <label className="inline-block cursor-pointer">
        <input type="checkbox" checked={checked} onChange={handleClick} className="peer hidden" />
        <span className="flex h-5 w-5 items-center justify-center rounded-md border-2 border-gray-300 peer-checked:border-green-400 peer-checked:bg-green-400">
          <CheckIcon />
        </span>
      </label>
      <div className="flex-1">{children}</div>
    </div>
  );
}

const CheckboxGroup = Object.assign(CheckboxGroupRoot, {
  Root: CheckboxGroupRoot,
  Item: CheckboxGroupItem,
});

export default CheckboxGroup;
