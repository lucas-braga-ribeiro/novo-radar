"use client";

import { Article } from "@/lib/types/article";
import { ArticleCard } from "./ArticleCard";

interface ArticleListProps {
  articles: Article[];
}

export function ArticleList({ articles }: ArticleListProps) {
  return (
    <div>
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
}

