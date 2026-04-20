"use client";
import { getRandomQuote } from "@/utils/quotes";
import { IQuote } from "@/utils/types";
import { useEffect, useState } from "react";

export default function RandomQuotes() {
  const [quote, setQuote] = useState<IQuote | undefined>();

  useEffect(() => {
    setQuote(getRandomQuote());
  }, []);

  const refreshQuote = () => {
    setQuote(getRandomQuote());
  };

  return (
    <section id="quotes" className="w-full my-6">
      <button
        type="button"
        onClick={refreshQuote}
        className="relative w-full overflow-hidden rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900/80 via-zinc-950 to-black px-10 py-7 text-left transition-colors hover:border-zinc-700 sm:px-8 sm:py-8"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(56,189,248,0.12),transparent_40%),radial-gradient(circle_at_88%_80%,rgba(59,130,246,0.10),transparent_35%)]" />
        <div className="relative z-10 flex flex-col items-center text-center">
          <span className="font-serif text-4xl leading-none text-zinc-500">
            &ldquo;
          </span>
          <p className="max-w-2xl text-sm sm:text-base text-zinc-200 font-serif leading-relaxed text-pretty italic">
            {quote?.quote}
          </p>
          <p className="mt-4 text-xs sm:text-sm text-zinc-400 font-serif tracking-wide italic">
            ~ {quote?.author}
          </p>
        </div>
      </button>
    </section>
  );
}
