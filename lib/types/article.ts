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

export type NavItem = "Quente" | "Enquetes" | "Vagas" | "Ferramentas";
