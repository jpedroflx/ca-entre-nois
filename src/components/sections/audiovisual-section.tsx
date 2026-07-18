import Image from "next/image";

import { audiovisualSection } from "@/content/site";

export function AudiovisualSection() {
  return (
    <section
      id="audiovisual"
      aria-labelledby="titulo-audiovisual"
      className="scroll-mt-20 overflow-hidden bg-charcoal text-paper"
    >
      <div className="mx-auto max-w-[90rem] px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <header className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-3">
            <p className="text-xs font-bold tracking-[0.18em] uppercase">
              {audiovisualSection.eyebrow}
            </p>
            <p className="mt-5 inline-flex rounded-full border border-paper/25 px-3 py-1.5 text-[0.625rem] font-bold tracking-[0.12em] text-yellow uppercase">
              {audiovisualSection.status}
            </p>
          </div>

          <div className="lg:col-span-8 lg:col-start-5">
            <h2
              id="titulo-audiovisual"
              className="max-w-5xl font-display text-[clamp(2.75rem,7vw,7rem)] leading-[0.92] font-semibold tracking-[-0.055em]"
            >
              {audiovisualSection.title}
            </h2>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-paper/70 sm:text-lg lg:text-xl">
              {audiovisualSection.description}
            </p>
          </div>
        </header>

        <div className="mt-14 grid gap-7 border-t border-paper/20 pt-7 lg:mt-20 lg:grid-cols-12 lg:gap-8 lg:pt-10">
          <figure className="min-w-0 lg:col-span-9">
            <div className="relative aspect-video overflow-hidden border border-paper/25 bg-brick">
              <Image
                src={audiovisualSection.posterSrc}
                alt={audiovisualSection.posterAlt}
                fill
                unoptimized
                sizes="(max-width: 1023px) 100vw, 75vw"
                className="object-cover"
              />
              <span className="absolute left-3 top-3 rounded-full border border-paper/25 bg-charcoal/85 px-3 py-1.5 text-[0.625rem] font-bold tracking-[0.12em] text-paper uppercase backdrop-blur-sm sm:left-4 sm:top-4">
                Placeholder local · 16:9
              </span>
            </div>
          </figure>

          <div className="flex flex-col justify-end lg:col-span-3">
            <p className="text-xs font-bold tracking-[0.16em] text-orange uppercase">
              Em preparação
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
              {audiovisualSection.workTitle}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-paper/65 sm:text-base">
              {audiovisualSection.workMeta}
            </p>
            <p className="mt-8 border-t border-paper/20 pt-5 text-xs leading-relaxed text-paper/55">
              {audiovisualSection.playbackNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
