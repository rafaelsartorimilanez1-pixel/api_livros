# Express + TypeScript API Template

Um template para criação de APIs REST utilizando **Express**, **TypeScript** e **Zod**, com uma estrutura simples, organizada e pronta para servir como base em novos projetos.

## 🚀 Tecnologias

* Node.js
* Express
* TypeScript
* Zod

## 📁 Estrutura do Projeto

```text
src/
├── controllers/
├── middlewares/
├── routes/
├── schemas/
├── services/
├── utils/
├── app.ts
└── server.ts
```

> A estrutura pode ser adaptada conforme a necessidade do projeto.

## ⚙️ Pré-requisitos

* Node.js 18 ou superior
* npm ou yarn

## 📦 Instalação

Clone o repositório:

```bash
git clone <url-do-repositorio>
```

Acesse a pasta do projeto:

```bash
cd nome-do-projeto
```

Instale as dependências:

```bash
npm install
```

## ▶️ Executando o projeto

Modo de desenvolvimento:

```bash
npm run dev
```

Modo de produção:

```bash
npm run build
npm start
```

## ✅ Validação de Dados

O projeto utiliza **Zod** para validar dados de entrada, permitindo criar schemas reutilizáveis para requisições da API.

Exemplo:

```ts
import { z } from "zod";

export const createUserSchema = z.object({
  name: z.string().min(3),
  email: z.email(),
  password: z.string().min(6),
});
```

## 📌 Objetivo

Este template foi criado para agilizar o desenvolvimento de APIs REST utilizando uma base organizada, tipada e de fácil manutenção, reduzindo o tempo gasto com configurações iniciais.

## 💡 Personalização

Você pode utilizar este template como ponto de partida para adicionar recursos como:

* Autenticação com JWT
* Banco de dados (PostgreSQL, MySQL, MongoDB, etc.)
* ORM (Prisma, TypeORM, Drizzle)
* Logs
* Testes automatizados
* Docker
* Documentação com Swagger/OpenAPI

## 📄 Licença

Este projeto está licenciado sob a licença MIT. Sinta-se à vontade para utilizar, modificar e distribuir.
