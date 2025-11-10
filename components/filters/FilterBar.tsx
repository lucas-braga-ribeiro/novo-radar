"use client";

import { Button } from "@/components/ui/button";
import { Dropdown } from "./Dropdown";
import { ResultsCount } from "./ResultsCount";
import { FilterType, SortBy, TimeRange } from "@/lib/types/article";

interface FilterBarProps {
  filterType: FilterType;
  onFilterTypeChange: (value: FilterType) => void;
  sortBy: SortBy;
  onSortByChange: (value: SortBy) => void;
  timeRange: TimeRange;
  onTimeRangeChange: (value: TimeRange) => void;
  resultsCount: number;
}

const filterTypeOptions: FilterType[] = ["Search", "Stories"];
const sortByOptions: SortBy[] = ["Popularity", "Date", "Comments"];
const timeRangeOptions: TimeRange[] = ["All time", "Past year", "Past month", "Past week", "Past day"];

export function FilterBar({
  filterType,
  onFilterTypeChange,
  sortBy,
  onSortByChange,
  timeRange,
  onTimeRangeChange,
  resultsCount,
}: FilterBarProps) {
  return (
    <div className="flex items-center gap-2 px-6 py-4 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
      <Button
        variant="outline"
        size="sm"
        className="bg-gray-50 dark:bg-gray-950 border-0 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900"
      >
        Search
      </Button>
      <Dropdown value={filterType} options={filterTypeOptions} onChange={onFilterTypeChange} />
      <span className="text-gray-600 dark:text-gray-400 text-sm">By</span>
      <Dropdown value={sortBy} options={sortByOptions} onChange={onSortByChange} />
      <span className="text-gray-600 dark:text-gray-400 text-sm">For</span>
      <Dropdown value={timeRange} options={timeRangeOptions} onChange={onTimeRangeChange} />
      <div className="flex-1" />
      <ResultsCount count={resultsCount} />
    </div>
  );
}

