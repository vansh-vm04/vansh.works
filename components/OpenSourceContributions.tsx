import { openSourceContributions } from "@/utils/data";

export default function OpenSourceContributions() {
  return (
    <section id="oss-contributions" className="w-full my-6">
      <h1 className="text-white text-lg font-medium mb-2">
        Open Source Contributions
      </h1>
      <div className="space-y-3">
        {openSourceContributions.map((contribution, idx) => (
          <div
            key={idx}
            className="border border-zinc-700 rounded-lg p-4 hover:border-blue-500 transition-colors"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h2 className="text-white font-medium mb-1 text-[12px] sm:text-base">
                  {contribution.project}
                </h2>
                <p className="text-zinc-400 text-[12px] mb-2 font-mono">
                  {contribution.description}
                </p>
                <a
                  href={contribution.prLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 text-sm font-mono transition-colors"
                >
                  → View Pull Request #{contribution.prNumber}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
