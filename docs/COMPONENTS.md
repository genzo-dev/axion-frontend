# Catálogo de Componentes

> Referência de todos os componentes disponíveis, suas props, variantes e exemplos de uso.

---

## Páginas

### `Home`

Página inicial (`/`). Compõe todas as seções da landing page em ordem.

```tsx
// app/(main)/page.tsx
```

Sem props. Server Component.

**Seções renderizadas:** `HeroSection`, `ProblemSection`, `FunctionSection`, `AudienceSection`, `CTASection`, `PhasesSection`

---

### `AboutPage`

Página "Sobre" (`/about`). Explica o projeto Axion com seções expansíveis via `Accordion`.

```tsx
// app/(main)/about/page.tsx
```

Sem props. Server Component.

---

### `NotFoundPage`

Página 404 personalizada.

```tsx
// app/not-found.tsx
```

Sem props. Server Component.

---

## Layouts

### `RootLayout` (raiz)

Layout raiz da aplicação. Configura `<html>`, fontes, metadados e inclui o `Footer`.

```tsx
// app/layout.tsx
```

| Prop | Tipo | Obrigatório |
|------|------|-------------|
| `children` | `React.ReactNode` | Sim |

---

### `RootLayout` (grupo main)

Layout do grupo de rotas `(main)`. Renderiza `Navbar` e `ScrollToTopButton`.

```tsx
// app/(main)/layout.tsx
```

| Prop | Tipo | Obrigatório |
|------|------|-------------|
| `children` | `React.ReactNode` | Sim |

---

## Botões

### `DefaultButton`

Botão polimórfico com suporte a múltiplas variantes, tamanhos e renderização opcional como link.

```tsx
import { DefaultButton } from "@/components/Buttons/DefaultButton";
```

| Prop | Tipo | Obrigatório | Padrão |
|------|------|-------------|--------|
| `variant` | `"default" \| "ghost" \| "contrast" \| "active"` | Não | `"default"` |
| `size` | `"sm" \| "md" \| "lg"` | Não | `"md"` |
| `href` | `string` | Não (se omitido, renderiza `<button>`) | — |
| `className` | `string` | Não | — |
| `children` | `React.ReactNode` | Sim | — |

**Exemplos:**

```tsx
<DefaultButton size="lg" className="px-12!">Explorar Trilhas</DefaultButton>
<DefaultButton href="/login" variant="ghost">Entrar</DefaultButton>
<DefaultButton variant="contrast">Criar Trilha</DefaultButton>
```

---

### `MenuButton`

Botão de menu hambúrguer com três linhas animadas para navegação mobile.

```tsx
import MenuButton from "@/components/Buttons/MenuButton";
```

| Prop | Tipo | Obrigatório |
|------|------|-------------|
| `isOpen` | `boolean` | Sim |
| `onClick` | `() => void` | Sim |

---

### `ScrollToTopButton`

Botão flutuante que aparece após rolar 20% da viewport e volta ao topo ao clicar.

```tsx
import ScrollToTopButton from "@/components/Buttons/ScrollToTopButton";
```

Sem props. Usa `"use client"`.

---

## Navegação

### `Navbar`

Barra de navegação principal. Contém logo, links de navegação e botões de autenticação.
No mobile (< lg), exibe menu overlay com `MenuButton`.

```tsx
import Navbar from "@/components/Navbar";
```

Sem props. Usa `"use client"`.

---

### `NavbarLink`

Link de navegação individual usado dentro da `Navbar`.

```tsx
import NavbarLink from "@/components/Navbar/_components/NavbarLink";
```

| Prop | Tipo | Obrigatório |
|------|------|-------------|
| `children` | `React.ReactNode` | Sim |
| `url` | `string` | Sim |
| `onClick` | `() => void` | Não |

---

### `FooterLink`

Link estilizado para o footer. Suporta abertura em nova aba.

```tsx
import FooterLink from "@/components/Links/FooterLink";
```

| Prop | Tipo | Obrigatório | Padrão |
|------|------|-------------|--------|
| `href` | `string` | Sim | — |
| `blank` | `boolean` | Não | `false` |
| `children` | `string` | Sim | — |
| `className` | `string` | Não | — |

---

### `Footer`

Rodapé do site. Exibe logo, créditos e links institucionais, da plataforma e de ajuda.

```tsx
import Footer from "@/components/Footer";
```

Sem props. Server Component.

---

## Landing Page

### Seções

#### `HeroSection`

Seção hero principal com imagem de fundo fullscreen, `TextLoopCustom` animado e botão CTA.

```tsx
import HeroSection from "@/components/Landing/Sections/HeroSection";
```

Sem props. Server Component.

---

#### `ProblemSection`

Seção "Por que o Axion existe?" com os três problemas que a plataforma resolve.
Tem fundo claro (`#FAF9F6`) e sobreposição negativa com a hero.

```tsx
import ProblemSection from "@/components/Landing/Sections/ProblemSection";
```

Sem props. Server Component.

---

#### `FunctionSection`

Seção "Como o Axion funciona" com grid de 4 colunas de `Card` componentes.

```tsx
import FunctionSection from "@/components/Landing/Sections/FunctionSection";
```

Sem props. Server Component.

---

#### `AudienceSection`

Seção "Para quem é o Axion?" com dois cards de persona lado a lado.

```tsx
import AudienceSection from "@/components/Landing/Sections/AudienceSection";
```

Sem props. Server Component.

---

#### `CTASection`

Seção de call-to-action no final da landing page.

```tsx
import CTASection from "@/components/Landing/Sections/CTASection";
```

Sem props. Server Component.

---

#### `PhasesSection`

Seção "Roadmap" com as 6 fases do projeto em `Accordion`. Tem sidebar fixa no desktop.

```tsx
import PhasesSection from "@/components/Landing/Sections/PhasesSection";
```

Sem props. Usa `"use client"` (viewport tracking + `react-sticky-box`).

---

### Componentes de Suporte

#### `LandingSectionWrapper`

Wrapper genérico para seções da landing page com padding horizontal consistente.

```tsx
import LandingSectionWrapper from "@/components/Landing/LandingSectionWrapper";
```

| Prop | Tipo | Obrigatório |
|------|------|-------------|
| `id` | `string` | Não |
| `className` | `string` | Não |
| `children` | `React.ReactNode` | Sim |

---

#### `Card`

Card de funcionalidade usado na `FunctionSection`.

```tsx
import Card from "@/components/Landing/Card";
```

| Prop | Tipo | Obrigatório |
|------|------|-------------|
| `title` | `string` | Sim |
| `url` | `string` | Sim |
| `children` | `React.ReactNode` | Sim |

---

#### `StatusPhaseBadge`

Badge de status de fase do projeto.

```tsx
import StatusPhaseBadge from "@/components/Landing/StatusPhaseBadge";
```

| Prop | Tipo | Obrigatório |
|------|------|-------------|
| `status` | `"CONCLUIDO" \| "EM ANDAMENTO" \| "PLANEJADO"` | Sim |

---

## Interativos

### `Accordion`

Componente de acordeão expansível.

```tsx
import Accordion from "@/components/Accordion";
```

| Prop | Tipo | Obrigatório | Padrão |
|------|------|-------------|--------|
| `title` | `string` | Sim | — |
| `children` | `React.ReactNode` | Sim | — |
| `reverse` | `boolean` | Não | `false` |
| `titleSize` | `"sm" \| "base" \| "lg" \| "xl"` | Não | `"base"` |

Usa `"use client"`.

---

### `TextLoop`

Componente de animação de texto que cicla entre filhos com transições animadas.

```tsx
import { TextLoop } from "@/components/motion-primitives/text-loop";
```

| Prop | Tipo | Obrigatório | Padrão |
|------|------|-------------|--------|
| `children` | `React.ReactNode[]` | Sim | — |
| `className` | `string` | Não | — |
| `interval` | `number` (segundos) | Não | `2` |
| `transition` | `Transition` (motion) | Não | — |
| `variants` | `Variants` (motion) | Não | — |
| `onIndexChange` | `(index: number) => void` | Não | — |
| `trigger` | `boolean` | Não | `true` |
| `mode` | `"popLayout" \| "wait" \| "sync"` | Não | `"popLayout"` |

Usa `"use client"` e Framer Motion.

**Exemplo:**

```tsx
<TextLoop interval={3} transition={{ type: "spring", stiffness: 80 }}>
  <span>trilhas de estudo</span>
  <span>jornadas de aprendizado</span>
</TextLoop>
```

---

## Diversos

### `Logo`

Renderiza o SVG do logo do Axion via `next/image`.

```tsx
import Logo from "@/components/Logo";
```

Sem props.

---

### `TextLoopCustom`

Wrapper customizado do `TextLoop` para o texto animado da hero section.
Cicla entre: "trilhas de estudo", "jornadas de aprendizado", "rotas organizadas", "guias colaborativos".

```tsx
import { TextLoopCustom } from "@/components/TextLoopCustom";
```

Sem props. Server Component.
