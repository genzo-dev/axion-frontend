<p align="center">
  <img src="public/images/axion_banner.png" alt="Axion Banner" width="1000" height="400"/>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/status-em_desenvolvimento-yellow" alt="Status"/>
  <img src="https://img.shields.io/badge/etapa-MVP-yellow" alt="Etapa"/>
  <img src="https://img.shields.io/badge/escopo-TCC-green" alt="Escopo"/>
  <img src="https://img.shields.io/badge/foco-autodidatas-blue" alt="Foco"/>
</p>

Bem-vindo ao repositório de frontend do **Axion** — uma plataforma aberta de trilhas de estudo para autodidatas.

> Para uma visão geral do projeto, acesse o [hub oficial](https://github.com/genzo-dev/axion_hub).

## Qual o propósito desse repositório?

Este repositório é responsável pelo frontend do **Axion**, incluindo as documentações relacionadas especificamente ao frontend como componentes, design system, entre outras.

## Funcionalidades

- **Landing page completa** — propósito, funcionamento, público-alvo, roadmap e CTA (localizada na rota `/`)
- **Navbar responsiva** — menu adaptativo com overlay mobile e links de navegação
- **Footer informativo** — links institucionais, da plataforma e de ajuda
- **Página Sobre** — história, valores, fases do projeto e tecnologias
- **SEO completo** — Open Graph, Twitter cards, sitemap dinâmico, robots.txt e manifest PWA
- **Design system próprio** — variáveis CSS centralizadas via Tailwind v4 `@theme inline`
- **Página 404 personalizada**

> [!NOTE]
>
> O projeto Axion está dividido em fases, conforme o avanço das fases essa seção será atualizada com novas funcionalidades.

---

## Stack

| Ferramenta                                                | Versão  |
| --------------------------------------------------------- | ------- |
| [Next.js](https://nextjs.org/) (App Router)               | 16.2.11 |
| [React](https://react.dev/)                               | 19.2.4  |
| [TypeScript](https://www.typescriptlang.org/)             | 5       |
| [Tailwind CSS](https://tailwindcss.com/)                  | v4      |
| [Motion](https://motion.dev/) (Framer Motion)             | —       |
| [react-icons](https://react-icons.github.io/react-icons/) | —       |
| [clsx](https://github.com/lukeed/clsx)                    | —       |

## Como rodar

```bash
# Instalar dependências
npm install

# Desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

### Scripts

| Comando         | Descrição                          |
| --------------- | ---------------------------------- |
| `npm run dev`   | Inicia servidor de desenvolvimento |
| `npm run build` | Gera build de produção             |
| `npm start`     | Inicia servidor de produção        |
| `npm run lint`  | Executa ESLint                     |

### Rotas disponíveis

- `/` - Landing Page
- `/about` - Página informativa sobre o projeto
- 404 - Página Not Found customizada

> [!NOTE]
>
> O projeto Axion está dividido em fases, conforme o avanço das fases essa seção será atualizada com novas rotas e instruções para rodar o projeto.

## Estrutura de pastas

```
app/              # Páginas e layouts (App Router)
├── (main)/       # Grupo de rotas principal
│   ├── about/    # Página "Sobre"
│   ├── layout.tsx
│   └── page.tsx  # Landing page
├── layout.tsx    # Layout raiz
├── not-found.tsx # Página 404
├── globals.css   # Tailwind + tokens
├── sitemap.ts    # Sitemap dinâmico
└── robots.txt    # Diretivas SEO

components/       # Componentes React reutilizáveis
├── Accordion/
├── Buttons/
├── Footer/
├── Landing/      # Seções da landing page
├── Links/
├── Logo/
├── Navbar/
└── motion-primitives/

docs/             # Documentação interna
lib/              # Utilitários (em construção)
public/           # Assets estáticos
```

## Documentação

A documentação detalhada do frontend está em [`docs/`](docs/):

| Documento                                 | Descrição                                    |
| ----------------------------------------- | -------------------------------------------- |
| [COMPONENTS.md](docs/COMPONENTS.md)       | Catálogo de componentes com props e exemplos |
| [DESIGN_TOKENS.md](docs/DESIGN_TOKENS.md) | Cores, tipografia, espaçamentos e bordas     |
| [ARCHITECTURE.md](docs/ARCHITECTURE.md)   | Estrutura do projeto, stack e fluxo de dados |
| [API.md](docs/API.md)                     | Consumo da API do backend (esboço)           |
| [DEPLOY.md](docs/DEPLOY.md)               | Guia de deploy e ambiente                    |

## Estado do projeto

O projeto está organizado em **6 fases (0 a 5)**. Atualmente estamos na **Fase 1 — MVP**.

Sobre a **Fase 1 - MVP**:

- Landing Page concluída

> [!IMPORTANT]
> O lançamento oficial da plataforma ocorre após a conclusão da **Fase 1 (MVP)**. As fases seguintes são implementadas em ordem, uma após a outra.

## Repositórios relacionados

| Repositório                                                 | Função                  |
| ----------------------------------------------------------- | ----------------------- |
| [axion_hub](https://github.com/genzo-dev/axion_hub)         | Hub central do projeto  |
| [axion-docs](https://github.com/genzo-dev/axion-docs)       | Documentação geral      |
| [axion-backend](https://github.com/genzo-dev/axion-backend) | API backend dockerizada |

## Autor

<div align="center">
  <img src="https://github.com/genzo-dev.png" alt="Gabriel Enzo (genzo-dev)" width="160"/>
</div>

<div align="center">
  <strong>Gabriel Enzo (genzo-dev)</strong>
</div>

<div align="center">
  <sub>
    Fullstack web developer
  </sub>
</div>

&nbsp;

<div align="center">
  <a href="https://www.linkedin.com/in/genzo-dev/">💼 LinkedIn</a>
  |
  <a href="https://github.com/genzo-dev">🐙 GitHub</a>
</div>
