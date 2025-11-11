"use client";

import { Heart, User, Clock, MessageCircle, ChevronUp, ThumbsUp } from "lucide-react";
import { Article } from "@/lib/types/article";

interface ArticleMetadataProps {
  article: Article;
}

export function ArticleMetadata({ article }: ArticleMetadataProps) {
  return (
    <div className="flex items-center gap-3 text-xs text-gray-600 dark:text-gray-400 mt-1 flex-wrap">
      <div className="flex items-center gap-1">
        <ThumbsUp className="size-3" />
        <span>{article.likes} </span>
      </div>
      <div className="px-2 py-1  text-xs text-gray-700 dark:text-gray-300 min-w-[2.5rem] text-center flex items-center gap-2">
        <MessageCircle className="size-3" />
        {article.comments}
      </div>
     
      <div className="flex items-center gap-1">
        <Clock className="w-3.5 h-3.5" />
        <span>{article.timePosted}</span>
      </div>
      
    </div>
  );
}

