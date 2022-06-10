import { Component } from '@angular/core';
import {TranslocoService} from "@ngneat/transloco";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private translocoService: TranslocoService) { }

  public changeLanguageTo(lang: string) {
    //console.log(this.translocoService.setActiveLang())
    this.translocoService.setActiveLang(lang);
  }
}
