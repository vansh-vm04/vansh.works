import { links } from "@/utils/data";

export default function Resume() {
  return (
    <a target="_blank" href={links.resume} className="w-8 h-8 flex items-center justify-center group p-1 border-[0.5px] rounded-md border-zinc-700 hover:bg-zinc-700 hover:cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="100"
        height="100"
        viewBox="0 0 30 30"
        className="fill-gray-400 size-4 group-hover:fill-white"
      >
        <path d="M24.707,8.793l-6.5-6.5C18.019,2.105,17.765,2,17.5,2H7C5.895,2,5,2.895,5,4v22c0,1.105,0.895,2,2,2h16c1.105,0,2-0.895,2-2 V9.5C25,9.235,24.895,8.981,24.707,8.793z M18,10c-0.552,0-1-0.448-1-1V3.904L23.096,10H18z"></path>
      </svg>
    </a>
  );
}
