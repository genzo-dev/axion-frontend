# Planejamento de refatoração do sistema

Este documento serve como base para o planejamento e acompanhamento de futuras refatorações no código. Nele devem ser registrados pontos identificados que possam ser melhorados, simplificados ou limpos, mesmo que a refatoração ainda não tenha sido realizada.

> O documento deve ser atualizado sempre que novos pontos de refatoração forem identificados ou quando alguma tarefa for concluída.

> Obs.: Caso o documento esteja vazio ou todas as tarefas de refatoração estejam marcadas como CONCLUÍDO (✅), significa que, até o momento, não há refatorações pendentes identificadas no estado atual do código.

**LEGENDA - Nível de prioridade:**

- 🟢 Baixa
- 🟡 Média
- 🔴 Alta

**LEGENDA - Status:**

- ⏳ Pendente
- 🔄 Em andamento
- ✅ Concluído

## Navbar Components:

### REFACTOR #1 (🟡) - Status: ⏳

- Separar a Navbar atual em dois componentes menores (`NavbarMobile` e `NavbarDesktop`) que devem ser utilizados dentro do `NavbarBase` já existente.

**Observação:** Deve se priorizar o uso de separação de classes com a biblioteca CLSX.

> Motivo: Atualmente a Navbar possui dois estilos bastante diferentes para a versão _mobile_ e _desktop_, logo, convém a separação visando a facilidade de mantnutenção do código.

## Uso da biblioteca CLSX em classes Tailwind

### REFACTOR #1 (🟡) - Status: ⏳

- Quando `className` possuir uma quantidade significativa de classes, elas podem ser organizadas em grupos lógicos, priorizando:

1° linha: classes estruturais/base;
2° linha: classes responsivas; (`sm:`, `md:`,`lg:`,`xl:`, etc.);
3° linha: variantes/estados (`hover`, `focus`, `disabled`, etc.);
4° linha: demais classes.

A divisão deve priorizar a legibilidade do código, não sendo necessário utilizar `clsx` quando a expressão resultante ficar menos legível.

> Motivo: A utilização de diversas classes Tailwind pode resultar em linhas extensas e prejudicar a leitura e compreensão do código. O uso do CLSX permite organizar essas classes em grupos lógicos, além de facilitar a composição de classes condicionais quando necessário.
