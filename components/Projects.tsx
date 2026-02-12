import { featuredProjects } from "@/utils/data";
import ProjectCard from "./ProjectCard";
import Link from "next/link";

export default function Projects() {
  return (
    <section id="projects" className="my-6 w-full">
      <h1 className="text-white text-xl font-bold mb-4">
        Some of the projects I&apos;ve built recently
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {featuredProjects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <Link
          href="/projects"
          className="bg-gradient-to-b from-zinc-800/70 to-zinc-900/95 border border-zinc-800 hover:border-zinc-700 text-zinc-200 text-sm font-medium py-2 px-5 rounded-lg transition-all duration-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
        >
          View all projects
        </Link>
      </div>
    </section>
  );
}
