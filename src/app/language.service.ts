import { Injectable } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  public languages: string[] = ['en', 'el'];

  constructor(public translate: TranslateService) {
    let browserLang: string = 'el';
    this.translate.addLangs(this.languages);
    // if (this.cookieService.check('lang')) {
    //   browserLang = this.cookieService.get('lang');
    // }
    // else {
    //   this.setLanguage('en');
    //   browserLang = this.getLanguage();
    // }

    translate.use(browserLang.match(/en|el/) ? browserLang : 'el');
  }

  private getLanguage() : string {
    if (this.translate.getBrowserLang() !== undefined) {
      return <string>this.translate.getBrowserLang();
    }
    return 'el';
  }

  public setLanguage(lang: string) {
    this.translate.use(lang);
    // this.cookieService.set('lang', lang);
  }
}
