import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BookModel } from '../../models/book.model';
import { books, categories } from './data';
import { CategoryModel } from '../../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  $books=new BehaviorSubject<BookModel[]>(books)
  $categories=new BehaviorSubject<CategoryModel[]>(categories)
  
  singleProducts(id:number){
    let book
    let books=JSON.parse(localStorage.getItem("books") as string)
      book=books.filter((res:BookModel)=>res.id==id)[0]      
    return book
  }
  addBook(book:BookModel){
    let books=JSON.parse(localStorage.getItem("books") as string)
    books.push({...book,id:books.length})
    localStorage.setItem("books",JSON.stringify(books))
  }
  deleteBook(id:number){
    let books=JSON.parse(localStorage.getItem("books") as string)
    const indexToDelete = books.findIndex((book:BookModel) => book.id === id);
    books.splice(indexToDelete, 1);
   localStorage.setItem("books",JSON.stringify(books))
  }
  updateBook(updatedBook: BookModel): void {
    let books=JSON.parse(localStorage.getItem("books") as string)
    const indexToUpdate = books.findIndex((book:BookModel) => book.id === updatedBook.id);
      books[indexToUpdate] = { ...books[indexToUpdate], ...updatedBook }
      localStorage.setItem("books",JSON.stringify(books))
}
}
