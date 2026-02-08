"use client";

import { useState, useCallback, useEffect } from "react";
import { IProject } from "@/utils/types";
import { skills as allSkills } from "@/utils/data";
import Image from "next/image";

// Map skill names used in projects to the icon URLs from the skills data
// Handles aliases like "React" → "React.js"
const skillAliases: Record<string, string> = {
  React: "React.js",
  "Node.js": "Node.js",
};

function getSkillIcon(skillName: string): string | null {
  const lookup = skillAliases[skillName] || skillName;
  const found = allSkills.find(
    (s) => s.name.toLowerCase() === lookup.toLowerCase(),
  );
  return found?.icon || null;
}

function ImageSlider({ images, name }: { images: string[]; name: string }) {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (isHovered || images.length <= 1) return;
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, [isHovered, next, images.length]);

  if (images.length === 0) {
    return (
      <div className="w-full aspect-video bg-zinc-800 rounded-lg flex items-center justify-center">
        <span className="text-zinc-500 text-sm">No preview</span>
      </div>
    );
  }

  return (
    <div
      className="relative w-full aspect-video rounded-lg overflow-hidden group/slider bg-zinc-950"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Images */}
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, i) => (
          <div key={i} className="w-full flex-shrink-0 relative aspect-video flex items-center justify-center">
            <Image
              src={img}
              alt={`${name} screenshot ${i + 1}`}
              width={1280}
              height={720}
              className="object-fill w-full h-full"
              quality={50}
              priority={i === 0}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => { e.preventDefault(); prev(); }}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full w-7 h-7 flex items-center justify-center opacity-0 group-hover/slider:opacity-100 transition-opacity duration-200 backdrop-blur-sm"
            aria-label="Previous image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={(e) => { e.preventDefault(); next(); }}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full w-7 h-7 flex items-center justify-center opacity-0 group-hover/slider:opacity-100 transition-opacity duration-200 backdrop-blur-sm"
            aria-label="Next image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </>
      )}
    </div>
  );
}

export default function ProjectCard({ project }: { project: IProject }) {
  const images = project.images || [];

  return (
    <div className="group relative flex flex-col bg-zinc-900 border border-zinc-800 rounded-xl hover:border-zinc-700 transition-all duration-300 hover:shadow-lg hover:shadow-black/20 overflow-visible">
      {/* Image Slider */}
      <div className="p-3 pb-0">
        <ImageSlider images={images} name={project.name} />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4 pt-3">
        {/* Title */}
        <h3 className="text-white font-semibold text-base mb-1">
          {project.name}
        </h3>

        {/* Description */}
        <p className="text-zinc-400 text-sm leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Footer: Tech + Links */}
        <div className="flex items-center justify-between mt-auto">
          {/* Tech skill icons - stacked overlapping circles */}
          <div className="flex items-center">
            {project.skills.map((skill, idx) => {
              const iconUrl = getSkillIcon(skill);
              return (
                <div
                  key={idx}
                  className="group/skill relative w-7 h-7 rounded-full bg-zinc-800 border-2 border-zinc-900 flex items-center justify-center hover:scale-125 hover:z-20 transition-transform duration-200 cursor-default"
                  style={{ marginLeft: idx === 0 ? 0 : "-6px", zIndex: project.skills.length - idx }}
                >
                  {iconUrl ? (
                    <Image
                      src={iconUrl}
                      alt={skill}
                      width={16}
                      height={16}
                      className="rounded-full"
                    />
                  ) : (
                    <span className="text-[9px] font-bold text-zinc-300">
                      {skill.slice(0, 2)}
                    </span>
                  )}
                  {/* Tooltip */}
                  <span className="pointer-events-none absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-zinc-800 text-zinc-100 text-[11px] font-medium px-2.5 py-1 rounded-lg border border-zinc-700 shadow-lg shadow-black/30 opacity-0 scale-90 group-hover/skill:opacity-100 group-hover/skill:scale-100 transition-all duration-200 origin-top z-50">
                    {skill}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Action links */}
          <div className="flex items-center gap-2">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-colors group/link"
              title="Live demo"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-zinc-400 group-hover/link:text-white transition-colors"
              >
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
              </svg>
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-colors group/link"
              title="View source"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-zinc-400 group-hover/link:text-white transition-colors"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
