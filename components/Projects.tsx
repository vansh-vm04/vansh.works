import { featuredProjects } from "@/utils/data";
import ProjectCard from "./ProjectCard";
import Link from "next/link";

export default function Projects() {
  return (
    <section id="projects" className="my-6 w-full">
      <h1 className="text-zinc-900 dark:text-white text-xl font-medium mb-4">
        Some of the projects I&apos;ve built recently
      </h1>
      <div className="grid grid-cols-1 gap-4">
        {featuredProjects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <Link
          href="/projects"
          className="bg-gradient-to-b from-zinc-100/70 to-white/95 dark:from-zinc-800/70 dark:to-zinc-900/95 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 text-zinc-700 dark:text-zinc-200 text-sm font-medium py-2 px-5 rounded-lg transition-all duration-200 shadow-[inset_0_1px_0_rgba(0,0,0,0.04)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
        >
          View all projects
        </Link>
      </div>
    </section>
  );
}
