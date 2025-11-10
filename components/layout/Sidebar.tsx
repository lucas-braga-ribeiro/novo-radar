"use client";

import { NavItem } from "../sidebar/NavItem";
import { DarkModeToggle } from "../sidebar/DarkModeToggle";
import { NavItem as NavItemType } from "@/lib/types/article";
import { Monitor, Flame, Bell, MessageSquare, Lightbulb, DollarSign, Star, Wrench } from "lucide-react";

const navItems: { id: NavItemType; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { id: "Quente", label: "Quente", icon: Flame },
  { id: "Enquetes", label: "Enquetes", icon: Lightbulb },
  { id: "Vagas", label: "Vagas", icon: DollarSign },
];

interface SidebarProps {
  activeNav: NavItemType;
  onNavChange: (nav: NavItemType) => void;
}

export function Sidebar({ activeNav, onNavChange }: SidebarProps) {
  return (
    <aside className="fixed left-0 top-16 bottom-0 w-64 bg-white dark:bg-black border-r border-gray-200 dark:border-gray-800 flex flex-col">
      <nav className="flex-1 py-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavItem
              key={item.id}
              icon={<Icon className="w-5 h-5" />}
              label={item.label}
              isActive={activeNav === item.id}
              onClick={() => onNavChange(item.id)}
            />
          );
        })}
      </nav>
      <div className="p-4 border-t border-gray-200 dark:border-gray-800">
        <DarkModeToggle />
      </div>
    </aside>
  );
}

