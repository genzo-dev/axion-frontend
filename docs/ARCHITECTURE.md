# Arquitetura do Frontend

> Estrutura do projeto, decisões técnicas e fluxo de dados.

---

## Stack Tecnológica

| Camada | Tecnologia |
|--------|-----------|
| Framework | Next.js 16 (App Router) |
| Linguagem | TypeScript 5 |
| Estilização | Tailwind CSS v4 |
| Animação | Motion (Framer Motion) |
| Ícones | react-icons |
| Utilitários | clsx |

---

## Estrutura do Projeto

```
app/               # Páginas e layouts do Next.js App Router
├── layout.tsx     # Layout raiz (fontes, metadados, Footer)
├── not-found.tsx  # Página 404 personalizada
├── globals.css    # Import do Tailwind + variáveis CSS
├── sitemap.ts     # Gerador de sitemap dinâmico
├── robots.txt     # Diretivas SEO
├── (main)/        # Grupo de rotas para páginas principais
│   ├── layout.tsx # Layout do grupo (ScrollToTopButton)
│   └── page.tsx   # Landing page

components/        # Todos os componentes React
├── Accordion/
├── Buttons/
├── Footer/
├── Landing/
│   ├── Card.tsx
│   ├── LandingSectionWrapper.tsx
│   └── Sections/   # Seções da landing page
├── Logo/
├── Navbar/
├── TextLoopCustom/
└── motion-primitives/

docs/              # Documentação interna do frontend
lib/               # Funções utilitárias (vazio — a ser populado)
public/            # Assets estáticos servidos pelo Next.js
```

---

## Roteamento

### Grupos de Rotas

O projeto usa um grupo de rotas `(main)` para aplicar um layout compartilhado (com `ScrollToTopButton`) às páginas principais sem afetar a estrutura da URL.

### Rotas Atuais

| Rota | Página | Status |
|------|--------|--------|
| `/` | Landing page | ✅ Implementada |
| `/404` | Não encontrado | ✅ Implementada |
| `/discover` | Descoberta de trilhas | 🔜 Planejada |
| `/login` | Login | 🔜 Planejada |
| `/register` | Cadastro | 🔜 Planejada |

---

## Padrões

### Server Components por Padrão

Os componentes são **Server Components** a menos que precisem de interatividade. `"use client"` é usado apenas para:

- `Navbar/index.tsx` — toggle de menu, efeitos de scroll
- `PhasesSection.tsx` — estado de breakpoint responsivo
- `ScrollToTopButton.tsx` — rastreamento de posição de scroll
- `Accordion/index.tsx` — estado de abrir/fechar
- `motion-primitives/text-loop.tsx` — estado de animação

### Padrão de Estilização

- Use classes utilitárias do Tailwind diretamente
- Variáveis CSS para design tokens (definidas em `globals.css` no `@theme inline`)
- `clsx` para mesclagem condicional de classes

### Convenção de Componentes

- Cada componente em seu próprio diretório com `index.tsx`
- Props tipadas com TypeScript (tipos inline por enquanto)
- Tipos compartilhados ficam no próprio arquivo do componente

---

## Fluxo de Dados

> **Atualmente:** Sem gerenciamento de estado global. Todo estado é local via `useState` e `useEffect`.

```
                   ┌─────────────┐
                   │   Backend   │
                   │ (axion-api) │
                   └──────┬──────┘
                          │ HTTP (futuro)
                   ┌──────▼──────┐
                   │  Camada API │
                   │   (lib/)    │
                   └──────┬──────┘
                          │
                   ┌──────▼──────┐
                   │   Página    │
                   │ (Servidor)  │
                   └──────┬──────┘
                          │ props
                   ┌──────▼──────┐
                   │  Componente │
                   │ (Cliente)   │
                   └─────────────┘
```

---

## Considerações Futuras

- Gerenciamento de estado (Zustand ou Context para autenticação/trilhas)
- Camada de serviço de API em `lib/`
- Hooks personalizados para busca de dados
- Definições de tipos compartilhados em `types/`
