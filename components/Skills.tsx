import { skills } from "@/utils/data";
import Image from "next/image";

export default function Skills() {
  return (
    <section id="skills" className="w-full my-4">
      <h1 className="text-white text-xl font-bold mb-2">Skills</h1>
      <div className="flex gap-y-1 gap-1 flex-wrap w-full">
        {skills.map((skill, idx) => (
          <div
            className="bg-zinc-800 flex gap-2 justify-center items-center px-2 py-1 rounded-md"
            key={idx}
          >
            <Image
              className="size-5"
              width={20}
              height={20}
              alt={skill.name}
              src={skill.icon}
            />
            <span className="text-white font-mono text-xs">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
