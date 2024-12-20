import { motion, type HTMLMotionProps } from 'motion/react'

export default function PageTitle({
    children,
    ...props
}: HTMLMotionProps<'h1'>) {
    return (
        <motion.h1
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { duration: 1 },
            }}
            {...props}
        >
            {children}
        </motion.h1>
    )
}
