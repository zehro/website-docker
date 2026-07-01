export type ProjectCategory = "frontend" | "backend" | "devops";

export interface Project {
  slug: string;
  title: string;
  description: string;
  stack: string[];
  category: ProjectCategory;
  repoUrl?: string;
  liveUrl?: string;
}

export interface CategoryMeta {
  slug: ProjectCategory;
  label: string;
}

export const categories: CategoryMeta[] = [
  { slug: "frontend", label: "Frontend" },
  { slug: "backend", label: "Backend" },
  { slug: "devops", label: "DevOps" },
];
