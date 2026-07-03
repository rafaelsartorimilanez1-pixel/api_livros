import fs from "fs/promises"
import { BookModel } from "../models/book-model"

export const getAllBooks = async (): Promise<BookModel[]> => {

    const data = await fs.readFile("./src/data/books.json", "utf-8")

    return JSON.parse(data)
}

export const getBookById = async (id: number) => {

    try {
        
        const rawData = await fs.readFile("./src/data/books.json", "utf-8")

        const data = JSON.parse(rawData);

        const findBook = data.find((book: { id: number }) => book.id === id)

        return findBook
    } catch (error) {
        
        console.error("Erro ao ler books.json erro: ", error)

        throw new Error("Não foi possivel acessar o dado dos livros")
    }

}

export const postBookRepository = async (data:BookModel): Promise<BookModel> => {

    try {

        const rawData = await fs.readFile("./src/data/books.json", "utf-8");

        const arrayData:BookModel[] = JSON.parse(rawData);

        arrayData.push(data);

        await fs.writeFile("./src/data/books.json", JSON.stringify(arrayData, null, 2));

        return data;
        
    } catch (error) {
        
        console.error("Erro ao adicionar o novo livro, erro: ", error);

        throw new Error("Nâo foi possivel adicionar o novo livro.")
    }
}