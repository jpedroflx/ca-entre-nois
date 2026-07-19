import { artist, socialLinks } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="bg-charcoal text-paper">
      <div className="mx-auto max-w-[90rem] px-5 py-12 sm:px-8 sm:py-14 lg:px-12 lg:py-16">
        <div className="grid gap-10 border-b border-paper/20 pb-10 sm:grid-cols-2 sm:items-end lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="font-display text-[clamp(2.5rem,7vw,6rem)] leading-none font-semibold tracking-[-0.055em]">
              Cá Entre Nóis
            </p>
          </div>
          <a
            href={socialLinks.instagram.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${socialLinks.instagram.label} no Instagram — abre em nova aba`}
            className="group inline-flex w-fit items-center gap-3 text-lg font-semibold sm:justify-self-end lg:col-span-5 lg:text-2xl"
          >
            {socialLinks.instagram.label}
            <span
              aria-hidden="true"
              className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
            >
              ↗
            </span>
          </a>
        </div>

        <div className="mt-6 flex flex-col gap-2 text-xs leading-relaxed text-paper/55 sm:flex-row sm:items-center sm:justify-between">
          <p>Projeto artístico de {artist.name} · Ilustração e audiovisual</p>
          <p>© 2026 {artist.name} · Cá Entre Nóis</p>
        </div>
      </div>

      <div aria-hidden="true" className="grid h-2 grid-cols-3">
        <span className="bg-yellow" />
        <span className="bg-orange" />
        <span className="bg-brick" />
      </div>
    </footer>
  );
}
