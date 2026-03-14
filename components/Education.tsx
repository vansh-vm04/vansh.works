import { educations } from "@/utils/data";
import Image from "next/image";

export default function Education() {
  return (
    <section id="education" className="w-full my-6">
      <h1 className="text-white text-xl font-bold mb-2">Education</h1>
      <div className="flex flex-col gap-3">
        {educations.map((education) => (
          <div key={education.institution} className="w-full">
            <div className="flex items-start gap-2 md:items-center sm:gap-3">
              <Image
                src={education.logo}
                alt={education.institution}
                width={52}
                height={52}
                className="rounded-full bg-zinc-800 p-1 shrink-0 w-10 h-10 sm:w-[52px] sm:h-[52px] object-cover"
              />
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start md:items-start gap-1 sm:gap-2">
                  <div className="min-w-0">
                    <h2 className="text-white font-semibold text-sm sm:text-base">
                      {education.institution}
                    </h2>
                    <p className="text-zinc-400 font-mono text-xs sm:text-sm">
                      {education.degree}
                    </p>
                  </div>
                  <div className="text-right shrink-0 items-start flex">
                    <span className="text-zinc-300 font-mono text-[10px] sm:text-sm whitespace-nowrap">
                      {education.duration}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}