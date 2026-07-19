export const navigationItems = [
  { label: "Sobre", accessibleLabel: "Ir para apresentação", href: "#apresentacao" },
  { label: "Trabalhos", accessibleLabel: "Ir para trabalhos em destaque", href: "#destaques" },
  { label: "Vídeo", accessibleLabel: "Ir para produção audiovisual", href: "#audiovisual" },
  { label: "Loja", accessibleLabel: "Ir para loja em breve", href: "#loja" },
] as const;

export const artist = {
  name: "Ioná Araujo",
  credit: "Autoria · Ioná Araujo",
} as const;

export const projectIntroduction = {
  eyebrow: "Sobre o projeto",
  status: "Texto provisório para revisão",
  title: "Arte feita para aproximar histórias, imagens e pessoas.",
  paragraphs: [
    "Cá Entre Nóis é um projeto artístico de Ioná Araujo, autora das ilustrações, fotografias e produções audiovisuais que compõem este acervo.",
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
  width: number;
  height: number;
  columnSpan: 5 | 7;
};

export const featuredWorks: readonly FeaturedWork[] = [
  {
    id: "ilustracao-carnaval",
    title: "Ilustração de carnaval",
    category: "Ilustração",
    year: "Data a confirmar",
    description:
      "Cena de carnaval com músicos, foliões e o estandarte Conchitas na Ressaca.",
    imageSrc: "/images/works/ilustracao-carnaval.png",
    imageAlt:
      "Ilustração de um bloco de carnaval com músicos, foliões e um estandarte na rua.",
    width: 1696,
    height: 2400,
    columnSpan: 7,
  },
  {
    id: "personagem-antiga",
    title: "Personagem antiga do Cá Entre Nóis",
    category: "Identidade visual",
    year: "Data a confirmar",
    description: "Versão anterior da personagem e da identidade do projeto.",
    imageSrc: "/images/works/personagem-antiga.jpg",
    imageAlt:
      "Ilustração de uma personagem de cabelos cacheados e sorriso largo sobre fundo laranja.",
    width: 1696,
    height: 2400,
    columnSpan: 5,
  },
  {
    id: "sala-de-acervo",
    title: "Sala de Acervo",
    category: "Fotografia",
    year: "Data a confirmar",
    description: "Registro da sala de acervo da Faculdade de Direito.",
    imageSrc: "/images/works/sala-de-acervo.jpg",
    imageAlt:
      "Sala de acervo com instrumentos de desenho, portas de madeira e armários ao fundo.",
    width: 2400,
    height: 1800,
    columnSpan: 5,
  },
  {
    id: "rua-pelourinho",
    title: "Rua no Pelourinho",
    category: "Fotografia",
    year: "Data a confirmar",
    description: "Registro de rua no Pelourinho, em Salvador, Bahia.",
    imageSrc: "/images/works/rua-pelourinho.jpg",
    imageAlt:
      "Rua de pedras no Pelourinho com fachada histórica, mesas e cadeiras coloridas.",
    width: 1350,
    height: 2400,
    columnSpan: 7,
  },
] as const;

export const audiovisualSection = {
  eyebrow: "03 · Audiovisual",
  status: "Vídeo selecionado",
  title: "Território, memória e imagem em movimento.",
  description:
    "A produção audiovisual do Cá Entre Nóis articula registro, educação e território. Este recorte acompanha uma visita escolar à Bacia do Pina.",
  workTitle: "Bacia do Pina — Visita Escolar",
  workMeta: "Vídeo · 7 s · 1280 × 720 · autoria de Ioná Araujo",
  videoSrc: "/videos/bacia-do-pina-visita-escolar.mp4",
  posterSrc: "/images/works/bacia-do-pina-poster.jpg",
  videoLabel: "Bacia do Pina — Visita Escolar, vídeo de sete segundos.",
  playbackNote:
    "A reprodução começa somente após ação do usuário. O vídeo contém áudio.",
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
