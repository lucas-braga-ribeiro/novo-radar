"use client";

import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";

export function SettingsButton() {
  return (
    <Button
      variant="outline"
      size="sm"
      className="bg-gray-100 dark:bg-gray-900 border-0 rounded-lg"
    >
      <Settings className="w-4 h-4" />
    </Button>
  );
}

