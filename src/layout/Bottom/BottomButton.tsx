import type { ReactNode } from 'react';

export default function BottomButton({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="h-[80px]" />
      <div className="fixed bottom-0 left-1/2 z-10 flex w-full max-w-md -translate-x-1/2 gap-2.5 bg-white p-4 pb-12">
        {children}
      </div>
    </>
  );
}
