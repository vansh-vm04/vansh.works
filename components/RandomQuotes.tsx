import { getRandomQuote } from "@/utils/data";

export default function RandomQuotes() {
  const quote = getRandomQuote();
  return (
    <div id="quotes" className="w-full my-4">
      <h1 className="text-white text-xl font-bold mb-2">Quote of the day</h1>
      <div className="w-full flex flex-col py-6 px-10 items-center justify-center border-1 border-zinc-700">
        <p className="text-sm text-zinc-300 font-mono text-pretty">
          {quote.quote}
        </p>
        <p className="text-sm text-zinc-300 font-mono text-pretty mt-4">
          {"~ "}
          {quote.author}
        </p>
      </div>
    </div>
  );
}
