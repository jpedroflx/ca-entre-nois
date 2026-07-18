import { projectIntroduction } from "@/content/site";

export function ProjectIntroduction() {
  return (
    <section
      id="apresentacao"
      aria-labelledby="titulo-apresentacao"
      className="relative scroll-mt-20 overflow-hidden border-y border-charcoal/15 bg-paper"
    >
      <div
        aria-hidden="true"
        className="absolute -right-24 top-28 size-64 rounded-full border-[3.5rem] border-yellow/70 sm:-right-16 sm:size-80 sm:border-[4.5rem] lg:right-[7%] lg:top-20 lg:size-96"
      />

      <div className="relative mx-auto max-w-[90rem] px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-3">
            <div className="flex items-center gap-3 text-xs font-bold tracking-[0.18em] uppercase">
              <span aria-hidden="true" className="h-px w-9 bg-charcoal" />
              <p>{projectIntroduction.eyebrow}</p>
            </div>
            <p className="mt-5 inline-flex rounded-full border border-charcoal/20 bg-white px-3 py-1.5 text-[0.625rem] font-bold tracking-[0.12em] text-brick uppercase">
              {projectIntroduction.status}
            </p>
          </div>

          <div className="lg:col-span-8 lg:col-start-5">
            <h2
              id="titulo-apresentacao"
              className="max-w-5xl font-display text-[clamp(2.5rem,7vw,6.75rem)] leading-[0.94] font-semibold tracking-[-0.055em] text-charcoal"
            >
              {projectIntroduction.title}
            </h2>

            <div className="mt-12 grid gap-6 border-t border-charcoal/20 pt-7 text-base leading-relaxed text-charcoal/80 sm:text-lg lg:grid-cols-2 lg:gap-10 lg:text-xl">
              {projectIntroduction.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="mt-20 flex items-center gap-2 sm:mt-28 lg:ml-[25%]"
        >
          <span className="h-2 flex-1 bg-brick" />
          <span className="h-2 w-[18%] bg-orange" />
          <span className="h-2 w-[10%] bg-yellow" />
        </div>
      </div>
    </section>
  );
}
