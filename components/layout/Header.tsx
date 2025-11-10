"use client";

import { Logo } from "../header/Logo";
import { SearchBar } from "../header/SearchBar";
import { AlgoliaBranding } from "../header/AlgoliaBranding";
import { SettingsButton } from "../header/SettingsButton";

interface HeaderProps {
  searchQuery?: string;
  onSearchChange?: (value: string) => void;
}

export function Header({ searchQuery, onSearchChange }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
      <div className="flex items-center justify-between h-full px-6">
        <Logo />
        <div className="flex-1 flex justify-center max-w-2xl mx-8">
          <SearchBar value={searchQuery} onChange={onSearchChange} />
        </div>
        
      </div>
    </header>
  );
}

