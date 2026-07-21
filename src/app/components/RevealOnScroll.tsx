"use client";

import { useEffect, useRef, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export default function RevealOnScroll({ children, delay = 0, className = "" }: Props) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    let observer: IntersectionObserver | undefined;
    let observationStarted = false;

    const startObservation = () => {
      if (observationStarted) return;
      observationStarted = true;

      if (
        window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
        !("IntersectionObserver" in window)
      ) {
        element.classList.add("is-visible");
        return;
      }

      const bounds = element.getBoundingClientRect();
      const revealBoundary = window.innerHeight * 0.92;

      if (bounds.top < revealBoundary && bounds.bottom > 0) {
        element.classList.add("is-visible");
        return;
      }

      observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return;

          element.classList.add("is-visible");
          observer?.unobserve(element);
        },
        { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
      );

      observer.observe(element);
    };

    if (document.documentElement.dataset.introComplete === "true") {
      startObservation();
    } else {
      window.addEventListener("intro:complete", startObservation, { once: true });
    }

    return () => {
      window.removeEventListener("intro:complete", startObservation);
      observer?.disconnect();
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`reveal-on-scroll w-full ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
