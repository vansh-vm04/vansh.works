import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Introduction from "@/components/Introduction";
import Projects from "@/components/Projects";
import RandomQuotes from "@/components/RandomQuotes";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <Introduction />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <RandomQuotes />
      <Contact />
    </div>
  );
}
