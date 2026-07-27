# Consumo de API

> Comunicação entre o frontend e o backend Axion.

---

## Status

> **⚠️ Ainda não implementado.** Este documento será completado conforme a camada de API for construída.

---

## URL Base

```
NEXT_PUBLIC_API_URL=https://api.axion.gabrielenzo.com.br
```

Configure via `.env.local`:

```
NEXT_PUBLIC_API_URL=http://localhost:3001
```

---

## Autenticação

[A ser documentado — fluxo JWT, armazenamento de token, lógica de refresh, logout]

---

## Endpoints

| Método | Rota | Descrição | Autenticação |
|--------|------|-----------|-------------|
| POST | `/auth/login` | Login do usuário | Não |
| POST | `/auth/register` | Cadastro do usuário | Não |
| GET | `/trails` | Listar trilhas | Sim |
| POST | `/trails` | Criar trilha | Sim |
| GET | `/trails/:id` | Obter detalhes da trilha | Sim |
| PUT | `/trails/:id` | Atualizar trilha | Sim |
| DELETE | `/trails/:id` | Deletar trilha | Sim |
| POST | `/trails/:id/like` | Curtir/descurtir trilha | Sim |
| POST | `/trails/:id/favorite` | Favoritar/desfavoritar trilha | Sim |
| GET | `/trails/:id/comments` | Listar comentários | Sim |
| POST | `/trails/:id/comments` | Adicionar comentário | Sim |

---

## Tipos Compartilhados

```typescript
// A ser definido — User, Trail, Module, Comment, etc.
```

---

## Tratamento de Erros

```typescript
// A ser documentado — formato padrão de erro da API, estratégia de tratamento de erros no frontend
```
