"use client";

import { useMemo, useState } from "react";
import { Article, NavItem, FilterType, SortBy, TimeRange } from "../types/article";
import { mockArticles } from "../data/mockArticles";

export function useArticles() {
  const [activeNav, setActiveNav] = useState<NavItem>("Quente");
  const [filterType, setFilterType] = useState<FilterType>("Stories");
  const [sortBy, setSortBy] = useState<SortBy>("Popularity");
  const [timeRange, setTimeRange] = useState<TimeRange>("All time");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = useMemo(() => {
    let articles = [...mockArticles];

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      articles = articles.filter(
        (article) =>
          article.title.toLowerCase().includes(query) ||
          article.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    // Filter by nav item (for now, all show same articles)
    // In a real app, this would filter by category

    // Sort articles
    switch (sortBy) {
      case "Popularity":
        articles.sort((a, b) => b.likes - a.likes);
        break;
      case "Comments":
        articles.sort((a, b) => b.comments - a.comments);
        break;
      case "Date":
        // For mock data, we'll just keep original order
        break;
    }

    return articles;
  }, [activeNav, filterType, sortBy, timeRange, searchQuery]);

  return {
    articles: filteredArticles,
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
  };
}

