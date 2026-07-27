# Deploy and Environment

> Step-by-step guide to run and deploy the Axion frontend.

---

## Prerequisites

- **Node.js** >= 20
- **npm** >= 10

---

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Environment Variables

Create a `.env.local` file in the project root:

```
NEXT_PUBLIC_API_URL=http://localhost:3001
```

> **Note:** The app currently has no API integration. This variable will be used once the backend is connected.

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

---

## Production Build

```bash
npm run build
npm start
```

---

## Deploy

### Vercel (recommended)

1. Connect your Git repository to [Vercel](https://vercel.com)
2. Set environment variables in Vercel dashboard
3. Deploy — Vercel auto-detects Next.js

### Manual

```bash
npm run build
# Deploy the .next/ directory
```

---

## Domain

**Production URL:** `https://axion.gabrielenzo.com.br`

---

## Environment Variables (Production)

| Variable | Value |
|----------|-------|
| `NEXT_PUBLIC_API_URL` | `https://api.axion.gabrielenzo.com.br` |
