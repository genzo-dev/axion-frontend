Texto 1 — Testes unitários do frontend (Vitest)

# Testes Unitários (Frontend)

> Estratégia, como rodar e convenções dos testes unitários com Vitest.

---

## Estratégia de Testes Unitários

- **Ferramenta:** Vitest.
- **Foco:** lógica pura — schemas Zod, utils e componentes React.
- Testam funções e componentes de forma isolada, mockando dependências externas (`next/headers`, `fetch`, `next/navigation`).
- Server actions **não** são testadas aqui — ficam para os testes E2E (ver documentação de Testes E2E).

---

## Como Rodar

| Comando                    | O que faz                                             |
| -------------------------- | ----------------------------------------------------- |
| `npm test`                 | Executa todos os testes uma vez                       |
| `npm run test:watch`       | Modo watch (roda a cada alteração)                    |
| `npm run test:coverage`    | Executa e gera relatório de cobertura em `./coverage` |
| `npx vitest run <caminho>` | Executa um arquivo/rota específico                    |

---

## Configuração

| Arquivo                  | Função                                                    |
| ------------------------ | --------------------------------------------------------- |
| `vitest.config.ts`       | Configuração principal do Vitest                          |
| `vitest.setup.ts`        | Executado antes de **cada arquivo** de teste              |
| `vitest.global.setup.ts` | Executado uma única vez antes/depois da **suíte inteira** |

### `vitest.config.ts`

- Ambiente `jsdom` (simula DOM no Node — testes de componentes React);
- `globals: true` — `describe`, `it`, `expect`, `vi` disponíveis sem import;
- `setupFiles` e `globalSetup` apontam para os arquivos acima;
- `fileParallelism: false` — evita conflito em constraints únicas (ex.: e-mail/username) caso algum teste acesse o banco;
- `testTimeout: 10000` (10s por teste);
- Cobertura com provider `v8` (nativo do Node), ignorando types, mocks, storybook, layouts e arquivos de teste;
- Alias `@/` → raiz do projeto (ex.: `@/lib/auth/manage-auth-cookies`).

### `vitest.setup.ts`

Importa `@testing-library/jest-dom` (matchers como `.toBeInTheDocument()`) e, após cada teste, executa `cleanup()` (limpa o DOM) e `vi.resetAllMocks()` (zera mocks/spies).

### `vitest.global.setup.ts`

Contém `setup()` e `teardown()` — hoje vazios, reservados para limpeza global (ex.: bases de dados) quando necessário.

---

## Convenções

- Nomenclatura: `**/*.{spec,test}.{ts,tsx}` (ex.: `get-tokens.spec.ts`);
- Suíte localizada em `tests/` espelhando o código testado (ex.: `tests/auth/` → `lib/auth/`);
- Usar `describe` por função/feature e `it` por caso.

---

## Boas Práticas

- **`vi.mock` é hoisted:** a factory roda antes das variáveis `const` do arquivo existirem. Para referenciar mocks dentro da factory e assertá-los depois, use `vi.hoisted`:

  ```ts
  const { getMock } = vi.hoisted(() => ({
    getMock: vi.fn(),
  }));

  vi.mock("next/headers", () => ({
    cookies: async () => ({ get: getMock }),
  }));
  ```

- Lembre-se de que vi.resetAllMocks() zera a implementação dos mocks após cada teste — redefina mocks com vários it no mesmo arquivo.
