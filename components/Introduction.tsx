import Image from "next/image";
import Github from "./icons/Github";
import LinkedIn from "./icons/Linkedin";
import Mail from "./icons/Mail";
import Resume from "./icons/Resume";

export default function Introduction() {
  return (
    <section id="about" className="flex justify-center gap-6 items-center my-6">
      <div className="flex flex-col w-full">
        <h1 className="text-zinc-900 dark:text-white text-md font-bold mb-1 flex items-center gap-2 sm:text-2xl text-nowrap">
          Hey👋, I’m Vansh
          <span className="sm:text-[0.8rem] text-[0.5rem] font-medium bg-zinc-500/20 text-black dark:text-white ml-2 px-2.5 py-1 rounded-md flex items-center gap-1.5 text-nowrap">
            <span className="size-1.5 rounded-full bg-green-400 animate-pulse shadow-[0_0_6px_#4ade80]" />
            Open to Work
          </span>
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 leading-tight text-pretty font-mono text-[0.95rem] max-sm:text-sm my-1">
          A full-stack developer who builds web and mobile applications end to end. I enjoy
          turning ideas into scalable products, from crafting intuitive user
          experiences to developing reliable APIs and backend systems. When I&apos;m
          not coding, you&apos;ll find me reading, playing chess, or hanging out with
          friends.
        </p>
        <p className="text-zinc-600 dark:text-zinc-400 text-sm font-mono text-pretty flex items-center gap-1.5 my-2">
          <svg className="size-4 stroke-zinc-600 dark:stroke-zinc-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          Jaipur, Rajasthan
        </p>
        <div className="flex items-center gap-2 mt-2">
          <Github />
          <LinkedIn />
          <Mail />
          <Resume />
        </div>
      </div>
      <div className="w-fit h-fit">
        <figure>
          <Image
            className="rounded-md object-cover border-2 border-zinc-300 dark:border-zinc-500"
            height={144}
            width={144}
            alt="Vansh Morwani"
            src={"/images/vansh-morwani.jpg"}
            priority
          />
          <figcaption className="sr-only">
            Vansh Morwani | Full Stack Developer
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
