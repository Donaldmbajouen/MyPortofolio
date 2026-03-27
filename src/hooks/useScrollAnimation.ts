import { RefObject, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimation = (containerRef: RefObject<HTMLElement>) => {
  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray<HTMLElement>('[data-scroll-section]');

      sections.forEach((section, index) => {
        gsap.fromTo(
          section,
          {
            autoAlpha: 0,
            y: index === 0 ? 36 : 72,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: index === 0 ? 0.9 : 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: index === 0 ? 'top 90%' : 'top 82%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }, container);

    return () => {
      ctx.revert();
    };
  }, [containerRef]);
};

export default useScrollAnimation;
