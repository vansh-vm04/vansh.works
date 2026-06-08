import Image from "next/image";
import Github from "./icons/Github";
import LinkedIn from "./icons/Linkedin";
import Mail from "./icons/Mail";
import Resume from "./icons/Resume";

export default function Introduction() {
  return (
    <section id="about" className="flex justify-center gap-6 items-center my-6">
      <div className="flex flex-col w-full">
        <h1 className="text-white text-2xl font-bold mb-1">Hey👋, I’m Vansh</h1>
        <p className="text-zinc-400 leading-tight text-pretty font-mono text-[0.95rem] max-sm:text-sm">
          a full-stack developer who builds web and mobile applications end to end. i enjoy
          turning ideas into scalable products, from crafting intuitive user
          experiences to developing reliable APIs and backend systems. when I&apos;m
          not coding, you&apos;ll find me reading, playing chess, or hanging out with
          friends.
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
            className="rounded-md object-cover border-2 border-zinc-500"
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
