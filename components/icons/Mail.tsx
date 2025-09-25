import { links } from "@/utils/data";

export default function Mail() {
  return (
    <a href={links.mail} className="w-8 h-8 flex items-center justify-center group p-1 border-[0.5px] rounded-md border-zinc-700 hover:bg-zinc-700 hover:cursor-pointer transform-3d transition-colors">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className="stroke-zinc-400 size-4 stroke-2 group-hover:stroke-white"
      >
        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
      </svg>
    </a>
  );
}
