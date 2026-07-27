# API Consumption

> Communication between the frontend and the Axion backend.

---

## Status

> **⚠️ Not yet implemented.** This document will be completed as the API layer is built.

---

## Base URL

```
NEXT_PUBLIC_API_URL=https://api.axion.gabrielenzo.com.br
```

Configure via `.env.local`:

```
NEXT_PUBLIC_API_URL=http://localhost:3001
```

---

## Authentication

[To be documented — JWT flow, token storage, refresh logic, logout]

---

## Endpoints

| Method | Route | Description | Auth |
|--------|-------|-------------|------|
| POST | `/auth/login` | User login | No |
| POST | `/auth/register` | User registration | No |
| GET | `/trails` | List trails | Yes |
| POST | `/trails` | Create trail | Yes |
| GET | `/trails/:id` | Get trail details | Yes |
| PUT | `/trails/:id` | Update trail | Yes |
| DELETE | `/trails/:id` | Delete trail | Yes |
| POST | `/trails/:id/like` | Like/unlike trail | Yes |
| POST | `/trails/:id/favorite` | Favorite/unfavorite trail | Yes |
| GET | `/trails/:id/comments` | List comments | Yes |
| POST | `/trails/:id/comments` | Add comment | Yes |

---

## Shared Types

```typescript
// To be defined — User, Trail, Module, Comment, etc.
```

---

## Error Handling

```typescript
// To be documented — standard API error shape, frontend error handling strategy
```
