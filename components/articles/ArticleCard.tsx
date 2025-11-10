"use client";

import { Article } from "@/lib/types/article";
import { ArticleThumbnail } from "./ArticleThumbnail";
import { ArticleMetadata } from "./ArticleMetadata";
import { ArticleActions } from "./ArticleActions";
import { Button } from "../ui/button";
import { ArrowRight, ChevronUp } from "lucide-react";

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <div className="flex items-start gap-4 p-4 border-b border-gray-100 dark:border-gray-900 hover:bg-gray-50 dark:hover:bg-gray-950 transition-colors">
      <ArticleThumbnail src={article.thumbnail} alt={article.title} />
      <div className="flex-1 min-w-0">
        <h3 className="font-bold text-base text-gray-900 dark:text-gray-100 mb-1 leading-tight">
          {article.title}
        </h3>
        <ArticleMetadata article={article} />
      </div>
      <ArticleActions article={article} />
      <div className="flex items-center gap-2"> <Button variant="outline" size="sm">Ver mais <ArrowRight className="w-4 h-4" /></Button>
      </div>
    </div>
  );
}

