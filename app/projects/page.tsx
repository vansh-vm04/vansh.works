import { projects } from "@/utils/data";
import LiveLink from "@/components/icons/LiveLink";
import { BackButton } from "@/components/ui/BackButton";

export default function Projects() {
  return (
    <section id="projects" className="my-4 w-full">
      <div className="w-full mb-8 flex">
        <BackButton link="/#projects" />
      </div>
      <h1 className="text-white text-xl font-bold mb-2">All Projects</h1>
      <div className="flex flex-col items-center w-full">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="flex flex-col w-full bg-zinc-800 rounded-md px-4 py-4 justify-between my-1"
          >
            <div className="mb-4">
              <a
                target="_blank"
                className="text-white hover:underline font-semibold text-md"
                href={project.live}
              >
                {project.name} <LiveLink />
              </a>
              <p className="text-xs text-zinc-400 font-mono text-pretty truncate">
                {project.description}
              </p>
            </div>
            <div className="flex gap-y-1 gap-1 flex-wrap w-full">
              {project.skills.map((skill, idx) => (
                <span
                  className="text-black font-semibold font-mono text-xs bg-gray-400 inline-flex items-center px-2 rounded-md"
                  key={idx}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
