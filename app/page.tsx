import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import GithubActivity from "@/components/GithubActivity";
import Introduction from "@/components/Introduction";
import OpenSourceContributions from "@/components/OpenSourceContributions";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <Introduction />
      <Experience />
      <Skills />
      <Projects />
      <GithubActivity />
      <OpenSourceContributions />
      <Education />
      <Contact />
    </div>
  );
}
