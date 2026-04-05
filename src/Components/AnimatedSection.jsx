import { motion } from 'framer-motion';

const baseVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],  // Apple-style easeOutQuart
        },
    },
};

export default function AnimatedSection({ children, className = '', delay = 0, amount = 0.12 }) {
    const variants = {
        hidden: baseVariants.hidden,
        visible: {
            ...baseVariants.visible,
            transition: {
                ...baseVariants.visible.transition,
                delay,
            },
        },
    };

    return (
        <motion.div
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount }}
            variants={variants}
        >
            {children}
        </motion.div>
    );
}
