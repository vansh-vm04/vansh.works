import { links } from "@/utils/data";

export default function Mail() {
  return (
    <a
      href={links.mail}
      className="h-8 flex items-center gap-2 group px-3 py-1.5 bg-zinc-100/50 dark:bg-zinc-800/50 border border-zinc-300 dark:border-zinc-600 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-500 hover:cursor-pointer transition-all duration-200 max-md:w-8 max-md:px-0 justify-center"
    >
      <svg
        className="size-4 stroke-zinc-600 dark:stroke-zinc-300 group-hover:stroke-zinc-900 dark:group-hover:stroke-white"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
      <span className="text-zinc-600 dark:text-zinc-300 text-sm font-medium group-hover:text-zinc-900 dark:group-hover:text-white max-md:hidden">
        Email
      </span>
    </a>
  );
}
