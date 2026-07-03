import {z} from 'zod';

export const bookSchema = z.object({
  id: z.number().int().positive().optional(),
  title: z.string().min(1, "Título é obrigatório"),
  author: z.string().min(1, "Autor é obrigatório"),
  genre: z.string().min(1, "Gênero é obrigatório"),
  year: z.number().int().positive("Ano deve ser um número positivo"),
  pages: z.number().int().positive("Número de páginas deve ser positivo"),
  status: z.enum(["disponível", "emprestado"]).optional(),
});

export type BookInput = z.infer<typeof bookSchema>;