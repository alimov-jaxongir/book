import { Component } from '@angular/core';
import { books } from './pages/shops/services/products/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'books';

  constructor(){
    const lang = localStorage.getItem('lang') as string
    if (lang && lang.length > 0) {
      localStorage.setItem('lang', lang)
    }
    else {
      localStorage.setItem('lang', 'uz')
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if(!localStorage.getItem("books") || JSON.parse(localStorage.getItem("books") as string).length<=0){
      localStorage.setItem("books",JSON.stringify(books))
    }
  }
}
