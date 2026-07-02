import { links } from "@/utils/data";

export default function Mail() {
  return (
    <a
      href={links.mail}
      className="h-8 flex items-center gap-1.5 group px-3 py-1.5 bg-zinc-100/50 dark:bg-zinc-800/50 border border-zinc-300 dark:border-zinc-600 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-500 hover:cursor-pointer transition-all duration-200 max-md:w-8 max-md:px-0 justify-center"
    >
      <svg
        className="size-4.5 stroke-zinc-600 dark:stroke-zinc-300 group-hover:stroke-zinc-900 dark:group-hover:stroke-white"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="100"
        height="100"
        viewBox="0 0 24 24"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0" />

        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <g id="SVGRepo_iconCarrier">
          {" "}
          <path
            d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12ZM16 12V13.5C16 14.8807 17.1193 16 18.5 16V16C19.8807 16 21 14.8807 21 13.5V12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21H16"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />{" "}
        </g>
      </svg>
      <span className="text-zinc-600 dark:text-zinc-300 text-sm font-medium group-hover:text-zinc-900 dark:group-hover:text-white max-md:hidden">
        Mail
      </span>
    </a>
  );
}
