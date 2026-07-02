import { projects } from "@/utils/data";
import ProjectCard from "@/components/ProjectCard";
import { BackButton } from "@/components/ui/BackButton";

export default function Projects() {
  return (
    <section id="projects" className="my-4 w-full">
      <div className="w-full mb-6 flex">
        <BackButton link="/#projects" />
      </div>
      <h1 className="text-zinc-900 dark:text-white text-xl font-bold mb-4">All Projects</h1>
      <div className="grid grid-cols-1 gap-4">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </section>
  );
}
