import Image from "next/image";
import { openSourceContributions } from "@/utils/data";

export default function OpenSourceContributions() {
  return (
    <section id="oss-contributions" className="w-full my-6">
      <h1 className="text-zinc-900 dark:text-white text-xl font-medium mb-2">
        Open Source Contributions
      </h1>
      <div className="space-y-3">
        {openSourceContributions.map((contribution, idx) => {
          const iconContent = contribution.repoIcon ? (
            <Image
              src={contribution.repoIcon}
              alt={`${contribution.project} icon`}
              width={28}
              height={28}
              className="rounded-md"
            />
          ) : (
            <span className="text-xs font-semibold text-zinc-600 dark:text-zinc-300">
              {contribution.project.slice(0, 2)}
            </span>
          );

          return (
            <a
              href={contribution.prLink}
              target="_blank"
              rel="noopener noreferrer"
              key={idx}
              className="group flex flex-row items-start gap-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-gradient-to-b from-zinc-100/70 to-white/95 dark:from-zinc-800/70 dark:to-zinc-900/95 p-3 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-200 shadow-[inset_0_1px_0_rgba(0,0,0,0.04)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:flex-row sm:items-center"
            >
              {contribution.repoLink ? (
                <a
                  href={contribution.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/70 transition-colors hover:border-zinc-300 dark:hover:border-zinc-700"
                >
                  {iconContent}
                </a>
              ) : (
                <div className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/70 shrink-0">
                  {iconContent}
                </div>
              )}
              <div className="flex w-full flex-col gap-2 sm:flex-1 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
                <div className="min-w-0">
                  <h2 className="text-zinc-900 dark:text-white font-medium text-sm sm:text-base truncate">
                    {contribution.project}
                  </h2>
                  <p className="text-zinc-600 dark:text-zinc-400 text-[11px] sm:text-[12px] font-mono sm:truncate">
                    {contribution.description}
                  </p>
                </div>
                <a
                  href={contribution.prLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 text-[11px] sm:text-xs font-mono transition-colors sm:shrink-0"
                >
                  → PR #{contribution.prNumber}
                </a>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
