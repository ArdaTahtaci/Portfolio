import { motion } from 'framer-motion';

type Props = {
    children: React.ReactNode;
    className?: string;
    from?: { opacity?: number; y?: number };
};

export function InViewFade({ children, className = '', from = { opacity: 0, y: 16 } }: Props) {
    return (
        <motion.div
            initial={from}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={className}
        >
            {children}
        </motion.div>
    );
} 