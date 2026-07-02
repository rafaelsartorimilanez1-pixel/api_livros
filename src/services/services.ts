import { Request, Response } from "express";
import * as BookRepository from '../repository/repository'
import { BookModel } from "../models/book-model";


export const getBookServices = async (): Promise<BookModel[]> => {

        const books = await BookRepository.getAllBooks();

        return books
   
}

export const getBookByIdServices = async (id: number) : Promise<BookModel | null> => {

        const book = await BookRepository.getBookById(id)

        return book
}