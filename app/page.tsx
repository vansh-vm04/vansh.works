import Introduction from "@/components/Introduction";
import Skills from "@/components/Skills";

export default function Home() {
  return <div className="w-full h-full flex flex-col items-center">
    <Introduction/>
    <Skills/>
  </div>;
}
