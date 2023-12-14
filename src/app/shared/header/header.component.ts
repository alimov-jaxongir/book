import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FormGroup, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { LanguageService } from 'src/app/services/language.service';
import { TranslateService } from '@ngx-translate/core';
import { AccountService, ResponseModel } from 'src/app/pages/account/account.service';
import Swal from 'sweetalert2';
import { CartModel,  } from 'src/app/pages/shops/models/cart.model';
import { CategoryModel,  } from 'src/app/pages/shops/models/category.model';
import { Subject, debounceTime, distinctUntilChanged, pipe, takeUntil } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

/**
 * Header Component
 */
export class HeaderComponent implements OnInit, OnChanges,OnDestroy {

  modalRef: NgbModalRef | undefined
  passRef:NgbModalRef | undefined
  user: string | null = ''
  token: string | null = ''
  showNavigationArrows = true;
  showNavigationIndicators: any;
  category:CategoryModel[]=[]
  loginPassfield!: boolean;
  public isCollapsed = true;
  cartDatas: CartModel[] = [];
  subTotal = 0;
  Total: any;
  loginForm!: FormGroup;
  inputForm!:UntypedFormGroup
  submitted = false;
  //  Signup form
  signupPassfield!: boolean;
  signupCPassfield!: boolean;
  SignupForm!: UntypedFormGroup;
  submit = false;

  // Language set
  searchForm!: FormGroup;
  changeForm!:UntypedFormGroup
  flagvalue: any;
  selectedLanguage!: string;
  flag: any;
  countryName: any;
  cookieValue: any;
  valueset: any;
  @Input() check!: boolean;
  @Input() cartCheck!: boolean;
  @Output() cartRemoved: EventEmitter<number> = new EventEmitter<number>();
  private unsubscribe$: Subject<void> = new Subject<void>();
  private destroy$: Subject<void> = new Subject<void>();

  @ViewChild('toggleFirstModal') toggleFirstModal: any;
  constructor(private router: Router, private modalService: NgbModal,
    private formBuilder: UntypedFormBuilder, public languageService: LanguageService,
    public _cookiesService: CookieService, public translate: TranslateService
    , private userService: AccountService, 
    private activatedRoute: ActivatedRoute
   ) {
  }

  loginUser() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.userService.loginUser(this.loginForm).pipe(takeUntil(this.unsubscribe$)).subscribe((val:ResponseModel) => {
      console.log(val);
      localStorage.setItem('token', val.token);
      localStorage.setItem('username', val.firstName)
      localStorage.setItem('user_id', (val.id).toString())
      this.user=val.firstName
      if(val.username=='kminchelle'){
        localStorage.setItem("role",'admin')
      }
      this.modalRef?.close()
      window.location.reload()
  },
   ( error:any)=>{
      if(error.status==400){
        const Toast:any = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 5000,
          icon:"error"
        })
        Toast.fire({
            type: "error",
            title: `Login yoki parol xato`
        });
      }
    }
    )
  }

  onCart() {
    this.token = localStorage.getItem('token')
    if (this.token) {
      this.router.navigate(['shop/cart'])
    }
    else {
      this.modalRef = this.modalService.open(this.toggleFirstModal, { size: 'md', centered: true });
    }
  }
  onWish() {
    this.token = localStorage.getItem('token')
    if (this.token) {
      this.router.navigate(['/account/wishlist'])
    }
    else {
      this.modalRef = this.modalService.open(this.toggleFirstModal, { size: 'md', centered: true });
    }
  }
  ngOnInit(): void {
    this.token = localStorage.getItem('token')

      this.cartDatas = JSON.parse(localStorage.getItem("carts") as string)

    this.user = localStorage.getItem('username')
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required,Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
    this.SignupForm = this.formBuilder.group({
      number: ['', [Validators.required,  Validators.pattern(/^[0-9]*$/), Validators.minLength(12), Validators.maxLength(12)]],
      first_name: ['', [Validators.required, Validators.minLength(3)]],
      last_name: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
     
    this.searchForm = this.formBuilder.group({
      searchTerm: ['']
    });
    this.searchForm.get("searchTerm")?.valueChanges.pipe(
      debounceTime(1000),
      distinctUntilChanged()
    ).subscribe(val=>{
      console.log(val);
      this.router.navigate(['/home'], {
        relativeTo: this.activatedRoute,
        queryParams: { search: val },
      });
      window.scrollTo({ top: 500, behavior: 'smooth' });

    })

    this.cookieValue = this._cookiesService.get('lang');
    const val = this.listLang.filter(x => x.lang === this.cookieValue);
    this.countryName = val.map(element => element.text);
    if (val.length === 0) {
      if (this.flagvalue === undefined) { this.valueset = 'assets/img/flags/uz.jpg'; }
    } else {
      this.flagvalue = val.map(element => element.flag);
    }
    this.selectedLanguage =val.map(ele=>ele.language)[0]

   
  }


  calculatetotal(total: any) {
    this.subTotal = 0;
    this.cartDatas?.forEach((element: any) => {
      this.subTotal += parseFloat(element.price) * parseFloat(element.count)
    });
    return this.subTotal.toFixed(2)
  }


  windowScroll() {
    const navbar = document.querySelector('.navbar-sticky');
    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
      navbar?.classList.add('navbar-stuck');
      document.querySelector(".btn-scroll-top")?.classList.add('show');
    }
    else {
      navbar?.classList.remove('navbar-stuck');
      document.querySelector(".btn-scroll-top")?.classList.remove('show');
    }
  }

  toggleModal(staticDataModal: any) {
    this.submitted=false
    this.modalRef = this.modalService.open(staticDataModal, { size: 'md', centered: true });
  }


  //------------------ Sign In Form ---------------------//
  // convenience getter for easy access to form fields


  toggleLoginPassField() {
    this.loginPassfield = !this.loginPassfield;
  }



  togglesignupPassfield() {
    this.signupPassfield = !this.signupPassfield;
  }


  toggleloginPassfield() {
    this.loginPassfield = !this.loginPassfield;
  }

  menuShow() {
    document.querySelector('.navbar-stuck-menu')?.classList.toggle('show');
  }


 


  sidebar() {
    document.getElementById('shop-sidebar')?.classList.add('show');
  }
  navigateToShopWithHiddenQueryParam(subcat:any) {
    const queryParams = subcat;    
     const encodedParams = new URLSearchParams(queryParams)
    this.router.navigate(['/shop/grid-ls'], { queryParams: { data: encodedParams }
    });;
  }

  listLang = [
    { text: 'Uzbek', flag: 'assets/img/flags/uz.jpg', lang: 'uz', language: 'Uzb' },
    { text: 'Rus', flag: 'assets/img/flags/ru.png', lang: 'ru', language: 'Rus' },
  ];

  /***
   * Language Value Set
   */
  setLanguage(text: string, lang: string, flag: string, language: string) {
    this.countryName = text;
    this.flagvalue = flag;
    this.cookieValue = lang;
    this.selectedLanguage = language
    this.languageService.setLanguage(lang);
  }

  
 
  

  ngOnChanges(changes: SimpleChanges) {
    if (changes) {
      if (this.check) {
        this.submitted=false
        this.modalRef = this.modalService.open(this.toggleFirstModal, { size: 'md', centered: true });
      }
      if(this.cartCheck){
        this.cartDatas = JSON.parse(localStorage.getItem("carts") as string)
      }
    }
  }

ngOnDestroy(): void {
  this.unsubscribe$.next();
  this.unsubscribe$.complete();
  this.destroy$.next();
  this.destroy$.complete();
}

}
