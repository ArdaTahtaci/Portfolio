import { useEffect, useState } from 'react';

export function useActiveSection(sectionIds: string[], offset = 100) {
    const [active, setActive] = useState<string>(sectionIds[0] ?? 'home');

    useEffect(() => {
        const handler = () => {
            let current = active;
            for (const id of sectionIds) {
                const el = document.getElementById(id);
                if (!el) continue;
                const rect = el.getBoundingClientRect();
                if (rect.top <= offset && rect.bottom > offset) {
                    current = id;
                    break;
                }
            }
            setActive(current);
        };
        handler();
        window.addEventListener('scroll', handler, { passive: true });
        return () => window.removeEventListener('scroll', handler);
    }, [sectionIds, offset]);

    return active;
} 