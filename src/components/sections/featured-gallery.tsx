import Image from "next/image";

import { artist, featuredWorks } from "@/content/site";

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
            Seleção de ilustrações, identidade visual e registros fotográficos
            de Ioná Araujo. Datas finais ainda devem ser confirmadas.
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
                <div className="overflow-hidden">
                  <Image
                    src={work.imageSrc}
                    alt={work.imageAlt}
                    width={work.width}
                    height={work.height}
                    sizes={
                      work.columnSpan === 7
                        ? "(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 58vw"
                        : "(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 42vw"
                    }
                    className="h-auto w-full transition-transform duration-500 ease-out group-hover:scale-[1.015] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  />
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
                      <p className="mt-3 text-xs font-bold tracking-[0.08em] text-brick uppercase">
                        {artist.credit}
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
