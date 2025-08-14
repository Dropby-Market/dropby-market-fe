import { createContext, type MouseEvent, type ReactNode, useContext, useState } from 'react';
import { createPortal } from 'react-dom';
import { Slot } from '@radix-ui/react-slot';

interface BottomSheetContextProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const BottomSheetContext = createContext<BottomSheetContextProps | null>(null);

function useBottomSheet() {
  const context = useContext(BottomSheetContext);
  if (!context) {
    throw new Error('BottomSheet는 <BottomSheet.Root>안에서 사용해야합니다.');
  }
  return context;
}

function BottomSheetRoot({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <BottomSheetContext.Provider value={{ open, setOpen }}>{children}</BottomSheetContext.Provider>
  );
}

function BottomSheetContent({ children }: { children: ReactNode }) {
  const { open, setOpen } = useBottomSheet();

  if (!open) return null;

  const handleBackgroundClick = (e: MouseEvent) => {
    if (e.target === e.currentTarget) {
      setOpen(false);
    }
  };

  return createPortal(
    <div
      className="fixed inset-0 z-50 mx-auto max-w-md bg-gray-900/50"
      onClick={handleBackgroundClick}
    >
      <div className="h-9/10 absolute bottom-0 w-full rounded-t-xl bg-white px-4 py-8">
        <div className="h-full overflow-y-auto">{children}</div>
      </div>
    </div>,
    document.getElementById('bottomSheet-root') as HTMLElement
  );
}

function BottomSheetTrigger({
  children,
  asChild = false,
}: {
  children: ReactNode;
  asChild?: boolean;
}) {
  const { setOpen } = useBottomSheet();
  const Comp = asChild ? Slot : 'button';

  return <Comp onClick={() => setOpen(true)}>{children}</Comp>;
}

function BottomSheetHeader({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}

function BottomSheetBody({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}

function BottomSheetClose({ children }: { children: ReactNode }) {
  const { setOpen } = useBottomSheet();
  return <button onClick={() => setOpen(false)}>{children}</button>;
}

const BottomSheet = Object.assign(BottomSheetRoot, {
  Root: BottomSheetRoot,
  Trigger: BottomSheetTrigger,
  Content: BottomSheetContent,
  Header: BottomSheetHeader,
  Body: BottomSheetBody,
  Close: BottomSheetClose,
});

export default BottomSheet;
