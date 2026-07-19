# Cá Entre Nóis

MVP de página única do projeto artístico Cá Entre Nóis, de Ioná Araujo, desenvolvido com Next.js, TypeScript, App Router, Tailwind CSS e Motion. O conteúdo é local e não utiliza banco de dados, carrinho ou pagamentos.

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
- Imagens publicadas ficam em `public/images` e vídeos em `public/videos`.
- Arquivos autorais de origem ficam em `references` e não devem ser editados.
- Para substituir um placeholder, adicione a arte em `public/images` e atualize o caminho correspondente em `src/content/site.ts`.

Os vídeos usam controles nativos, não iniciam automaticamente e carregam apenas metadados antes da interação do usuário.

Todo o acervo apresentado no site é de autoria de Ioná Araujo. A logo publicada em `public/images/brand/logo-oficial.jpeg` é uma cópia integral da arte autoral e não deve ser redesenhada, retocada ou substituída por conteúdo gerado por IA.

## Publicar na Vercel

1. Envie o repositório para um provedor Git compatível.
2. Importe o repositório na Vercel.
3. Mantenha o framework detectado como Next.js e o comando de build como `npm run build`.
4. Publique e valide a URL gerada em celular e computador.

O MVP não exige variáveis de ambiente.

