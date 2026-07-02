import { links } from "@/utils/data";
import Resume from "./icons/Resume";
import LinkedIn from "./icons/Linkedin";
import Github from "./icons/Github";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full my-6 border-t-2 border-zinc-200 dark:border-zinc-800 pt-8 flex flex-col items-center"
    >
      <span className="text-zinc-600 dark:text-zinc-400 text-lg text-pretty text-center">
        Open to new opportunities. Feel free to email me at{" "}
        <a className="text-zinc-900 dark:text-white hover:underline" href={links.mail}>
          vanshmorwani1@gmail.com
        </a>
      </span>

      <div className="flex items-center gap-2 mt-6">
        <Github />
        <LinkedIn />
        <Resume />
      </div>
    </section>
  );
}
