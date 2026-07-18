import Image from "next/image";

import { featuredWorks, type FeaturedWork } from "@/content/site";

const formatClasses: Record<FeaturedWork["format"], string> = {
  portrait: "aspect-[4/5]",
  square: "aspect-square",
  landscape: "aspect-[8/5]",
};

export function FeaturedGallery() {
  return (
    <section
      id="destaques"
      aria-labelledby="titulo-destaques"
      className="scroll-mt-20 bg-white"
    >
      <div className="mx-auto max-w-[90rem] px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <header className="grid gap-8 border-b border-charcoal/20 pb-10 lg:grid-cols-12 lg:items-end lg:gap-8 lg:pb-14">
          <div className="lg:col-span-3">
            <p className="text-xs font-bold tracking-[0.18em] uppercase">
              02 · Seleção
            </p>
          </div>

          <div className="lg:col-span-6 lg:col-start-4">
            <h2
              id="titulo-destaques"
              className="font-display text-[clamp(2.75rem,6vw,6.5rem)] leading-[0.92] font-semibold tracking-[-0.055em]"
            >
              Trabalhos em destaque
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-relaxed text-charcoal/65 lg:col-span-3 lg:text-base">
            Seleção provisória. As artes, títulos e fichas técnicas poderão ser
            substituídos diretamente no conteúdo local.
          </p>
        </header>

        <div className="mt-12 grid grid-cols-1 gap-x-5 gap-y-16 md:grid-cols-2 lg:mt-20 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-24">
          {featuredWorks.map((work, index) => (
            <article
              key={work.id}
              className={`group min-w-0 ${
                work.columnSpan === 7
                  ? "lg:col-span-7"
                  : "lg:col-span-5 lg:pt-20"
              }`}
            >
              <figure>
                <div
                  className={`relative overflow-hidden border border-charcoal/20 bg-paper ${formatClasses[work.format]}`}
                >
                  <Image
                    src={work.imageSrc}
                    alt={work.imageAlt}
                    fill
                    unoptimized
                    sizes={
                      work.columnSpan === 7
                        ? "(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 58vw"
                        : "(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 42vw"
                    }
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.015]"
                  />

                  <span className="absolute left-3 top-3 rounded-full border border-charcoal/20 bg-white/90 px-3 py-1.5 text-[0.625rem] font-bold tracking-[0.12em] uppercase backdrop-blur-sm sm:left-4 sm:top-4">
                    Placeholder local
                  </span>
                </div>

                <figcaption className="mt-5">
                  <div className="flex items-start gap-4">
                    <span
                      aria-hidden="true"
                      className="mt-1 text-xs font-bold tabular-nums text-brick"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-xl font-semibold tracking-[-0.025em] sm:text-2xl">
                        {work.title}
                      </h3>
                      <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-xs font-bold tracking-[0.08em] text-charcoal/70 uppercase">
                        <span>{work.category}</span>
                        <span aria-hidden="true">·</span>
                        <span>{work.year}</span>
                      </div>
                      <p className="mt-3 max-w-xl text-sm leading-relaxed text-charcoal/65 sm:text-base">
                        {work.description}
                      </p>
                    </div>
                  </div>
                </figcaption>
              </figure>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
