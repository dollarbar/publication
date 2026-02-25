// src/content/articles.ts
export type Article = {
  slug: string;
  title: string;
  date?: string;
  author?: string;
  body: string; // markdown or plain text
};

export const articles: Article[] = [
  {
    slug: "vukovic-venice-1519",
    title: "The Vuković Printing House of Venice (1519)",
    date: "2026-02-24",
    author: "Editorial",
    body: `Your long text here...`,
  },
  {
    slug: "church-slavonic-type",
    title: "Church Slavonic Type and Ornament",
    body: `More text here...`,
  },
];

export function getArticleBySlug(slug: string) {
  return articles.find(a => a.slug === slug);
}

