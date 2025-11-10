"use client";

import { Switch } from "@/components/ui/switch";
import { useDarkMode } from "@/lib/hooks/useDarkMode";
import { Moon, Sun } from "lucide-react";

export function DarkModeToggle() {
  const { isDark, toggle } = useDarkMode();

  return (
    <div className="flex items-center justify-between gap-2">
      <Sun className="w-4 h-4" />
      <Switch checked={isDark} onCheckedChange={toggle} />
      <Moon className="w-4 h-4" />
    </div>
  );
}

