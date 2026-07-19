# Cá Entre Nóis

MVP de página única do projeto artístico Cá Entre Nóis, desenvolvido com Next.js, TypeScript, App Router, Tailwind CSS e Motion. O conteúdo é local e não utiliza banco de dados, carrinho ou pagamentos.

## Executar localmente

Requisitos: Node.js 20.9 ou superior e npm.

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Verificações

```bash
npm run lint
npm run build
```

Para testar a versão de produção localmente após o build:

```bash
npm run start
```

## Conteúdo e imagens

- Textos, navegação e fichas provisórias ficam em `src/content/site.ts`.
- Componentes de seção ficam em `src/components/sections`.
- Ativos publicados ficam em `public/images`.
- Arquivos autorais de origem ficam em `references` e não devem ser editados.
- Para substituir um placeholder, adicione a arte em `public/images` e atualize o caminho correspondente em `src/content/site.ts`.

A logo publicada em `public/images/brand/logo-oficial.jpeg` é uma cópia integral do arquivo autoral. Não a redesenhe, retoque ou substitua por conteúdo gerado por IA.

## Publicar na Vercel

1. Envie o repositório para um provedor Git compatível.
2. Importe o repositório na Vercel.
3. Mantenha o framework detectado como Next.js e o comando de build como `npm run build`.
4. Publique e valide a URL gerada em celular e computador.

O MVP não exige variáveis de ambiente.
=======

