import Image from "next/image";
import Github from "./icons/Github";
import LinkedIn from "./icons/Linkedin";
import Mail from "./icons/Mail";
import Resume from "./icons/Resume";

export default function Introduction() {
  return (
    <div className="flex justify-center gap-6 items-center">
      <div className="flex flex-col w-full">
        <h1 className="text-white text-2xl font-bold mb-1">Vansh Morwani</h1>
        <p className="text-gray-400 leading-tight text-pretty font-mono text-sm">
          Full Stack Developer specializing in backend development, dedicated to
          creating scalable, efficient and robust systems. Passionate about
          learning and building innovative solutions.
        </p>
        <div className="flex items-center gap-2 mt-2">
          <Github />
          <LinkedIn />
          <Mail />
          <Resume />
        </div>
      </div>
      <div className="w-fit h-fit">
        <Image
          className="rounded-md object-cover border-2 border-gray-600"
          height={144}
          width={144}
          alt="profile pic"
          src={"/images/profile.jpg"}
        ></Image>
      </div>
    </div>
  );
}
