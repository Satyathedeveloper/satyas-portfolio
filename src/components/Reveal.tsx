import { useEffect, useRef, useState } from 'react';
import type { CSSProperties, ReactNode } from 'react';

export const delay = (ms: number) => ({ '--d': `${ms}ms` }) as CSSProperties;

/** Fades content in once when it scrolls into view. Content is never hidden without JavaScript. */
export default function Reveal({ children, ms = 0, className = '' }: { children: ReactNode; ms?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window)) { setShown(true); return; }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setShown(true); io.disconnect(); } }, { threshold: 0.1 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${shown ? 'in' : ''} ${className}`} style={delay(ms)}>{children}</div>;
}
