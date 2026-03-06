import Contact from "@/components/Contact";
import Introduction from "@/components/Introduction";
import Projects from "@/components/Projects";
import RandomQuotes from "@/components/RandomQuotes";
import Skills from "@/components/Skills";

export default function Home() {
  return <div className="w-full h-full flex flex-col items-center">
    <Introduction/>
    <Skills/>
    <Projects/>
    <RandomQuotes/>
    <Contact/>
  </div>;
}
