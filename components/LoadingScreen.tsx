"use client";

import { useState, useEffect } from "react";

export default function LoadingScreen({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkCriticalImages = () => {
      const criticalImages = document.querySelectorAll(
        'img[fetchpriority="high"]'
      );

      if (criticalImages.length === 0) {
        setIsLoading(false);
        return;
      }

      const imagePromises = Array.from(criticalImages).map((img) => {
        if ((img as HTMLImageElement).complete) {
          return Promise.resolve();
        }
        return new Promise<void>((resolve) => {
          img.addEventListener("load", () => resolve(), { once: true });
          img.addEventListener("error", () => resolve(), { once: true });
        });
      });

      Promise.all(imagePromises).then(() => setIsLoading(false));
    };

    checkCriticalImages();
    const maxTimeout = setTimeout(() => setIsLoading(false), 2000);

    return () => clearTimeout(maxTimeout);
  }, []);

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-black">
          <div className="flex flex-col items-center gap-4">
            <div className="w-10 h-10 border-4 border-zinc-200 dark:border-zinc-700 border-t-zinc-900 dark:border-t-white rounded-full animate-spin" />
          </div>
        </div>
      )}
      <div
        className={`transition-opacity duration-300 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        {children}
      </div>
    </>
  );
}
