import { skills } from "@/utils/data";
import Image from "next/image";

export default function Skills() {
  return (
    <section id="skills" className="w-full my-6">
      <h1 className="text-zinc-900 dark:text-white text-xl font-medium mb-2">Engineering Toolkit</h1>
      <div className="flex gap-y-1 gap-1 flex-wrap w-full">
        {skills.map((skill, idx) => (
          <div
            className="bg-zinc-100 dark:bg-zinc-800 flex gap-1.5 justify-center items-center px-1.5 py-1 rounded-sm"
            key={idx}
          >
            <Image
              className="size-5"
              width={20}
              height={20}
              alt={skill.name}
              src={skill.icon}
            />
            <span className="text-zinc-900 dark:text-white font-mono text-sm">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
