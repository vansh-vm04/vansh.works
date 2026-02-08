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
          className="bg-zinc-800 border border-zinc-700 hover:bg-zinc-700 hover:border-zinc-600 text-zinc-200 text-sm font-medium py-2 px-5 rounded-lg transition-all duration-200"
        >
          View all projects
        </Link>
      </div>
    </section>
  );
}
