import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "homelab",
    title: "Homelab Infrastructure",
    description:
      "Self-hosted stack on TrueNAS SCALE with Portainer, Nginx Proxy Manager, and Cloudflare Tunnel for secure remote access without open inbound ports.",
    stack: ["TrueNAS SCALE", "Docker", "Nginx", "Cloudflare"],
    category: "devops",
    repoUrl: "https://github.com/zehro",
  },
  {
    slug: "personal-website",
    title: "This Website",
    description:
      "Personal site built with Vite, React, TypeScript, and Tailwind, deployed via a GitHub Actions -> GHCR -> Portainer pipeline.",
    stack: ["React", "TypeScript", "Vite", "Tailwind"],
    category: "frontend",
    repoUrl: "https://github.com/zehro",
  },
];
