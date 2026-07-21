"use client";

import { useEffect, useRef } from "react";

const INTRO_MINIMUM_MS = 1050;
const INTRO_MAXIMUM_MS = 2600;
const INTRO_EXIT_MS = 420;

export default function IntroSplash() {
  const splashRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const splash = splashRef.current;
    const root = document.documentElement;

    if (!splash) return;

    let minimumElapsed = false;
    let pageLoaded = document.readyState === "complete";
    let exitStarted = false;
    let exitTimer: ReturnType<typeof setTimeout> | undefined;

    const completeIntro = () => {
      splash.classList.add("is-hidden");
      root.classList.remove("intro-active");
      root.dataset.introComplete = "true";
      window.dispatchEvent(new Event("intro:complete"));
    };

    const startExit = () => {
      if (!minimumElapsed || !pageLoaded || exitStarted) return;

      exitStarted = true;
      splash.classList.add("is-leaving");
      exitTimer = setTimeout(completeIntro, INTRO_EXIT_MS);
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      completeIntro();
      return;
    }

    root.classList.add("intro-active");

    const handleLoad = () => {
      pageLoaded = true;
      startExit();
    };

    if (!pageLoaded) window.addEventListener("load", handleLoad, { once: true });

    const minimumTimer = setTimeout(() => {
      minimumElapsed = true;
      startExit();
    }, INTRO_MINIMUM_MS);

    const maximumTimer = setTimeout(() => {
      minimumElapsed = true;
      pageLoaded = true;
      startExit();
    }, INTRO_MAXIMUM_MS);

    return () => {
      clearTimeout(minimumTimer);
      clearTimeout(maximumTimer);
      if (exitTimer) clearTimeout(exitTimer);
      window.removeEventListener("load", handleLoad);
      root.classList.remove("intro-active");
    };
  }, []);

  return (
    <div ref={splashRef} className="intro-splash" aria-hidden="true">
      <p className="intro-splash__name">
        <span>Erick</span>
        <span>Monteiro</span>
      </p>
    </div>
  );
}
