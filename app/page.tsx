"use client";

import { Header } from "@/components/layout/Header";
import { MainContent } from "@/components/layout/MainContent";
import { ArticleList } from "@/components/articles/ArticleList";
import { useArticles } from "@/lib/hooks/useArticles";

export default function Home() {
  const { articles, searchQuery, setSearchQuery } = useArticles();

  return (
    <div className="flex flex-col h-screen bg-white dark:bg-black">
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <MainContent>
        <div className="mx-auto w-2/3 h-full flex flex-col">
          <ArticleList articles={articles} />
        </div>
      </MainContent>
    </div>
  );
}
