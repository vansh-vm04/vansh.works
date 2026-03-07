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
        <p className="text-zinc-400 leading-tight text-pretty font-mono text-[0.9rem]">
          a full stack developer with a strong focus on backend development.
          i enjoy building impactful projects, and outside of coding, i spend
          time reading, playing chess, or hanging out with friends.
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
          <figcaption className="sr-only">Vansh Morwani | Full Stack Developer</figcaption>
        </figure>
      </div>
    </section>
  );
}
