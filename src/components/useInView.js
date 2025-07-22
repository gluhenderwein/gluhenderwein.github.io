import { useEffect, useRef } from 'react';

export function useInViewClass({
  className = 'visible',
  threshold = 0.1,
  rootMargin = '0px',
  once = true,
} = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const checkVisibility = () => {
      const rect = node.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const windowWidth = window.innerWidth || document.documentElement.clientWidth;

      const verticallyInView =
        rect.top <= windowHeight * (1 - threshold) && rect.bottom >= windowHeight * threshold;
      const horizontallyInView =
        rect.left <= windowWidth * (1 - threshold) && rect.right >= windowWidth * threshold;

      return verticallyInView && horizontallyInView;
    };

    let observer;
    const timeoutId = setTimeout(() => {
      if (checkVisibility()) {
        node.classList.add(className);
        if (once) return;
      }

      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            node.classList.add(className);
            if (once && node) observer.unobserve(node);
          }
        },
        { threshold, rootMargin }
      );

      observer.observe(node);
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      if (observer && node) observer.unobserve(node);
    };
  }, [className, threshold, rootMargin, once]);

  return ref;
}