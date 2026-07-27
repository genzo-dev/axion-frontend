# Frontend Architecture

> Project structure, technical decisions, and data flow.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 |
| Animation | Motion (Framer Motion) |
| Icons | react-icons |
| Utilities | clsx |

---

## Project Structure

```
app/               # Next.js App Router pages and layouts
├── layout.tsx     # Root layout (fonts, metadata, Footer)
├── not-found.tsx  # Custom 404 page
├── globals.css    # Tailwind import + CSS variables
├── sitemap.ts     # Dynamic sitemap generator
├── robots.txt     # SEO directives
├── (main)/        # Route group for main pages
│   ├── layout.tsx # Group layout (ScrollToTopButton)
│   └── page.tsx   # Landing page

components/        # All React components
├── Accordion/
├── Buttons/
├── Footer/
├── Landing/
│   ├── Card.tsx
│   ├── LandingSectionWrapper.tsx
│   └── Sections/   # Landing page sections
├── Logo/
├── Navbar/
├── TextLoopCustom/
└── motion-primitives/

docs/              # Internal frontend documentation
lib/               # Utility functions (empty — to be populated)
public/            # Static assets served by Next.js
```

---

## Routing

### Route Groups

The project uses a route group `(main)` to apply a shared layout (with `ScrollToTopButton`) to the main pages without affecting the URL structure.

### Current Routes

| Route | Page | Status |
|-------|------|--------|
| `/` | Landing page | ✅ Implemented |
| `/404` | Not found | ✅ Implemented |
| `/discover` | Trail discovery | 🔜 Planned |
| `/login` | Login | 🔜 Planned |
| `/register` | Registration | 🔜 Planned |

---

## Patterns

### Server Components by Default

Components are **Server Components** unless they need interactivity. `"use client"` is used only for:

- `Navbar/index.tsx` — menu toggle, scroll effects
- `PhasesSection.tsx` — responsive breakpoint state
- `ScrollToTopButton.tsx` — scroll position tracking
- `Accordion/index.tsx` — open/close state
- `motion-primitives/text-loop.tsx` — animation state

### Styling Pattern

- Use Tailwind utility classes directly
- CSS variables for design tokens (defined in `globals.css` `@theme inline`)
- `clsx` for conditional class merging

### Component Convention

- Each component in its own directory with `index.tsx`
- Props typed with TypeScript (inline types for now)
- Shared types go in the component file itself

---

## Data Flow

> **Currently:** No global state management. All state is local via `useState` and `useEffect`.

```
                  ┌─────────────┐
                  │   Backend   │
                  │ (axion-api) │
                  └──────┬──────┘
                         │ HTTP (future)
                  ┌──────▼──────┐
                  │   API Layer │
                  │   (lib/)    │
                  └──────┬──────┘
                         │
                  ┌──────▼──────┐
                  │   Page      │
                  │ (Server)    │
                  └──────┬──────┘
                         │ props
                  ┌──────▼──────┐
                  │  Component  │
                  │ (Client)    │
                  └─────────────┘
```

---

## Future Considerations

- State management (Zustand or Context for auth/trails)
- API service layer in `lib/`
- Custom hooks for data fetching
- Shared type definitions in `types/`
