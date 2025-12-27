import { ReactNode } from 'react';

interface CardParams {
  children: ReactNode;
}

export function Card({ children }: CardParams) {
  return (
    <div className="align flex h-full w-full flex-col items-center justify-center rounded-3xl bg-white/40 shadow-xl backdrop-blur-3xl">
      {children}
    </div>
  );
}
