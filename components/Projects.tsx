"use client";
import { projects } from "@/utils/data";
import LiveLink from "./icons/LiveLink";
import { useEffect, useState } from "react";
import { IProject } from "@/utils/types";
import Button from "./ui/Button";

export default function Projects() {
  const [featured, setFeatured] = useState<IProject[]>([]);
  useEffect(() => {
    const featuredProjects = projects.filter((p) => p.featured);
    setFeatured(featuredProjects);
  }, []);
  return (
    <section id="projects" className="my-4 w-full">
      <h1 className="text-white text-xl font-bold mb-2">Projects</h1>
      <div className="flex flex-col items-center w-full">
        {featured.map((project, idx) => (
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
        {featured !== projects && <Button title="View more" onClick={()=>setFeatured(projects)} />}
      </div>
    </section>
  );
}
