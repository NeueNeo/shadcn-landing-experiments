"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useInView, animate } from "framer-motion";

interface CountUpProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  delay?: number;
  className?: string;
  formatter?: (value: number) => string;
}

function defaultFormatter(value: number): string {
  if (value >= 1_000_000) {
    const m = value / 1_000_000;
    return `${Number.isInteger(m) ? m : m.toFixed(1).replace(/\.0$/, "")}M`;
  }
  if (value >= 1_000) {
    const k = value / 1_000;
    return `${Number.isInteger(k) ? k : k.toFixed(1).replace(/\.0$/, "")}K`;
  }
  return value.toLocaleString();
}

export function CountUp({
  value,
  suffix = "",
  prefix = "",
  duration = 2.5,
  delay = 0,
  className,
  formatter = defaultFormatter,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [current, setCurrent] = useState(value); // Start at final for SSR
  const [opacity, setOpacity] = useState(1); // Start visible for SSR
  const [mounted, setMounted] = useState(false);
  const hasAnimated = useRef(false);

  const format = useCallback(formatter, [formatter]);

  // Mark mounted, reset to 0 for animation
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!prefersReducedMotion) {
      setCurrent(0);
      setOpacity(0);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;
      
      const timeout = setTimeout(() => {
        // Fade in
        animate(0, 1, {
          duration: 0.8,
          ease: "easeOut",
          onUpdate: (v) => setOpacity(v),
        });
        // Count up
        animate(0, value, {
          duration,
          ease: [0.16, 1, 0.3, 1],
          onUpdate: (v) => setCurrent(Math.round(v)),
        });
      }, delay * 1000);

      return () => clearTimeout(timeout);
    }
  }, [mounted, isInView, value, duration, delay]);

  return (
    <span ref={ref} className={className} style={{ opacity }}>
      {prefix}{format(current)}{suffix}
    </span>
  );
}
