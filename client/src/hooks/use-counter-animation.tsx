import { useState, useEffect, useRef } from 'react';

interface UseCounterAnimationProps {
  end: number;
  duration?: number;
  startOnView?: boolean;
  startOnScroll?: boolean;
}

export function useCounterAnimation({ 
  end, 
  duration = 2000, 
  startOnView = true,
  startOnScroll = false
}: UseCounterAnimationProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // If startOnScroll is true, we'll use the scroll-based approach
    if (startOnScroll) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            startAnimation();
          }
        },
        { threshold: 0.1 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }
    // If startOnView is false, start immediately
    else if (!startOnView) {
      startAnimation();
      return;
    }
    // Otherwise, use the original behavior
    else {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            startAnimation();
          }
        },
        { threshold: 0.1 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }
  }, [startOnView, startOnScroll, isVisible]);

  const startAnimation = () => {
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      setCount(Math.floor(end * easeOutQuart));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  };

  return { count, ref };
}