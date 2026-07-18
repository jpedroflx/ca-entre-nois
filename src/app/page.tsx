import { Hero } from "@/components/hero";
import { AudiovisualSection } from "@/components/sections/audiovisual-section";
import { ComingSoonShop } from "@/components/sections/coming-soon-shop";
import { FeaturedGallery } from "@/components/sections/featured-gallery";
import { ProjectIntroduction } from "@/components/sections/project-introduction";
import { SiteFooter } from "@/components/site-footer";
import { SiteNavigation } from "@/components/site-navigation";

export default function Home() {
  return (
    <>
      <header>
        <Hero />
      </header>
      <SiteNavigation />
      <main id="conteudo-principal">
        <ProjectIntroduction />
        <FeaturedGallery />
        <AudiovisualSection />
        <ComingSoonShop />
      </main>
      <SiteFooter />
    </>
  );
}
