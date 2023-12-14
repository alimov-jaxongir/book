import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({ providedIn: 'root' })
export class LanguageService {

  public languages: string[] = ['uz', 'ru'];

  constructor(public translate: TranslateService, private cookieService: CookieService) {
    const lang = localStorage.getItem('lang') as string
    if (lang && lang.length > 0) {
      this.cookieService.set('lang', lang)
    }
    else {
      this.cookieService.set('lang', 'uz');
      localStorage.setItem('lang', 'uz')
      this.translate.use('uz')

    }
    let browserLang: any;
    /***
     * cookie Language Get
    */
    this.translate.addLangs(this.languages);
    if (this.cookieService.check('lang')) {
      browserLang = this.cookieService.get('lang');
    }
    else {
      browserLang = translate.getBrowserLang();
    }
    translate.use(browserLang.match(/uz|ru/) ? browserLang : 'uz');
  }

  /***
   * Cookie Language set
   */
  public setLanguage(lang: any) {
    window.location.reload()
    localStorage.setItem('lang', lang)
    this.translate.use(lang);
    this.cookieService.set('lang', lang);
  }

}
