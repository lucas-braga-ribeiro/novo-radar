"use client";

interface ResultsCountProps {
  count: number;
  time?: number;
}

export function ResultsCount({ count, time = 0.006 }: ResultsCountProps) {
  return (
    <div className="text-xs text-gray-500 dark:text-gray-500">
      {count.toLocaleString()} results ({time} seconds)
    </div>
  );
}

