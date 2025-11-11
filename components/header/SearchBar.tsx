"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface SearchBarProps {
  value?: string;
  onChange?: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative w-full max-w-2xl">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
      <Input
        type="text"
        placeholder="Pesquisar por URL, tags ou título"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="pl-10 w-full bg-gray-100 dark:bg-gray-900 border-0 rounded-lg h-10 text-sm"
      />
    </div>
  );
}

