import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {LanguageService} from "./language.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'flyer';
  displayLang= 'el';
  cookieValue: any;
  flagvalue: any;
  countryName: any;
  valueset: any;
  listLang: any = [
    { text: 'English', short: 'EN', flag: 'assets/img/flags/en.png', lang: 'en' },
    { text: 'Ελληνικά', short: 'GR',  flag: 'assets/img/flags/el.png', lang: 'el' },
  ];

  constructor(public translateSrv: TranslateService,
              public languageService: LanguageService) {
    translateSrv.addLangs(['el', 'en']);
    translateSrv.setDefaultLang('el');
    translateSrv.use('en')
  }

  setLanguage(text: string, lang: string, flag: string) {
    this.countryName = text;
    this.flagvalue = flag;
    this.cookieValue = lang;
    this.displayLang = lang;
    this.languageService.setLanguage(lang);
  }
}
