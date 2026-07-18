"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"],
  });

  const logoScale = useTransform(
    scrollYProgress,
    [0, 0.62, 1],
    [1, 0.78, 0.58],
  );
  const logoY = useTransform(scrollYProgress, [0, 1], ["0svh", "-17svh"]);
  const hintOpacity = useTransform(scrollYProgress, [0, 0.18, 0.42], [1, 1, 0]);

  return (
    <section
      id="inicio"
      ref={heroRef}
      aria-labelledby="titulo-hero"
      className="relative h-[165svh] bg-white motion-reduce:h-svh"
    >
      <div className="sticky top-0 h-svh overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 z-20 grid h-2 grid-cols-3"
        >
          <span className="bg-yellow" />
          <span className="bg-orange" />
          <span className="bg-brick" />
        </div>

        <div className="absolute inset-x-0 top-0 z-10 flex items-start justify-between gap-4 px-5 pt-8 text-[0.625rem] leading-tight font-bold tracking-[0.16em] text-charcoal uppercase sm:px-8 sm:pt-9 sm:text-xs">
          <p className="max-w-[45%]">Projeto artístico</p>
          <p className="max-w-[48%] text-right">Ilustração · Audiovisual</p>
        </div>

        <div className="flex h-full items-center justify-center px-4 pb-7 pt-14 sm:px-8">
          <h1 id="titulo-hero" className="sr-only">
            Cá Entre Nóis
          </h1>

          <motion.div
            className="relative h-[min(72svh,52rem)] w-[min(84vw,34rem)] origin-center will-change-transform sm:h-[min(78svh,52rem)]"
            style={
              shouldReduceMotion
                ? undefined
                : { scale: logoScale, y: logoY }
            }
          >
            <Image
              src="/images/brand/logo-oficial.jpeg"
              alt="Logo Cá Entre Nóis: personagem com coroa atrás de uma câmera."
              fill
              preload
              sizes="(max-width: 640px) 84vw, 34rem"
              className="object-contain object-center"
            />
          </motion.div>
        </div>

        <motion.div
          className="absolute inset-x-0 bottom-[max(1.25rem,env(safe-area-inset-bottom))] z-10 flex flex-col items-center gap-2 text-center text-[0.625rem] font-bold tracking-[0.18em] text-charcoal uppercase sm:text-xs"
          style={shouldReduceMotion ? undefined : { opacity: hintOpacity }}
          aria-hidden="true"
        >
          <span>Role para conhecer</span>
          <motion.span
            className="relative block h-8 w-px bg-charcoal/25 after:absolute after:bottom-0 after:left-1/2 after:size-1.5 after:-translate-x-1/2 after:rounded-full after:bg-orange after:content-['']"
            animate={shouldReduceMotion ? undefined : { y: [0, 6, 0] }}
            transition={
              shouldReduceMotion
                ? undefined
                : { duration: 1.6, ease: "easeInOut", repeat: Infinity }
            }
          />
        </motion.div>
      </div>
    </section>
  );
}
