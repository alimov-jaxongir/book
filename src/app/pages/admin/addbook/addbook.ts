import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../shops/services/products/product.service';
import { BookModel } from '../../shops/models/book.model';
import { Subject } from 'rxjs';
import { CategoryModel } from '../../shops/models/category.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'addbook',
  templateUrl: './addbook.html',
  styleUrls: ['./addbook.scss']
})

/**
 * Account Wishlist Component
 */
export class AddBookComponent implements OnInit {
  bookForm: FormGroup;
  categories$=new Subject<CategoryModel[]>()
  constructor(private formBuilder: FormBuilder, private bookService: ProductService) {
    this.bookForm = this.formBuilder.group({
      category_id: [0, Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: [0, Validators.required],
      promotion_price: [0, Validators.required],
      image: ['', Validators.required],
      rate: [0, Validators.required],
    });
  }

  onSubmit(): void {
    if (this.bookForm.valid) {
      const newBook: BookModel = this.bookForm.value;
      this.bookService.addBook(newBook);
      const Toast:any = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 5000,
        icon:"success"
      })
      Toast.fire({
        type: "success",
        title: `Kitob qo'shildi`
      });
      this.bookForm.reset();
    }
    else{
      const Toast:any = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 5000,
        icon:"error"
      })
      Toast.fire({
        type: "error",
        title: `Formani to'liq to'ldiring`
      });
    }
  }
  onFileSelected(event:any) {
    const file = event.target.files[0];
    const allowedFormats = ['image/jpeg', 'image/png'];

    if (allowedFormats.includes(file.type)) {
      this.encodeImageBase64(file);
    } else {
      alert('Faqat JPEG va PNG formatidagi rasmlarni tanlang');
    }
  }

  encodeImageBase64(file:any) {
    const reader = new FileReader();
    reader.onloadend = () => {
      this.bookForm.patchValue({
        image: reader.result, 
      });
    };
    reader.readAsDataURL(file);
  }

  ngOnInit(): void {
    this.categories$=this.bookService.$categories
  }

}
