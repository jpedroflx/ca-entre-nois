import { shopSection, socialLinks } from "@/content/site";

export function ComingSoonShop() {
  return (
    <section
      id="loja"
      aria-labelledby="titulo-loja"
      className="relative scroll-mt-20 overflow-hidden bg-yellow text-charcoal"
    >
      <div
        aria-hidden="true"
        className="absolute -right-28 -top-24 size-72 rounded-full bg-orange sm:-right-20 sm:size-96 lg:right-[8%] lg:top-16 lg:size-[30rem]"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-24 -left-20 size-56 rounded-full bg-brick sm:size-72 lg:-bottom-40 lg:left-[12%] lg:size-96"
      />

      <div className="relative mx-auto max-w-[90rem] px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-40">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-3">
            <p className="text-xs font-bold tracking-[0.18em] uppercase">
              {shopSection.eyebrow}
            </p>
            <p className="mt-5 inline-flex rounded-full border border-charcoal/25 bg-paper px-3 py-1.5 text-[0.625rem] font-bold tracking-[0.12em] uppercase">
              {shopSection.status}
            </p>
          </div>

          <div className="lg:col-span-8 lg:col-start-5">
            <h2
              id="titulo-loja"
              className="max-w-5xl font-display text-[clamp(3rem,8vw,8rem)] leading-[0.88] font-semibold tracking-[-0.06em]"
            >
              {shopSection.title}
            </h2>
            <div className="mt-10 grid gap-8 border-t border-charcoal/25 pt-7 sm:grid-cols-2 sm:items-end lg:mt-14">
              <p className="max-w-xl text-base leading-relaxed text-charcoal/75 sm:text-lg">
                {shopSection.description}
              </p>
              <a
                href={socialLinks.instagram.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Acompanhar ${socialLinks.instagram.label} no Instagram — abre em nova aba`}
                className="inline-flex w-fit items-center gap-3 rounded-full border-2 border-charcoal bg-charcoal px-5 py-3 text-sm font-bold text-paper transition-colors hover:bg-paper hover:text-charcoal sm:justify-self-end"
              >
                Acompanhe {socialLinks.instagram.label}
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
