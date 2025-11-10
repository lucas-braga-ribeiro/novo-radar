"use client";

import Image from "next/image";

export function AlgoliaBranding() {
  return (
    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
      <span>Search by</span>
      <Image src="/algolia-logo.svg" alt="Algolia" width={20} height={20} className="rounded" />
    </div>
  );
}

