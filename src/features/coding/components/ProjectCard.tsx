import type { Project } from "../types";

export function ProjectCard({ project }: { project: Project }) {
  const hasLinks = project.repoUrl || project.liveUrl;

  return (
    <div className="rounded-lg border border-gray-200 p-6 transition-shadow hover:shadow-md">
      <h2 className="text-xl font-semibold text-gray-900">{project.title}</h2>
      <p className="mt-2 text-sm text-gray-600">{project.description}</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <li
            key={tech}
            className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
          >
            {tech}
          </li>
        ))}
      </ul>
      {hasLinks && (
        <div className="mt-4 flex gap-4 text-sm font-medium">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="text-gray-900 underline underline-offset-4"
            >
              Repo
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="text-gray-900 underline underline-offset-4"
            >
              Live
            </a>
          )}
        </div>
      )}
    </div>
  );
}
