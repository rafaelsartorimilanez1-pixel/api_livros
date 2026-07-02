# 📚 Book Catalog API

API REST simples para gerenciamento de um catálogo de livros, construída com **Node.js**, **Express** e **TypeScript**, utilizando um **arquivo JSON** como camada de persistência de dados (sem banco de dados).

Projeto criado para fins de estudo e prática de desenvolvimento de APIs REST.

## 🚀 Tecnologias

- Node.js
- Express
- TypeScript
- Zod (validação de dados)
- fs/promises (leitura e escrita do JSON)

## 📁 Estrutura do projeto

```
src/
├── data/
│   └── books.json
├── models/
│   └── Book.ts
├── repositories/
│   └── BookRepository.ts
├── services/
│   └── BookService.ts
├── controllers/
│   └── BookController.ts
├── routes/
│   └── bookRoutes.ts
├── middlewares/
│   └── errorHandler.ts
└── server.ts
```

## ⚙️ Como rodar o projeto

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd book-catalog-api
```

2. Instale as dependências:
```bash
npm install
```

3. Rode em modo de desenvolvimento:
```bash
npm run dev
```

4. A API estará disponível em:
```
http://localhost:3000
```

## 📌 Endpoints

| Método | Rota                | Descrição                          |
|--------|---------------------|-------------------------------------|
| GET    | `/books`             | Lista todos os livros               |
| GET    | `/books/:id`          | Busca um livro pelo ID              |
| POST   | `/books`              | Cria um novo livro                  |
| PUT    | `/books/:id`          | Atualiza um livro existente         |
| DELETE | `/books/:id`          | Remove um livro                     |
| PATCH  | `/books/:id/status`   | Atualiza o status do livro          |

## 📝 Exemplo de livro (JSON)

```json
{
  "id": 1,
  "title": "1984",
  "author": "George Orwell",
  "genre": "Ficção",
  "year": 1949,
  "pages": 328,
  "status": "disponível"
}
```

## 🧪 Scripts disponíveis

```bash
npm run dev     # roda o projeto em modo desenvolvimento (com reload automático)
npm run build   # compila o TypeScript para JavaScript
npm start       # roda a versão compilada (produção)
```

## 📌 Status do projeto

🚧 Em desenvolvimento — projeto criado para fins de aprendizado.

## 📄 Licença

Este projeto é livre para uso educacional.