import { MutableRefObject, useEffect } from 'react';

export function useScrollAnimation(ref: MutableRefObject<HTMLDivElement | null>, threshold = 0.1) {
  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-visible', 'true');
          }
        });
      },
      { threshold }
    );

    const sections = ref.current.querySelectorAll('[data-scroll-section]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
    };
  }, [ref, threshold]);
}
