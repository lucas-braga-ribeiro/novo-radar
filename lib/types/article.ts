export interface Article {
  id: string;
  title: string;
  thumbnail: string;
  likes: number;
  author: string;
  timePosted: string;
  domain: string;
  comments: number;
  url: string;
}

export type NavItem = "Quente" | "Enquetes" | "Vagas" | "Starred";

export type FilterType = "Search" | "Stories";

export type SortBy = "Popularity" | "Date" | "Comments";

export type TimeRange = "All time" | "Past year" | "Past month" | "Past week" | "Past day";

