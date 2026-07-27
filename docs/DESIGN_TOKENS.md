# Design Tokens

> Central source of truth for the project's visual decisions — colors, typography, spacing, and borders.

---

## Colors

### Theme Variables

Defined in `app/globals.css` via `@theme inline`:

| Token | Value | Usage |
|-------|-------|-------|
| `--color-background` | `#000000` | Page background |
| `--color-foreground` | `#ededed` | Default text color |
| `--color-primary` | `#ff4f00` | Buttons, highlights, icons, hover states, accent borders |
| `--color-bg-component` | `#0c0c0c` | Navbar background |
| `--color-bg-trasnparent` | `#0c0c0c67` | Navbar translucent background (desktop) |

> **Note:** These tokens need to be replaced with their semantic names (`--color-surface-nav`, `--color-surface-nav-translucent`). See [REFACTOR.md](../REFACTOR.md#53-mapeamento-de-substituição).

### Base Colors

| Token | Value |
|-------|-------|
| `white` | `#ffffff` |
| `black` | `#000000` |
| `neutral-100` | `#f5f5f5` |

### Opacity Scale

| Token | Usage |
|-------|-------|
| `white/5` | Subtle borders (hover) |
| `white/10` | Default borders, subtle backgrounds |
| `white/30` | Accordion borders |
| `white/70` | Muted text |

---

## Typography

### Font Families

| Token | Font | Weight used |
|-------|------|-------------|
| `--font-dm-sans` | DM Sans | 400, 700, 800 |
| `--font-geist-sans` | Geist Sans | 400 |
| `--font-geist-mono` | Geist Mono | 400 |

### Heading Scale

| Level | Classes |
|-------|---------|
| Section title | `text-xl sm:text-2xl md:text-3xl/relaxed font-bold font-dm-sans` |
| Problem block title | `text-xl/relaxed md:text-2xl/relaxed lg:text-3xl/relaxed font-bold font-dm-sans` |
| Section subtitle | `text-lg font-bold font-dm-sans` |

---

## Spacing

| Context | Value |
|---------|-------|
| Section horizontal padding | `px-6 sm:px-12 lg:px-10 2xl:px-40` |
| Footer horizontal padding | `px-6 sm:px-12 lg:px-10 2xl:px-120` |
| Section top/bottom padding | `py-12` or `py-24` |
| Navbar padding | `py-4 sm:py-6 px-6 sm:px-12 lg:px-6 xl:px-12 2xl:px-14 lg:py-4` |

---

## Breakpoints

| Name | Min-width | Used for |
|------|-----------|----------|
| `sm` | 640px | Mobile landscape |
| `md` | 768px | Tablet |
| `lg` | 1024px | Desktop layout switch |
| `xl` | 1280px | Wide desktop |
| `2xl` | 1536px | Ultra-wide |

---

## Borders

| Token | Usage |
|-------|-------|
| `border-white/10` | Default card/container borders |
| `border-white/30` | Accordion borders |
| `border-black` | ProblemSection headings |
| `border-[#ff4f00]` | Highlight border (ProblemSection) |
