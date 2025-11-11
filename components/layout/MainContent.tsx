"use client";

import { ReactNode } from "react";

interface MainContentProps {
  children: ReactNode;
}

export function MainContent({ children }: MainContentProps) {
  return (
    <div className="flex-1 bg-white dark:bg-black overflow-x-hidden overflow-y-auto">
      {children}
    </div>
  );
}

