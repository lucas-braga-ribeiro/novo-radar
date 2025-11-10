"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface NavItemProps {
  icon: ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export function NavItem({ icon, label, isActive, onClick }: NavItemProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full flex items-center gap-3 px-4 py-2 text-left transition-colors",
        isActive
          ? "bg-gray-100 dark:bg-gray-900 font-semibold text-gray-900 dark:text-gray-100"
          : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-950"
      )}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}

