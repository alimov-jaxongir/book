import { Component} from '@angular/core';
import { Subject } from 'rxjs';
import { ProductService } from 'src/app/pages/shops/services/products/product.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

/**
 * Footer Component
 */
export class FooterComponent {



  private destroy$: Subject<void> = new Subject<void>();

  constructor(private categoryService:ProductService) { }





}
