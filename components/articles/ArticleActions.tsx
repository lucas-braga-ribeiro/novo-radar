"use client";

import { Share2, Star } from "lucide-react";
import { Article } from "@/lib/types/article";

interface ArticleActionsProps {
  article: Article;
}

export function ArticleActions({ article }: ArticleActionsProps) {
  return (
    <div className="flex items-center gap-2 flex-shrink-0">
      <div className="px-2 py-1 bg-gray-100 dark:bg-gray-900 rounded text-xs text-gray-700 dark:text-gray-300 min-w-[2.5rem] text-center">
        {article.comments}
      </div>
      <button className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-900 rounded transition-colors">
        <Share2 className="w-4 h-4 text-gray-600 dark:text-gray-400" />
      </button>
      <button className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-900 rounded transition-colors">
        <Star className="w-4 h-4 text-gray-600 dark:text-gray-400" />
      </button>
    </div>
  );
}

