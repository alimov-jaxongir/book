import { BookModel } from "./book.model";

export interface CartModel{
    karzinka_id:     number;
    count:number,
    book:BookModel
}
