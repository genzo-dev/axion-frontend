<p align="center">
  <img src="public/images/axion_banner.png" alt="Logo do Axion" width="1000"/>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/status-em_desenvolvimento-yellow" alt="Status"/>
  <img src="https://img.shields.io/badge/foco-autodidatas-blue" alt="Foco"/>
  <img src="https://img.shields.io/badge/etapa-MVP-yellow" alt="Etapa"/>
  <img src="https://img.shields.io/badge/escopo-TCC-green" alt="TCC Scope"/>
</p>

Frontend do **Axion** — plataforma aberta de trilhas de estudo para autodidatas. Crie, compartilhe e descubra rotas de aprendizado organizadas.

> Para uma visão geral do projeto, acesse o [hub oficial](https://github.com/genzo-dev/axion_hub).

---

## Funcionalidades

- **Landing page** com seções de propósito, funcionamento, público-alvo e roadmap
- **Navbar responsiva** com menu mobile e links de navegação
- **Footer** com links institucionais, da plataforma e de ajuda
- **SEO completo** — Open Graph, Twitter cards, sitemap, robots.txt, PWA manifest
- **Design system** com variáveis CSS via Tailwind v4 `@theme inline`
- **404 personalizada**

---

## Tecnologias

| Ferramenta                                                | Versão  |
| --------------------------------------------------------- | ------- |
| [Next.js](https://nextjs.org/) (App Router)               | 16.2.11 |
| [React](https://react.dev/)                               | 19.2.4  |
| [TypeScript](https://www.typescriptlang.org/)             | 5       |
| [Tailwind CSS](https://tailwindcss.com/)                  | v4      |
| [Motion](https://motion.dev/) (Framer Motion)             | —       |
| [react-icons](https://react-icons.github.io/react-icons/) | —       |
| [clsx](https://github.com/lukeed/clsx)                    | —       |

---

## Como rodar

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

---

## Scripts disponíveis

| Comando         | Descrição                          |
| --------------- | ---------------------------------- |
| `npm run dev`   | Inicia servidor de desenvolvimento |
| `npm run build` | Gera build de produção             |
| `npm start`     | Inicia servidor de produção        |
| `npm run lint`  | Executa ESLint                     |

---

## Estrutura do projeto

```
app/              # Páginas e layouts (App Router)
components/       # Componentes React reutilizáveis
docs/             # Documentação interna do frontend
lib/              # Utilitários (em construção)
public/           # Assets estáticos
```

---

## Documentação interna

A documentação detalhada do frontend está em `docs/`:

| Documento                                 | Descrição                                       |
| ----------------------------------------- | ----------------------------------------------- |
| [COMPONENTS.md](docs/COMPONENTS.md)       | Catálogo de componentes com props e exemplos    |
| [DESIGN_TOKENS.md](docs/DESIGN_TOKENS.md) | Design tokens — cores, tipografia, espaçamentos |
| [ARCHITECTURE.md](docs/ARCHITECTURE.md)   | Estrutura do projeto, stack e fluxo de dados    |
| [API.md](docs/API.md)                     | Consumo da API do backend (esboço)              |
| [DEPLOY.md](docs/DEPLOY.md)               | Guia de deploy e ambiente                       |

---

## Repositórios relacionados

| Repositório                                                 | Função                 |
| ----------------------------------------------------------- | ---------------------- |
| [axion_hub](https://github.com/genzo-dev/axion_hub)         | Hub central do projeto |
| [axion-backend](https://github.com/genzo-dev/axion-backend) | API backend            |
| [axion-docs](https://github.com/genzo-dev/axion-docs)       | Documentação geral     |

---

## Autor

<div align="center">
  <img src="https://github.com/genzo-dev.png" alt="Gabriel Enzo" width="160"/>
</div>

<div align="center">
  <strong>Gabriel Enzo (genzo-dev)</strong>
</div>

<div align="center">
  <sub>Fullstack web developer</sub>
</div>

&nbsp;

<div align="center">
  <a href="https://www.linkedin.com/in/gabriel-enzo-200403233/">💼 LinkedIn</a>
  |
  <a href="https://github.com/genzo-dev">🐙 GitHub</a>
</div>
