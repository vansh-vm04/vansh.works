import { skills } from "@/utils/data";

export default function Skills() {
  return (
    <div className="w-full my-8">
      <h1 className="text-white text-xl font-bold mb-2">Skills</h1>
      <div className="flex gap-y-1 gap-1 flex-wrap w-full">
        {skills.map((skill, idx) => (
          <span
            className="text-black font-semibold font-mono text-xs bg-gray-300 inline-flex items-center px-2 py-0.5 rounded-md"
            key={idx}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
