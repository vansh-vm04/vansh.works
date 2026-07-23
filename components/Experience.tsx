"use client";

import { experiences, skills } from "@/utils/data";
import Image from "next/image";
import { useState } from "react";

const skillIcons: Record<string, string> = Object.fromEntries(
  skills.map((s) => [s.name, s.icon])
);

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="w-full my-6">
      <h1 className="text-zinc-900 dark:text-white text-xl font-medium mb-2">Work Experience</h1>
      <div className="flex flex-col gap-3">
        {experiences.map((exp, index) => {
          const isOpen = expandedIndex === index;
          return (
            <div key={index}>
              <div
                className="flex items-start gap-2 md:items-center sm:gap-3 cursor-pointer sm:cursor-pointer"
                onClick={() => toggleExpand(index)}
              >
                <Image
                  src={exp.logo}
                  alt={exp.company}
                  width={52}
                  height={52}
                  className="rounded-full bg-zinc-100 dark:bg-zinc-800 p-1 shrink-0 w-10 h-10 sm:w-[52px] sm:h-[52px]"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start md:items-center gap-1 sm:gap-2">
                    <div className="min-w-0">
                      <h2 className="text-zinc-900 dark:text-white font-semibold text-sm sm:text-base flex items-center gap-1.5">
                        {exp.company}
                        <svg className={`size-3.5 stroke-zinc-500 transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="m9 18 6-6-6-6" />
                        </svg>
                      </h2>
                      <p className="text-zinc-600 dark:text-zinc-400 font-mono text-xs sm:text-sm">{exp.role}</p>
                    </div>
                    <div className="text-right shrink-0 items-end flex flex-col">
                      <span className="text-zinc-700 dark:text-zinc-300 font-mono text-[10px] sm:text-[13px] whitespace-nowrap">{exp.duration}</span>
                      <span className="text-zinc-500 dark:text-zinc-500 font-mono text-[10px] sm:text-[13px] whitespace-nowrap mt-0.5 flex items-center gap-1 justify-end">
                        <svg className="size-2.5 stroke-zinc-500 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                        {exp.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="mt-3 ml-12 sm:ml-[64px] pt-3 border-t border-zinc-200 dark:border-zinc-700">
                    {exp.skills && exp.skills.length > 0 && (
                      <div className="mb-3">
                        <p className="text-zinc-900 dark:text-white font-semibold text-xs sm:text-sm mb-2">Technologies & Tools</p>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill) => (
                            <div key={skill} className="group relative">
                              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center p-1.5 transition-colors hover:bg-zinc-200 dark:hover:bg-zinc-700">
                                <Image
                                  src={skillIcons[skill] || `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.toLowerCase().replace(/\.js$/, "js")}/${skill.toLowerCase().replace(/\.js$/, "js")}-original.svg`}
                                  alt={skill}
                                  width={20}
                                  height={20}
                                  className="w-full h-full object-contain"
                                />
                              </div>
                              <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-[12px] font-mono bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 px-1.5 py-0.5 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                                {skill}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    <div>
                      <p className="text-zinc-900 dark:text-white font-semibold text-xs sm:text-sm mb-2">What I&apos;ve done</p>
                      <ul className="list-disc pl-4 space-y-1">
                        {exp.responsibilities.map((item, idx) => (
                          <li key={idx} className="text-zinc-600 dark:text-zinc-400 font-mono text-xs sm:text-sm leading-relaxed">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
