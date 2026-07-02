import { links } from "@/utils/data";

export default function Resume() {
  return (
    <a
      target="_blank"
      href={links.resume}
      className="h-8 flex items-center gap-1.5 group px-3 py-1.5 bg-zinc-100/50 dark:bg-zinc-800/50 border border-zinc-300 dark:border-zinc-600 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-500 hover:cursor-pointer transition-all duration-200 max-md:w-8 max-md:px-0 justify-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="100"
        height="100"
        viewBox="0 0 30 30"
        className="fill-zinc-600 dark:fill-zinc-300 size-4 group-hover:fill-zinc-900 dark:group-hover:fill-white"
      >
        <path d="M24.707,8.793l-6.5-6.5C18.019,2.105,17.765,2,17.5,2H7C5.895,2,5,2.895,5,4v22c0,1.105,0.895,2,2,2h16c1.105,0,2-0.895,2-2 V9.5C25,9.235,24.895,8.981,24.707,8.793z M18,10c-0.552,0-1-0.448-1-1V3.904L23.096,10H18z"></path>
      </svg>
      <span className="text-zinc-600 dark:text-zinc-300 text-sm font-medium group-hover:text-zinc-900 dark:group-hover:text-white max-md:hidden">
        Resume
      </span>
    </a>
  );
}
