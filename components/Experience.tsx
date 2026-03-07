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
      <h1 className="text-white text-xl font-bold mb-2">Work Experience</h1>
      <div className="flex flex-col gap-3">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="transition-all cursor-pointer md:cursor-default"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => toggleExpand(index)}
          >
            <div className="flex items-start gap-2 md:items-center md:gap-3">
              <Image
                src={exp.logo}
                alt={exp.company}
                width={52}
                height={52}
                className="rounded-full bg-zinc-800 p-1 shrink-0 w-10 h-10 md:w-[52px] md:h-[52px]"
              />
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start md:items-start gap-1 md:gap-2">
                  <div className="min-w-0">
                    <h2 className="text-white font-semibold text-sm md:text-base">{exp.company}</h2>
                    <p className="text-zinc-400 font-mono text-xs md:text-sm">{exp.role}</p>
                  </div>
                  <div className="text-right shrink-0 items-start flex">
                    <span className="text-zinc-300 font-mono text-[10px] md:text-sm whitespace-nowrap">{exp.duration}</span>
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
                <div className="mt-3 pt-3 border-t border-zinc-700">
                  {/* Paragraph on mobile */}
                  <p className="text-zinc-400 font-mono text-xs md:hidden">
                    {exp.responsibilities.join(" ")}
                  </p>
                  {/* Bullet list on desktop */}
                  <ul className="hidden md:block list-disc pl-5 space-y-1">
                    {exp.responsibilities.map((item, idx) => (
                      <li key={idx} className="text-zinc-400 font-mono text-sm pl-1">
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
