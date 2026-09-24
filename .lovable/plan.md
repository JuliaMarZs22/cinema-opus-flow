# Refinamento visual e identidade Arte em Cinema OS

## Objetivo
Aplicar a logo oficial em toda a experiência, elevar o acabamento para uma estética clean e sofisticada com glass blur evidente e oferecer modos claro e escuro consistentes em todas as telas.

## O que será feito
- Integrar a logo enviada na barra lateral, menu móvel, login e Área do Cliente, mantendo legibilidade nos dois temas.
- Criar um favicon real derivado da mesma logo e substituir o ícone atual.
- Adicionar alternância claro/escuro no cabeçalho, no login e no painel do cliente, com preferência salva no navegador e sem piscar ao carregar.
- Refinar o design system global: superfícies translúcidas, blur, bordas luminosas discretas, sombras em camadas, gradientes monocromáticos e movimentos suaves.
- Aplicar a mesma lógica de composição a todas as páginas: cabeçalhos, cards, métricas, tabelas, filtros, abas, painéis e estados interativos.
- Transformar as abas em navegação visual funcional no contexto de cada tela, preservando o conteúdo demonstrativo existente.
- Revisar sidebar, menu contextual móvel, navegação inferior, tabelas horizontais, cards e construtor de fluxos em desktop, tablet e celular.
- Validar todas as 17 rotas, os dois temas e os principais controles em múltiplos tamanhos de tela.

## Direção visual
- Paleta exclusivamente neutra: branco, cinzas, grafite e preto suave; nenhum azul.
- Vidro fosco evidente, mas com contraste e legibilidade preservados.
- Gradientes apenas monocromáticos e discretos, usados para profundidade.
- Logo oficial como principal assinatura visual; elementos gráficos auxiliares não competirão com ela.

## Detalhes técnicos
- O tema será controlado por tokens semânticos, com variantes completas em `.dark`.
- A logo enviada será armazenada como ativo do projeto; o favicon será uma versão quadrada otimizada.
- Abas receberão estado selecionável e painéis coerentes, sem introduzir persistência ou regras operacionais complexas.
- A validação verificará erros de renderização, tipagem, navegação, estouro horizontal e contraste visual.
