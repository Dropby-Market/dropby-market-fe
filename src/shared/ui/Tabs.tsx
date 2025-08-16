import { createContext, type ReactNode, useContext, useState } from 'react';
import { cn } from '@/shared/lib/utils.ts';

interface TabsContextProps {
  value: string;
  setValue: (value: string) => void;
}

const TabsContext = createContext<TabsContextProps | null>(null);

function useTabs() {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('Tabs는 <Tabs.Root>안에서 사용해야합니다.');
  }
  return context;
}

interface TabsRootProps {
  defaultValue: string;
  onValueChange?: (value: string) => void;
  children: ReactNode;
}

function TabsRoot({ defaultValue, onValueChange, children }: TabsRootProps) {
  const [value, setValue] = useState(defaultValue);

  const handleSetValue = (newValue: string) => {
    setValue(newValue);
    onValueChange?.(newValue);
  };

  return (
    <TabsContext.Provider value={{ value, setValue: handleSetValue }}>
      <div>{children}</div>
    </TabsContext.Provider>
  );
}

function TabsList({ children }: { children: ReactNode }) {
  return <div className="flex justify-between">{children}</div>;
}

interface TabsTriggerProps {
  value: string;
  children: ReactNode;
}

function TabsTrigger({ value, children }: TabsTriggerProps) {
  const { value: activeValue, setValue } = useTabs();

  const isActive = activeValue === value;

  return (
    <button
      id={`tab-trigger-${value}`}
      onClick={() => setValue(value)}
      className={cn(
        'flex flex-1 justify-center border-b border-b-gray-800 py-3.5 text-sm font-medium leading-5',
        !isActive && 'border-b-gray-200 text-gray-500'
      )}
    >
      {children}
    </button>
  );
}

interface TabsContentProps {
  value: string;
  children: ReactNode;
}

function TabsContent({ value, children }: TabsContentProps) {
  const { value: activeValue } = useTabs();
  if (activeValue !== value) return null;

  return (
    <div id={`tab-content-${value}`} className="pt-5">
      {children}
    </div>
  );
}

const Tabs = Object.assign(TabsRoot, {
  Root: TabsRoot,
  List: TabsList,
  Trigger: TabsTrigger,
  Content: TabsContent,
});

export default Tabs;
