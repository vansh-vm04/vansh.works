import Link from "next/link";

export function BackButton({ link }: { link: string }) {
  return (
    <Link className="flex items-center gap-1 text-zinc-400 text-md italic" href={link}>
      <svg
        className="stroke-zinc-400 size-4 stroke-[1.5]"
        fill="none"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polyline points="9 14 4 9 9 4" />
        <path d="M20 20v-7a4 4 0 0 0-4-4H4" />
      </svg>{" "}
      back
    </Link>
  );
}
