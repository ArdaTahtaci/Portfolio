import { useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';

type Props = {
    value: number;
    suffix?: string;
    prefix?: string;
    duration?: number;
};

export function AnimatedCounter({ value, suffix = '', prefix = '', duration = 2 }: Props) {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: duration * 1000 });
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [motionValue, isInView, value]);

    useEffect(() => {
        springValue.on('change', (latest) => {
            if (ref.current) {
                ref.current.textContent = prefix + Math.floor(latest).toLocaleString() + suffix;
            }
        });
    }, [springValue, prefix, suffix]);

    return <span ref={ref} />;
} 