import { books } from "@/utils/data";
import Image from "next/image";

export default function CurrentReads() {
  return (
    <section id="reading" className="w-full my-4">
      <h1 className="text-white text-lg font-medium mb-2">What I’m Reading</h1>
      <div className="w-full h-fit overflow-hidden">
        <div
          className={`flex items-center gap-1 book-slide h-full hover:pause-scroll transform-3d transition-all`}
        >
          {books.concat(books).map((link, idx) => (
            <Image
              className="grayscale-100 hover:grayscale-0 h-42 w-full"
              alt={`reading book ${idx + 1}`}
              key={idx}
              height={176}
              width={144}
              src={link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
