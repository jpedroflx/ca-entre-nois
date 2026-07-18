# AGENTS.md

## Escopo

MVP do Cá Entre Nóis em Next.js, TypeScript, App Router, Tailwind CSS e Motion. O conteúdo é local e não usa banco de dados.

## Comandos

- `npm install`
- `npm run dev`
- `npm run lint`
- `npm run build`

## Organização

- `src/app`: rotas, layout e estilos globais.
- `src/components`: componentes visuais e seções.
- `src/content`: textos, links e itens das galerias.
- `public/images`: ativos publicados e derivados para web.
- `references`: arquivos autorais de origem; nunca editar.

## Regras obrigatórias

- Não redesenhar, retocar ou substituir a logo oficial.
- Não usar imagens geradas por IA.
- Não adicionar Supabase, carrinho ou pagamentos.
- Não implementar scroll-jacking nem vídeo com som automático.
- Respeitar `prefers-reduced-motion`.
- Manter a interface mobile first, sem rolagem horizontal.
- Identificar claramente todo conteúdo provisório.
- Preservar HTML semântico, foco visível e navegação por teclado.
- Manter textos e dados fora dos componentes quando forem reutilizáveis.
- Não ampliar o escopo de uma tarefa sem autorização explícita.

## Critério de conclusão

Executar `npm run lint` e `npm run build`, verificar celular e desktop e atualizar a documentação pertinente antes de entregar.
