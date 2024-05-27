"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";

interface Props {
    words: string;
    className?: string;
}

export const TextGenerateEffect = ({ words, className }: Props) => {
    const [scope, animate] = useAnimate();
    let wordsArray = words.split(" ");
    
    useEffect(() => {
        animate(
            "span",
            {
                opacity: 1,
            },
            {
                duration: 1,
                delay: stagger(0.1),
            }
        );
    }, [scope.current]);

    const renderWords = () => {
        return (
            <motion.div ref={scope}>
                {wordsArray.map((word, idx) => {
                    return (
                        <motion.span
                            key={word + idx}
                            className={`${idx===12 ? 'text-orange-500' : 'text-gray-600'} opacity-0`}
                        >
                            {word}{" "}
                        </motion.span>
                    );
                })}
            </motion.div>
        );
    };

    return (
        <div className={cn("font-bold", className)}>
            <div className="mt-4">
                <div className="text-lg leading-8">
                    {renderWords()}
                </div>
            </div>
        </div>
    );
};
