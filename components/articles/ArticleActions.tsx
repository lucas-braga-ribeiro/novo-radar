"use client";

import { ChevronUp, MessageCircle, Share2, Star } from "lucide-react";
import { Article } from "@/lib/types/article";

interface ArticleActionsProps {
  article: Article;
}

export function ArticleActions({ article }: ArticleActionsProps) {
  return (
    <div className="flex items-center gap-2 flex-shrink-0">
      <div className="px-2 py-1 bg-gray-100 dark:bg-gray-900 rounded text-xs text-gray-700 dark:text-gray-300 min-w-[2.5rem] text-center flex items-center gap-2">
        <MessageCircle className="size-3" />
        {article.comments}
      </div>
      <button className="p-1.5 hover:bg-green-100 dark:hover:bg-green-900 rounded transition-colors cursor-pointer">
        <ChevronUp className="size-5 text-green-600 dark:text-green-400" />
      </button>
    
    </div>
  );
}

