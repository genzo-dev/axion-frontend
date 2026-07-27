# Component Catalog

> Reference for all available components, their props, variants, and usage examples.

---

## Buttons

### `DefaultButton`

Button with support for multiple variants, sizes, and optional link rendering.

```tsx
import { DefaultButton } from "@/components/Buttons/DefaultButton";
```

| Prop | Type | Required | Default |
|------|------|----------|---------|
| `variant` | `"default" \| "ghost" \| "contrast" \| "active"` | No | `"default"` |
| `size` | `"sm" \| "md" \| "lg"` | No | `"md"` |
| `href` | `string` | No (if omitted, renders `<button>`) | — |
| `className` | `string` | No | — |
| `children` | `React.ReactNode` | Yes | — |

**Examples:**

```tsx
<DefaultButton size="lg" className="px-12!">Explorar Trilhas</DefaultButton>
<DefaultButton href="/login" variant="ghost">Entrar</DefaultButton>
<DefaultButton variant="contrast">Criar Trilha</DefaultButton>
```

---

### `MenuButton`

Hamburger menu icon button for mobile navigation.

```tsx
import MenuButton from "@/components/Buttons/MenuButton";
```

| Prop | Type | Required |
|------|------|----------|
| `isOpen` | `boolean` | Yes |
| `onClick` | `() => void` | Yes |

---

### `ScrollToTopButton`

Floating button that appears after scrolling down, scrolls back to top on click.

```tsx
import ScrollToTopButton from "@/components/Buttons/ScrollToTopButton";
```

No props. Uses `"use client"`.

---

## Navigation

### `NavbarLink`

Individual navigation link used inside the Navbar.

```tsx
import NavbarLink from "@/components/Navbar/_components/NavbarLink";
```

| Prop | Type | Required |
|------|------|----------|
| `children` | `React.ReactNode` | Yes |
| `url` | `string` | Yes |
| `onClick` | `() => void` | No |

---

## Landing Page

### `LandingSectionWrapper`

Wraps landing sections with consistent horizontal padding.

```tsx
import LandingSectionWrapper from "@/components/Landing/LandingSectionWrapper";
```

| Prop | Type | Required |
|------|------|----------|
| `id` | `string` | No |
| `className` | `string` | No |
| `children` | `React.ReactNode` | Yes |

### `Card`

Feature card used in the FunctionSection.

```tsx
import Card from "@/components/Landing/Card";
```

| Prop | Type | Required |
|------|------|----------|
| `title` | `string` | Yes |
| `url` | `string` | Yes |
| `children` | `React.ReactNode` | Yes |

---

## Interactive

### `Accordion`

Expandable accordion component.

```tsx
import Accordion from "@/components/Accordion";
```

| Prop | Type | Required |
|------|------|----------|
| `title` | `string` | Yes |
| `children` | `React.ReactNode` | Yes |

---

## Misc

### `Logo`

Renders the Axion logo SVG.

```tsx
import Logo from "@/components/Logo";
```

No props.

### `TextLoopCustom`

Animated text rotation for hero section.

```tsx
import { TextLoopCustom } from "@/components/TextLoopCustom";
```

No props.
