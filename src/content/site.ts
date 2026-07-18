export const navigationItems = [
  { label: "Sobre", accessibleLabel: "Ir para apresentação", href: "#apresentacao" },
  { label: "Trabalhos", accessibleLabel: "Ir para trabalhos em destaque", href: "#destaques" },
  { label: "Vídeo", accessibleLabel: "Ir para produção audiovisual", href: "#audiovisual" },
  { label: "Loja", accessibleLabel: "Ir para loja em breve", href: "#loja" },
] as const;

export const projectIntroduction = {
  eyebrow: "Sobre o projeto",
  status: "Texto provisório para revisão",
  title: "Arte feita para aproximar histórias, imagens e pessoas.",
  paragraphs: [
    "Cá Entre Nóis é um projeto artístico de ilustrações e produções audiovisuais. Um lugar de experimentação entre traço, personagem, narrativa e movimento.",
    "Este texto apresenta o projeto durante o MVP e poderá ser substituído pela versão autoral definitiva sem alterar a estrutura da página.",
  ],
} as const;

export type FeaturedWork = {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  format: "portrait" | "square" | "landscape";
  columnSpan: 5 | 7;
};

export const featuredWorks: readonly FeaturedWork[] = [
  {
    id: "destaque-01",
    title: "Trabalho em destaque 01",
    category: "Ilustração",
    year: "Ano a confirmar",
    description: "Imagem, título e ficha técnica aguardando conteúdo final.",
    imageSrc: "/images/placeholders/destaque-01.svg",
    imageAlt: "Placeholder local do trabalho em destaque 01.",
    format: "portrait",
    columnSpan: 7,
  },
  {
    id: "destaque-02",
    title: "Trabalho em destaque 02",
    category: "Ilustração",
    year: "Ano a confirmar",
    description: "Imagem, título e ficha técnica aguardando conteúdo final.",
    imageSrc: "/images/placeholders/destaque-02.svg",
    imageAlt: "Placeholder local do trabalho em destaque 02.",
    format: "square",
    columnSpan: 5,
  },
  {
    id: "destaque-03",
    title: "Trabalho em destaque 03",
    category: "Projeto visual",
    year: "Ano a confirmar",
    description: "Imagem, título e ficha técnica aguardando conteúdo final.",
    imageSrc: "/images/placeholders/destaque-03.svg",
    imageAlt: "Placeholder local do trabalho em destaque 03.",
    format: "landscape",
    columnSpan: 5,
  },
  {
    id: "destaque-04",
    title: "Trabalho em destaque 04",
    category: "Ilustração",
    year: "Ano a confirmar",
    description: "Imagem, título e ficha técnica aguardando conteúdo final.",
    imageSrc: "/images/placeholders/destaque-04.svg",
    imageAlt: "Placeholder local do trabalho em destaque 04.",
    format: "portrait",
    columnSpan: 7,
  },
] as const;

export const audiovisualSection = {
  eyebrow: "03 · Audiovisual",
  status: "Conteúdo provisório",
  title: "Histórias que também cabem em movimento.",
  description:
    "A frente audiovisual do Cá Entre Nóis reúne produções em imagem e som. No MVP, este espaço fica preparado para receber poster, título, ficha técnica e o link do vídeo final.",
  workTitle: "Produção audiovisual 01",
  workMeta: "Título e ficha técnica a confirmar",
  posterSrc: "/images/placeholders/audiovisual-01.svg",
  posterAlt: "Poster local provisório para a produção audiovisual 01.",
  playbackNote: "Nenhum vídeo está conectado ou é reproduzido automaticamente.",
} as const;

export const shopSection = {
  eyebrow: "04 · Loja",
  status: "Em breve",
  title: "Coisas do nosso mundo, logo por aqui.",
  description:
    "Este espaço está reservado para futuras edições e produtos do Cá Entre Nóis. O MVP não possui catálogo, carrinho ou pagamentos.",
} as const;

export const socialLinks = {
  instagram: {
    label: "@ca.entrenois",
    href: "https://www.instagram.com/ca.entrenois/",
  },
} as const;
