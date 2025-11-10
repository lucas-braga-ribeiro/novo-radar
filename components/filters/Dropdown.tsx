"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

interface DropdownProps<T extends string> {
  value: T;
  options: T[];
  onChange: (value: T) => void;
  className?: string;
}

export function Dropdown<T extends string>({ value, options, onChange, className }: DropdownProps<T>) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className={`bg-gray-100 dark:bg-gray-900 border-0 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 ${className}`}
        >
          {value}
          <ChevronDown className="w-4 h-4 ml-1" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {options.map((option) => (
          <DropdownMenuItem key={option} onClick={() => onChange(option)}>
            {option}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

