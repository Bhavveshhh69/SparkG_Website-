import { useEffect, useRef } from 'react';

export function useScrollAnimation() {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) {
      return;
    }

    const revealIfInViewport = () => {
      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      const viewportWidth = window.innerWidth || document.documentElement.clientWidth;

      const isVerticallyInView = rect.top < viewportHeight - 50 && rect.bottom > 50;
      const isHorizontallyInView = rect.left < viewportWidth && rect.right > 0;

      if (isVerticallyInView && isHorizontallyInView) {
        element.classList.add('in-view');
      }
    };

    // IntersectionObserver path (primary)
    let observer: IntersectionObserver | null = null;
    if (typeof IntersectionObserver !== 'undefined') {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in-view');
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px',
        }
      );
      observer.observe(element);
    }

    // Fallbacks: ensure visibility on initial load and during interactions
    // Initial sync check
    revealIfInViewport();

    // Event listeners as fallback for mobile browsers where IO can be flaky
    const onScrollOrResize = () => revealIfInViewport();
    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize, { passive: true });
    window.addEventListener('orientationchange', onScrollOrResize);

    return () => {
      if (observer && element) {
        observer.unobserve(element);
      }
      window.removeEventListener('scroll', onScrollOrResize as any);
      window.removeEventListener('resize', onScrollOrResize as any);
      window.removeEventListener('orientationchange', onScrollOrResize as any);
    };
  }, []);

  return elementRef;
}