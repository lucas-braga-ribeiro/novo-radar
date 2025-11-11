"use client";

import { Article } from "@/lib/types/article";
import { ArticleThumbnail } from "./ArticleThumbnail";
import { ArticleMetadata } from "./ArticleMetadata";
import { Button } from "../ui/button";
import { ArrowRight, ChevronUp, Heart, ThumbsUp } from "lucide-react";
import ArticleTag from "./ArticleTag";

interface ArticleCardProps {
  article: Article;
  
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <div className="flex items-start gap-4 p-4 border-b border-gray-100 dark:border-gray-900  h-32  hover:bg-gray-50 dark:hover:bg-gray-950 transition-colors">
      <ArticleThumbnail src={article.thumbnail} alt={article.title} url={article.url} />
      <div className="flex-1 min-w-0 ">
        <h3 className="font-bold text-base text-gray-900 dark:text-gray-100 mb-1 leading-tight">
          {article.title} <a href={article.url} target="_blank" className="text-gray-500 dark:text-gray-400 text-xs">({article.url})</a>
        </h3>
          <ArticleMetadata article={article} />
          <div className="flex items-center gap-2 mt-2"> 
          {article.tags.map((tag) => (
            <ArticleTag key={tag} tag={tag} />
          ))}
        
        </div>
      </div>
    
  
  
        <Button variant="outline" size="sm" className="group h-full w-20 rounded-sm flex items-center justify-center bg-gray-100 dark:bg-gray-900 cursor-pointer hover:border-gray-300 dark:hover:border-gray-700
         hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"> <ThumbsUp className="size-5 group-hover:-rotate-12 group-hover:scale-110 transition-all duration-300" /></Button>
        </div>
     
  );
}