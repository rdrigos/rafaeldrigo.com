import React from 'react';

export function useScrolled(threshold: number = 20): boolean {
  const [scrolled, setScrolled] = React.useState<boolean>(false);

  React.useEffect(() => {
    const onScroll = () => {
      const isScrolled = window.scrollY > threshold;
      setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
    };

    window.addEventListener('scroll', onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [threshold]);

  return scrolled;
}
