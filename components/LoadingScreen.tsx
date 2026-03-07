"use client";

import { useState, useEffect } from "react";

export default function LoadingScreen({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Only wait for critical images (ones with fetchpriority="high" set by Next.js priority prop)
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

    // Check immediately, then set a max timeout as fallback
    checkCriticalImages();
    const maxTimeout = setTimeout(() => setIsLoading(false), 2000);

    return () => clearTimeout(maxTimeout);
  }, []);

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
          <div className="flex flex-col items-center gap-4">
            <div className="w-10 h-10 border-4 border-zinc-700 border-t-white rounded-full animate-spin" />
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
