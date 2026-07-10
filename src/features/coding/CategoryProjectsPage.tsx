import { useParams } from "react-router-dom";
import { projects } from "./projects";
import { categories } from "./types";
import { ProjectList } from "./components/ProjectList";

export function CategoryProjectsPage() {
  const { category } = useParams<{ category: string }>();
  const isValid = categories.some((c) => c.slug === category);

  if (!isValid) {
    return <p className="text-gray-500">Unknown category.</p>;
  }

  const filtered = projects.filter((p) => p.category === category);
  return <ProjectList projects={filtered} />;
}
