"use client";

import { Heart, User, Clock } from "lucide-react";
import { Article } from "@/lib/types/article";

interface ArticleMetadataProps {
  article: Article;
}

export function ArticleMetadata({ article }: ArticleMetadataProps) {
  return (
    <div className="flex items-center gap-3 text-xs text-gray-600 dark:text-gray-400 mt-1 flex-wrap">
      <div className="flex items-center gap-1">
        <Heart className="w-3.5 h-3.5" />
        <span>{article.likes} likes</span>
      </div>
      <div className="flex items-center gap-1">
        <User className="w-3.5 h-3.5" />
        <span>{article.author}</span>
      </div>
      <div className="flex items-center gap-1">
        <Clock className="w-3.5 h-3.5" />
        <span>{article.timePosted}</span>
      </div>
      <span>{article.domain}</span>
    </div>
  );
}

