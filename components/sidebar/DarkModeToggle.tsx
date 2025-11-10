"use client";

import { Switch } from "@/components/ui/switch";
import { useDarkMode } from "@/lib/hooks/useDarkMode";

export function DarkModeToggle() {
  const { isDark, toggle } = useDarkMode();

  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-gray-600 dark:text-gray-400">Dark HN</span>
      <Switch checked={isDark} onCheckedChange={toggle} />
    </div>
  );
}

