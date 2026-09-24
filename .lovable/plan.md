# Arquitetura integrada e correção do Pipeline

## Objetivo
Preservar a linguagem visual atual e transformar as telas demonstrativas em uma plataforma única, conectada e segura. A entrega será incremental para manter o sistema utilizável em cada fase.

## Diagnóstico atual
- O projeto usa TanStack Start, React, TanStack Query, Tailwind CSS v4 e componentes compartilhados.
- As rotas e o shell visual existem, mas os dados, usuários, permissões e fluxos são demonstrativos e locais.
- Não há banco, autenticação, APIs de domínio ou autorização no servidor conectados atualmente.
- No Pipeline, o card é um link com comportamento inline; a coluna não separa cabeçalho, lista e ação. Isso quebra o fluxo vertical, gera alturas inconsistentes e posiciona “Adicionar” conforme o conteúdo.
- O CSS global cresceu em camadas sucessivas, com regras antigas e novas para os mesmos elementos; a consolidação será feita sem mudar cores, tipografia ou identidade.

## Fase 1 — Pipeline e fundação visual
- Extrair componentes compartilhados `KanbanBoard`, `KanbanColumn` e `OpportunityCard`, preservando textos, dados e aparência.
- Estruturar cada coluna como flex vertical, com lista própria de cards e ação no rodapé.
- Tornar cards blocos de altura automática, fluxo normal e áreas explícitas para tipo, cliente, descrição, valor, responsável e prazo.
- Corrigir truncamento seguro, `min-width: 0`, avatares e ícones sem encolhimento; scroll horizontal somente no quadro.
- Consolidar tokens globais de tipografia, espaçamento, dimensões, superfícies e foco; elevar textos pequenos sem redesenhar a interface.
- Criar estados reutilizáveis: carregando, vazio, erro, sucesso, desabilitado e acesso negado.

## Fase 2 — Layout global
- Evoluir o shell existente para sidebar global expandida/recolhida, sem duplicação por página, com estado persistente no dispositivo.
- Manter o trilho compacto atual como modo recolhido; o modo expandido exibirá nomes e agrupamentos.
- Levar perfil, cargo e menu de usuário para uma área global acessível, preservando header, busca, notificações e temas.
- Garantir `min-height: 100vh`, crescimento natural do conteúdo e comportamento próprio em desktop, tablet e mobile.

## Fase 3 — Base segura
- Ativar Lovable Cloud para banco, autenticação e armazenamento.
- Criar organização, usuários, perfis e associação do usuário à organização.
- Implementar isolamento por organização e políticas de acesso desde a primeira migração.

## Fase 4 — RBAC centralizado
- Modelar `user → role → permissions` em tabelas separadas, com permissões granulares por módulo e ação.
- Criar catálogo central de permissões e componentes de interface que apenas reflitam a autorização recebida.
- Validar toda ação protegida também no servidor; URLs e chamadas diretas nunca contornarão permissões.
- Substituir a matriz demonstrativa por edição persistente, com auditoria de mudanças.

## Fases 5–8 — Domínios conectados
- CRM: leads, clientes, oportunidades, propostas, itens, vendas, atividades e histórico relacionados.
- Catálogo e estoque: produtos separados de serviços; insumos de serviço, reservas e movimentações imutáveis e auditáveis.
- Operação: venda ganha gera projeto/serviço, equipe, tarefas, agenda e reservas conforme regras publicadas.
- Equipes, agenda e checklists serão recursos reutilizáveis, vinculáveis aos mesmos registros de negócio.

## Fases 9–10 — Workflows reais
- Evoluir o construtor atual para gatilhos, condições, ações e próximas etapas configuráveis.
- Persistir versões publicadas e rascunhos; executar no servidor com registros de execução, erro e reprocessamento.
- Disponibilizar ações como criar projeto, checklist, reserva, tarefa, notificação e evento de agenda.

## Fases 11–12 — Auditoria e integração completa
- Registrar alterações críticas de usuários e do sistema com autor, organização, registro, antes/depois e data.
- Concluir o fluxo venda → operação → estoque → time → agenda → checklist → financeiro → pós-venda.
- Adicionar paginação e carregamento sob demanda às listas volumosas.

## Validação
- Pipeline: conferir todas as colunas, cards, textos, valores, avatares, prazos e botões em desktop, tablet e celular.
- Plataforma: testar light/dark/system, sidebar nos dois estados, navegação por teclado, foco, contraste e áreas de toque.
- Segurança: testar cada perfil com sessão real, acesso direto por URL e chamadas ao servidor.
- Negócio: executar ponta a ponta uma venda ganha e confirmar os registros gerados em cada módulo e na auditoria.

## Limites desta execução
- A Fase 1 será aplicada primeiro e validada visualmente antes das alterações amplas de arquitetura.
- As fases com persistência exigem ativação do Lovable Cloud; dados demonstrativos serão preservados até a migração correspondente.