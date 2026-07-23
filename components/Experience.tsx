"use client";

import { experiences } from "@/utils/data";
import Image from "next/image";
import { useState } from "react";

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const isExpanded = (index: number) => {
    return expandedIndex === index || hoveredIndex === index;
  };

  return (
    <section id="experience" className="w-full my-6">
      <h1 className="text-zinc-900 dark:text-white text-xl font-medium mb-2">Work Experience</h1>
      <div className="flex flex-col gap-3">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="transition-all cursor-pointer sm:cursor-default"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => toggleExpand(index)}
          >
            <div className="flex items-start gap-2 md:items-center sm:gap-3">
              <Image
                src={exp.logo}
                alt={exp.company}
                width={52}
                height={52}
                className="rounded-full bg-zinc-100 dark:bg-zinc-800 p-1 shrink-0 w-10 h-10 sm:w-[52px] sm:h-[52px]"
              />
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start md:items-start gap-1 sm:gap-2">
                  <div className="min-w-0">
                    <h2 className="text-zinc-900 dark:text-white font-semibold text-sm sm:text-base">{exp.company}</h2>
                    <p className="text-zinc-600 dark:text-zinc-400 font-mono text-xs sm:text-sm">{exp.role}</p>
                  </div>
                  <div className="text-right shrink-0 items-start flex flex-col">
                    <span className="text-zinc-700 dark:text-zinc-300 font-mono text-[10px] sm:text-[13px] whitespace-nowrap justify-end w-full">{exp.duration}</span>
                    <span className="text-zinc-500 dark:text-zinc-500 font-mono text-[10px] sm:text-[13px] whitespace-nowrap mt-0.5 flex items-center gap-0.5 justify-end w-full">
                      <svg className="size-3 stroke-zinc-500 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      {exp.location}</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isExpanded(index) ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="mt-3 pt-3 border-t border-zinc-200 dark:border-zinc-700">
                  <p className="text-zinc-600 dark:text-zinc-400 font-mono text-xs sm:hidden">
                    {exp.responsibilities.join(" ")}
                  </p>
                  <ul className="hidden sm:block list-disc pl-5 space-y-1">
                    {exp.responsibilities.map((item, idx) => (
                      <li key={idx} className="text-zinc-600 dark:text-zinc-400 font-mono text-sm pl-1">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
