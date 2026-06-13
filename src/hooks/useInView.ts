import { useEffect, useRef, useState } from "react";

type InViewOptions = IntersectionObserverInit & {
  once?: boolean;
  resetOnScrollUp?: boolean;
};

export function useInView<T extends HTMLElement = HTMLDivElement>(options: InViewOptions = {}) {
  const ref = useRef<T>(null);
  const hasEntered = useRef(false);
  const [inView, setInView] = useState(false);
  const { once = false, resetOnScrollUp = true, root, rootMargin, threshold } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          hasEntered.current = true;
          setInView(true);

          if (once) {
            observer.disconnect();
          }

          return;
        }

        if (!once && hasEntered.current) {
          const exitedBelowViewport = entry.boundingClientRect.top >= window.innerHeight;

          if (!resetOnScrollUp || exitedBelowViewport) {
            setInView(false);
          }
        }
      },
      { root, rootMargin, threshold: threshold ?? 0.12 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [once, resetOnScrollUp, root, rootMargin, threshold]);

  return { ref, inView };
}
