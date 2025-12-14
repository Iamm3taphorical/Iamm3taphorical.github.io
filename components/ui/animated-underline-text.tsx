"use client"

import * as React from "react"
import { motion, type Variants } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedTextProps extends React.HTMLAttributes<HTMLDivElement> {
    text: string
    textClassName?: string
    underlineClassName?: string
    underlinePath?: string
    underlineHoverPath?: string
    underlineDuration?: number
    showUnderline?: boolean
}

const AnimatedText = React.forwardRef<HTMLDivElement, AnimatedTextProps>(
    (
        {
            text,
            textClassName,
            underlineClassName,
            underlinePath = "M 0,10 Q 75,0 150,10 Q 225,20 300,10",
            underlineHoverPath = "M 0,10 Q 75,20 150,10 Q 225,0 300,10",
            underlineDuration = 1.5,
            showUnderline = true,
            className,
            ...props
        },
        ref
    ) => {
        const pathVariants: Variants = {
            hidden: {
                pathLength: 0,
                opacity: 0,
            },
            visible: {
                pathLength: 1,
                opacity: 1,
                transition: {
                    duration: underlineDuration,
                    ease: "easeInOut",
                },
            },
        }

        return (
            <div
                ref={ref}
                className={cn("flex flex-col items-center justify-center gap-2", className)}
                {...props}
            >
                <div className="relative inline-block">
                    <motion.span
                        className={cn(
                            "text-4xl font-bold text-center block",
                            textClassName
                        )}
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        whileHover={{ scale: 1.02 }}
                    >
                        {text}
                    </motion.span>

                    {showUnderline && (
                        <motion.svg
                            width="100%"
                            height="20"
                            viewBox="0 0 300 20"
                            preserveAspectRatio="none"
                            className={cn(
                                "absolute -bottom-2 left-0 w-full",
                                underlineClassName
                            )}
                        >
                            <motion.path
                                d={underlinePath}
                                stroke="currentColor"
                                strokeWidth="3"
                                fill="none"
                                strokeLinecap="round"
                                variants={pathVariants}
                                initial="hidden"
                                animate="visible"
                                whileHover={{
                                    d: underlineHoverPath,
                                    transition: { duration: 0.4 },
                                }}
                            />
                        </motion.svg>
                    )}
                </div>
            </div>
        )
    }
)

AnimatedText.displayName = "AnimatedText"

export { AnimatedText }
export type { AnimatedTextProps }
