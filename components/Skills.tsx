import { skills } from "@/utils/data";
import Image from "next/image";

export default function Skills() {
  return (
    <section id="skills" className="w-full my-6">
      <h1 className="text-white text-lg font-medium mb-2">Engineering Toolkit</h1>
      <div className="flex gap-y-1 gap-1 flex-wrap w-full">
        {skills.map((skill, idx) => (
          <div
            className="bg-zinc-800 flex gap-1.5 justify-center items-center px-1.5 py-1 rounded-sm"
            key={idx}
          >
            <Image
              className="size-4"
              width={16}
              height={16}
              alt={skill.name}
              src={skill.icon}
            />
            <span className="text-white font-mono text-xs">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
