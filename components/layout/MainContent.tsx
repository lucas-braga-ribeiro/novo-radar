"use client";

import { ReactNode } from "react";

interface MainContentProps {
  children: ReactNode;
}

export function MainContent({ children }: MainContentProps) {
  return (
    <div className="flex-1 pt-16 overflow-y-auto overflow-x-hidden bg-white dark:bg-black">
      {children}
    </div>
  );
}

