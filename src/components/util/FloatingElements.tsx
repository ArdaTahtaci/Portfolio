import { motion } from 'framer-motion';

export function FloatingElements() {
    const elements = Array.from({ length: 6 }, (_, i) => ({
        id: i,
        size: Math.random() * 100 + 50,
        initialX: Math.random() * window.innerWidth,
        initialY: Math.random() * window.innerHeight,
        duration: Math.random() * 20 + 10,
    }));

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
            {elements.map((element) => (
                <motion.div
                    key={element.id}
                    className="absolute rounded-full bg-gradient-to-r from-sky-400/5 to-blue-500/5 dark:from-sky-400/3 dark:to-blue-500/3 blur-xl"
                    style={{
                        width: element.size,
                        height: element.size,
                    }}
                    initial={{
                        x: element.initialX,
                        y: element.initialY,
                    }}
                    animate={{
                        x: element.initialX + (Math.random() - 0.5) * 400,
                        y: element.initialY + (Math.random() - 0.5) * 400,
                    }}
                    transition={{
                        duration: element.duration,
                        repeat: Infinity,
                        repeatType: 'reverse',
                        ease: 'easeInOut',
                    }}
                />
            ))}
        </div>
    );
} 