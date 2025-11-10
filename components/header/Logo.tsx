"use client";

import Image from "next/image";

import NovoRadarLogo from "@/public/novo-radar-logo.png";

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Image src={NovoRadarLogo} alt="Novo Radar Logo" width={32} height={32} className="rounded" />
  
        <span className="text-base font-semibold text-gray-900 dark:text-gray-100 ">Novo Radar</span>

    </div>
  );
}

