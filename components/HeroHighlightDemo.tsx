"use client";

import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import { Section } from "./Section";

export const HeroHighlightDemo = () => {
    return (
        <Section id="hero">
            <div className="relative isolate">
                <div className="mx-auto">
                    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                        
                        <HeroHighlight>
                            <motion.h1
                                initial={{
                                    opacity: 0,
                                    y: 20,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: [20, -5, 0],
                                }}
                                transition={{
                                    duration: 0.5,
                                    ease: [0.4, 0.0, 0.2, 1],
                                }}
                                className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto ">
                                
                                <div className="relative rounded-full px-3 text-sm leading-6 
                                    text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                                    Estamos cumpliendo 25 años.
                                </div>
                                
                                Expertos en el uso seguro de la {" "}
                                <Highlight className="text-black dark:text-white">
                                    radiación ionizante.
                                </Highlight>
                            </motion.h1>
                        </HeroHighlight>
                    </div>
                </div>
            </div>
        </Section>
    )
}
