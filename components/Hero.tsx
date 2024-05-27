import { TextGenerateEffect } from './ui/text-generate-effect';
import { Section } from './Section';
import Link from 'next/link';

export const Hero = () => {
    const words = "Expertos en el uso seguro de la radiación ionizante";
    return (
        <Section id="hero" className="px-3">
            <div className="relative isolate">
                <div className="mx-auto max-w-2xl">
                    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                        <div className="relative rounded-full px-3 text-sm leading-6 
                            text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                            Estamos cumpliendo 25 años.
                            <Link href="/blog" className="font-semibold text-orange-600">
                                <span className="absolute inset-0" aria-hidden="true"></span> Descubre más
                                <span aria-hidden="true"> &rarr;</span>
                            </Link>
                        </div>
                    </div>
                    <div className="text-center">
                        <h1 className="max-w-4xl mx-auto mb-4 text-4xl font-bold leading-tight
                            text-gray-900 sm:leading-tight sm:text-5xl lg:text-6xl 
                            lg:leading-tight">
                            Expertos en el uso seguro de la radiación ionizante
                        </h1>
                        <TextGenerateEffect words="Ofrecemos servicio a más de 200 empresas en México que trabajan con radiación.
                            Comercializamos equipos de rayos X para diferentes aplicaciones en la industria." />
                    </div>
                    <div className="px-8 sm:items-center sm:justify-center sm:px-0 sm:space-x-5
                        sm:flex mt-9">
                        <a href="#contact" className="mb-3 sm:mb-0 inline-flex items-center 
                            justify-center w-full px-8 py-3 text-lg font-bold text-white
                            transition-all duration-200 bg-gray-900 border-2 border-transparent 
                            sm:w-auto rounded-xl hover:bg-gray-600 focus:outline-none focus:ring-2
                            focus:ring-offset-2 focus:ring-gray-900" role="button">
                            Contáctanos
                        </a>
                        <Link href="/blog" className="inline-flex items-center justify-center
                            w-full px-8 py-3 text-lg font-bold text-gray-900 hover:text-white
                            transition-all duration-200 bg-gray-200 border-2 border-gray-900 
                            sm:w-auto rounded-xl hover:bg-gray-600 focus:outline-none focus:ring-2
                            focus:ring-offset-2 focus:ring-gray-900">
                            Conoce más
                        </Link>
                    </div>
                </div>
            </div>
        </Section>
    )
}
