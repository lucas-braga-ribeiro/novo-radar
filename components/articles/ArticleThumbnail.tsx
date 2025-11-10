"use client";

import Image from "next/image";

interface ArticleThumbnailProps {
  src: string;
  alt: string;
}

export function ArticleThumbnail({ src, alt }: ArticleThumbnailProps) {
  return (
    <div className="w-20 h-20 flex-shrink-0 rounded overflow-hidden bg-gray-100 dark:bg-gray-900">
      <Image
        src={src}
        alt={alt}
        width={80}
        height={80}
        className="w-full h-full object-cover"
        unoptimized
      />
    </div>
  );
}

