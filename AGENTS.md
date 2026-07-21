# AGENTS.md — Diretrizes Oficiais do Projeto

Este arquivo é a documentação oficial e a referência permanente para toda implementação neste repositório. Antes de alterar qualquer linha de código, leia este documento por completo. Nenhuma instrução aqui deve ser ignorada.

Se uma decisão de implementação entrar em conflito com estas diretrizes, siga sempre o `AGENTS.md`. Mudanças que exijam uma exceção devem ser previamente autorizadas pelo responsável pelo projeto.

## Projeto

Este repositório contém um portfólio profissional. Todo desenvolvimento futuro deve preservar sua identidade visual existente e contribuir para uma experiência coesa.

O projeto deve transmitir:

- elegância;
- minimalismo;
- tecnologia;
- sofisticação.

O objetivo não é acumular efeitos visuais. O foco principal é a consistência entre páginas, seções, estados e componentes.

## Stack

- Preserve a stack existente.
- Nunca substitua tecnologias, frameworks, ferramentas ou padrões já adotados sem autorização explícita.
- Reutilize componentes existentes sempre que possível.
- Não reconstrua páginas do zero quando elas puderem ser evoluídas com segurança.
- Evite bibliotecas e dependências desnecessárias.
- Antes de adicionar uma dependência, confirme que a necessidade não pode ser atendida pela stack ou pelos utilitários já presentes.

## Design Philosophy

Todo componente novo ou alterado deve seguir exatamente a mesma linguagem visual do restante do projeto. Cada elemento deve parecer parte de um único sistema.

- Não crie estilos diferentes para componentes semelhantes.
- Reutilize sempre os tokens de design existentes.
- Prefira consistência, legibilidade e acabamento a efeitos decorativos.
- Mantenha estados de interação coerentes em toda a interface.

A interface deve evocar o nível de acabamento de produtos premium como Linear, Raycast, Arc Browser, Vercel e Clerk, sem copiar nenhum deles.

## Background

O único fundo permitido é um gradiente linear vertical que ocupe toda a página, usando exatamente:

- background principal: `#061D1B`;
- background final: `#010B0B`.

Não utilize outro fundo global. O gradiente deve cobrir toda a extensão visível e acompanhar corretamente o crescimento do conteúdo.

## Typography

### Fonte principal — Geist

Use `Geist Bold` em:

- títulos.

Use `Geist Regular` em:

- textos;
- navegação;
- botões;
- descrições.

### Fonte secundária — JetBrains Mono

Use `JetBrains Mono` somente em:

- labels;
- footer;
- tags;
- pequenas informações técnicas.

Nunca utilize `JetBrains Mono` em títulos.

## Colors

Os tokens de cor oficiais são:

| Papel | Valor |
| --- | --- |
| Background principal | `#061D1B` |
| Background final | `#010B0B` |
| Texto principal | `#FFFFFF` |
| Texto secundário | `rgba(255, 255, 255, 0.70)` |
| Glass | `rgba(30, 32, 34, 0.30)` |
| Glass Border | `rgba(255, 255, 255, 0.08)` |
| Accent | `#F59E0B` |

O laranja de accent nunca deve dominar a interface. Utilize-o apenas em pequenos destaques, estados ou pontos de ênfase.

## Glass Design System

Todos os componentes de superfície devem compartilhar exatamente a mesma identidade glass, incluindo:

- botões;
- cards;
- navbar;
- ícones sociais;
- technology chips;
- inputs;
- modais.

### Características visuais

- dark glass;
- baixa transparência;
- blur discreto;
- borda extremamente sutil;
- leve brilho interno;
- sem glow exagerado;
- sem sombras pesadas;
- sem aparência futurista exagerada.

### Referência equivalente do Figma

| Propriedade | Valor |
| --- | --- |
| Fill | `#1E2022` a `30%` |
| Border | `#FFFFFF` a `8%`, `1px`, inside |
| Corner Radius | `24px` |
| Light Angle | `-45°` |
| Light Intensity | `80%` |
| Refraction | `80` |
| Depth | `20` |
| Dispersion | `50` |
| Ice | `32` |
| Splay | valor não especificado na referência original |

Ao implementar o efeito em CSS, reproduza somente o resultado visual. Não tente copiar propriedades do Figma que não possuam equivalente real na plataforma web. Mantenha o efeito leve, consistente e eficiente.

## Components

Todos os componentes devem seguir a mesma identidade visual e reutilizar os tokens oficiais.

### Botões

- formato cápsula;
- radius de `24px`;
- superfície glass;
- hover discreto;
- não aumentar de tamanho no hover;
- sem animações exageradas.

### Cards

- superfície glass;
- mesmo radius dos demais componentes equivalentes;
- mesmo blur;
- mesma borda.

### Technology Chips

- radius de `24px`;
- superfície glass;
- padding consistente;
- texto centralizado.

### Ícones sociais

- formato circular;
- superfície glass;
- mesmo tamanho entre todos os ícones;
- espaçamento uniforme.

### Navbar, inputs e modais

- aplicar a mesma linguagem glass;
- preservar radius, blur e borda consistentes;
- manter hierarquia, contraste e estados de interação acessíveis;
- evitar variações visuais que não sejam justificadas pela função do componente.

## Hero Section

A Hero sempre possui duas imagens:

1. **Imagem decorativa:** fica atrás da seção e serve apenas para composição.
2. **Foto de perfil:** sempre circular, centralizada e acima do nome. Nunca aplique overlay sobre ela.

Se já existirem imagens no projeto, reutilize-as. Se não existirem, utilize placeholders. Nunca substitua automaticamente imagens fornecidas pelo usuário.

## Layout

- Mantenha todo o conteúdo centralizado.
- Utilize bastante espaço negativo.
- Preserve espaçamento consistente.
- Construa uma hierarquia visual clara.
- Nunca adicione elementos apenas para ocupar espaço.
- Garanta alinhamento e ritmo visual entre todas as seções.

## Responsividade

Desktop é a referência principal. Em dispositivos móveis, não redesenhe a interface: apenas adapte larguras, grid, padding, fontes e quebras de linha.

A identidade, a hierarquia e o estilo devem permanecer os mesmos em todos os tamanhos de tela.

## Acessibilidade

Sempre garanta:

- `aria-label` em controles que não possuam nome acessível visível;
- contraste adequado;
- ordem correta de headings;
- HTML semântico;
- links claros e acessíveis;
- navegação por teclado e foco visível nos elementos interativos;
- textos alternativos apropriados para imagens informativas e tratamento adequado para imagens decorativas.

## Performance

- Evite renders desnecessários.
- Evite código duplicado.
- Evite dependências sem necessidade.
- Priorize componentes reutilizáveis.
- Preserve carregamento eficiente de imagens, fontes e recursos.
- Não sacrifique a experiência ou a manutenibilidade por efeitos visuais.

## Desenvolvimento

Antes de qualquer alteração futura:

1. Leia este `AGENTS.md` por completo.
2. Analise o projeto e a implementação existente.
3. Reutilize componentes existentes.
4. Não quebre a identidade visual.
5. Não remova funcionalidades.
6. Não altere a stack.
7. Identifique e informe quais arquivos serão modificados e explique brevemente o motivo antes de implementar.

Durante a implementação:

- faça mudanças incrementais e compatíveis com o código existente;
- preserve conteúdo, imagens e funcionalidades fornecidos pelo usuário;
- mantenha os tokens e padrões definidos neste documento;
- verifique estados responsivos, interativos e acessíveis;
- não introduza escopo não solicitado.

Ao finalizar:

1. Execute o lint configurado no projeto.
2. Execute o build configurado no projeto.
3. Execute todos os testes disponíveis e relevantes.
4. Corrija automaticamente os erros encontrados quando a correção estiver dentro do escopo e não exigir uma decisão de produto.
5. Informe na resposta final:
   - arquivos modificados;
   - resumo das alterações;
   - resultado do lint;
   - resultado do build;
   - resultado dos testes;
   - possíveis pendências.

Este documento deve permanecer como fonte de verdade para todas as próximas tarefas do projeto.
