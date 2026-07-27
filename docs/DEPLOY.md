# Deploy e Ambiente

> Guia passo a passo para executar e fazer deploy do frontend Axion.

---

## Pré-requisitos

- **Node.js** >= 20
- **npm** >= 10

---

## Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

---

## Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```
NEXT_PUBLIC_API_URL=http://localhost:3001
```

> **Nota:** O app atualmente não tem integração com API. Esta variável será usada quando o backend for conectado.

---

## Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Iniciar servidor de desenvolvimento |
| `npm run build` | Build para produção |
| `npm start` | Iniciar servidor de produção |
| `npm run lint` | Executar ESLint |

---

## Build de Produção

```bash
npm run build
npm start
```

---

## Deploy

### Vercel (recomendado)

1. Conecte seu repositório Git à [Vercel](https://vercel.com)
2. Configure as variáveis de ambiente no painel da Vercel
3. Faça o deploy — a Vercel detecta Next.js automaticamente

### Manual

```bash
npm run build
# Faça o deploy do diretório .next/
```

---

## Domínio

**URL de Produção:** `https://axion.gabrielenzo.com.br`

---

## Variáveis de Ambiente (Produção)

| Variável | Valor |
|----------|-------|
| `NEXT_PUBLIC_API_URL` | `https://api.axion.gabrielenzo.com.br` |
