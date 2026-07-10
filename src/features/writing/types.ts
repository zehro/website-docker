export interface Post {
  slug: string;
  title: string;
  date: string; // ISO format, e.g. "2026-07-10"
  excerpt: string;
  content: string; // markdown or plain paragraphs for now
}
