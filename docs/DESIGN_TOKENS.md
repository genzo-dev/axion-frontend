# Design Tokens

> Fonte central da verdade para as decisões visuais do projeto — cores, tipografia, espaçamento e bordas.

---

## Cores

### Variáveis de Tema

Definidas em `app/globals.css` via `@theme inline`:

| Token | Valor | Uso |
|-------|-------|-----|
| `--color-background` | `#000000` | Fundo da página |
| `--color-foreground` | `#ededed` | Cor padrão do texto |
| `--color-primary` | `#ff4f00` | Botões, destaques, ícones, estados de hover, bordas de destaque |
| `--color-bg-component` | `#0c0c0c` | Fundo da Navbar |
| `--color-bg-trasnparent` | `#0c0c0c67` | Fundo translúcido da Navbar (desktop) |

> **Nota:** Esses tokens precisam ser substituídos por nomes semânticos (`--color-surface-nav`, `--color-surface-nav-translucent`). Veja [REFACTOR.md](../REFACTOR.md#53-mapeamento-de-substituição).

### Cores Base

| Token | Valor |
|-------|-------|
| `white` | `#ffffff` |
| `black` | `#000000` |
| `neutral-100` | `#f5f5f5` |

### Escala de Opacidade

| Token | Uso |
|-------|-----|
| `white/5` | Bordas sutis (hover) |
| `white/10` | Bordas padrão, fundos sutis |
| `white/30` | Bordas do Accordion |
| `white/70` | Texto secundário |

---

## Tipografia

### Famílias de Fonte

| Token | Fonte | Peso utilizado |
|-------|-------|----------------|
| `--font-dm-sans` | DM Sans | 400, 700, 800 |
| `--font-geist-sans` | Geist Sans | 400 |
| `--font-geist-mono` | Geist Mono | 400 |

### Escala de Títulos

| Nível | Classes |
|-------|---------|
| Título de seção | `text-xl sm:text-2xl md:text-3xl/relaxed font-bold font-dm-sans` |
| Título de bloco de problema | `text-xl/relaxed md:text-2xl/relaxed lg:text-3xl/relaxed font-bold font-dm-sans` |
| Subtítulo de seção | `text-lg font-bold font-dm-sans` |

---

## Espaçamento

| Contexto | Valor |
|----------|-------|
| Padding horizontal de seção | `px-6 sm:px-12 lg:px-10 2xl:px-40` |
| Padding horizontal do Footer | `px-6 sm:px-12 lg:px-10 2xl:px-120` |
| Padding superior/inferior de seção | `py-12` ou `py-24` |
| Padding da Navbar | `py-4 sm:py-6 px-6 sm:px-12 lg:px-6 xl:px-12 2xl:px-14 lg:py-4` |

---

## Breakpoints

| Nome | Largura mínima | Uso |
|------|----------------|-----|
| `sm` | 640px | Mobile paisagem |
| `md` | 768px | Tablet |
| `lg` | 1024px | Troca para layout desktop |
| `xl` | 1280px | Desktop amplo |
| `2xl` | 1536px | Ultra-wide |

---

## Bordas

| Token | Uso |
|-------|-----|
| `border-white/10` | Bordas padrão de cartões/containers |
| `border-white/30` | Bordas do Accordion |
| `border-black` | Títulos da ProblemSection |
| `border-[#ff4f00]` | Borda de destaque (ProblemSection) |
