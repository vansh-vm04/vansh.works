import { links } from "@/utils/data";

export default function Contact() {
  return (
    <section id="contact" className="w-full my-6">
      <span className="text-zinc-400 text-lg text-pretty">
        Open to new opportunities. Feel free to email me at{" "}
        <a className="text-white hover:underline" href={links.mail}>
          contact@vansh.works
        </a>
      </span>
    </section>
  );
}
