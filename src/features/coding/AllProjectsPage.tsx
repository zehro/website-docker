import { projects } from "./projects";
import { ProjectList } from "./components/ProjectList";

export function AllProjectsPage() {
  return <ProjectList projects={projects} />;
}
