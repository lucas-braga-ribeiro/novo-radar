"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

interface ArticleThumbnailProps {
  src?: string;
  alt: string;
  url?: string;
}

const buildPreviewUrl = (target: string) =>
  `https://api.microlink.io?url=${encodeURIComponent(
    target
  )}&audio=false&video=false&screenshot=false`;

export function ArticleThumbnail({ src, alt, url }: ArticleThumbnailProps) {
  const [previewSrc, setPreviewSrc] = useState<string | undefined>(src);
  const [isErrored, setIsErrored] = useState(false);

  const requestUrl = useMemo(() => (url ? buildPreviewUrl(url) : undefined), [url]);

  useEffect(() => {
    if (!requestUrl) {
      setPreviewSrc(src);
      return;
    }

    let isMounted = true;
    const controller = new AbortController();

    fetch(requestUrl, { signal: controller.signal })
      .then((response) => response.json())
      .then((data) => {
        if (!isMounted) return;
        const imageUrl =
          data?.data?.image?.url ??
          data?.data?.logo?.url ??
          data?.data?.screenshot?.url;

        if (imageUrl) {
          setPreviewSrc(imageUrl);
        } else {
          setPreviewSrc(src);
        }
      })
      .catch(() => {
        if (!isMounted) return;
        setPreviewSrc(src);
      });

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [requestUrl, src]);

  const displaySrc = !isErrored ? previewSrc ?? src : src;

  return (
    <div className="w-20 h-20  max-h-20 rounded overflow-hidden bg-gray-100 dark:bg-gray-900">
      <Image
        src={displaySrc ?? "/favicon.ico"}
        alt={alt}
        width={80}
        height={80}
        className="w-full h-full object-cover"
        unoptimized
        onError={() => setIsErrored(true)}
      />
    </div>
  );
}
