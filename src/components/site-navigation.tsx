import { navigationItems } from "@/content/site";

export function SiteNavigation() {
  return (
    <nav
      aria-label="Navegação principal"
      className="sticky top-0 z-50 border-b border-charcoal/15 bg-paper/95 backdrop-blur-md"
    >
      <div className="mx-auto flex min-h-16 max-w-[90rem] items-center px-5 sm:px-8 lg:px-12">
        <a
          href="#inicio"
          aria-label="Voltar ao início da página"
          className="hidden shrink-0 py-4 text-sm font-bold tracking-[-0.02em] sm:inline-flex"
        >
          Cá Entre Nóis
        </a>

        <ul className="flex w-full items-center justify-between gap-2 text-[0.6875rem] font-bold tracking-[0.08em] uppercase sm:ml-auto sm:w-auto sm:justify-end sm:gap-6 sm:text-xs">
          {navigationItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                aria-label={item.accessibleLabel}
                className="inline-flex min-h-11 items-center px-1 transition-colors hover:text-brick"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
