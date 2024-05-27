import { ReactNode } from "react";

interface Props {
    id: string,
    className?: string,
    customPadding?: string,
    children: ReactNode,
}

export const Section = ({id, className, customPadding, children}: Props) => {
    return (
        <section id={id} 
            className={`relative ${customPadding || "py-6 lg:py-8 xl:py-12"} ${className || ""}`}>
            { children }
        </section>
    )
}
