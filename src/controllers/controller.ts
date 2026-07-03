import { Request, Response } from "express";
import { BookModel } from "../models/book-model";
import * as BookServices from "../services/services"
import { bookSchema } from "../schemas/BookSchemas";

export const getBookController = async (  req: Request, res: Response) => {

    try {
           
        const response = await BookServices.getBookServices();

        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json(error)
    }
}

export const getBookByIdController = async (req: Request, res: Response) => {
   
    const rawId = req.params.id;

    //Converte o id em tipo numérico
    const id = parseInt(Array.isArray(rawId) ? rawId[0] : rawId, 10)

    if(isNaN(id)){
        return res.status(400).send({message: "ID inválido"});
    }

    try {
        const response = await BookServices.getBookByIdServices(id);

        if(!response){
            return res.status(404).send({message: "Livro não encontrado."})
        }

        return res.status(200).json(response);
    } catch (error) {
        
        console.error("Erro ao buscar livro, ", error)

        return res.status(500).json({ message: "Erro interno ao acessar os dados dos livros" });

    }
}

export const postBookController = async (req: Request, res: Response) => {

    //Valida o formato e os tipos de dados
    const parseResult = bookSchema.safeParse(req.body);

    if(!parseResult.success) {
        return res.status(400).json({
            message: "Dados inválidos",
            errors: parseResult.error.flatten().fieldErrors,
        })
    }

    try {
            const bookData: BookModel = parseResult.data as unknown as BookModel;
            const response = await BookServices.postBookService(bookData);

            return res.status(201).json(response);
    } catch (error) {
            console.error("erro ao buscar livro, ", error)

            return res.status(500).json({message: "Erro interno ao tentar adiconar o novo llvro."})
    }


}