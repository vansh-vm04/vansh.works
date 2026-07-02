import { links } from "@/utils/data";

export default function LinkedIn() {
  return (
    <a
      target="_blank"
      href={links.linkedin}
      className="h-8 flex items-center gap-1.5 group px-3 py-1.5 bg-zinc-100/50 dark:bg-zinc-800/50 border border-zinc-300 dark:border-zinc-600 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-500 hover:cursor-pointer transition-all duration-200 max-md:w-8 max-md:px-0 justify-center"
    >
      <svg
        className="fill-zinc-600 dark:fill-zinc-300 size-5 group-hover:fill-zinc-900 dark:group-hover:fill-white"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="100"
        height="100"
        viewBox="0 0 30 30"
      >
        <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
      </svg>
      <span className="text-zinc-600 dark:text-zinc-300 text-sm font-medium group-hover:text-zinc-900 dark:group-hover:text-white max-md:hidden">
        LinkedIn
      </span>
    </a>
  );
}
