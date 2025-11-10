"use client";

import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { MainContent } from "@/components/layout/MainContent";
import { FilterBar } from "@/components/filters/FilterBar";
import { ArticleList } from "@/components/articles/ArticleList";
import { useArticles } from "@/lib/hooks/useArticles";

export default function Home() {
  const {
    articles,
    activeNav,
    setActiveNav,
    filterType,
    setFilterType,
    sortBy,
    setSortBy,
    timeRange,
    setTimeRange,
    searchQuery,
    setSearchQuery,
  } = useArticles();

  return (
    <div className="flex flex-col h-screen bg-white dark:bg-black overflow-hidden">
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <div className="flex flex-1 pt-16 overflow-hidden">
        <Sidebar activeNav={activeNav} onNavChange={setActiveNav} />
        <MainContent>
          <div className="ml-64 h-full flex flex-col">
            <FilterBar
              filterType={filterType}
              onFilterTypeChange={setFilterType}
              sortBy={sortBy}
              onSortByChange={setSortBy}
              timeRange={timeRange}
              onTimeRangeChange={setTimeRange}
              resultsCount={articles.length}
            />
            <div className="flex-1 overflow-y-auto">
              <ArticleList articles={articles} />
            </div>
          </div>
        </MainContent>
      </div>
    </div>
  );
}
