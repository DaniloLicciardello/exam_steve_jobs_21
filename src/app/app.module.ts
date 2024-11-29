import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N, it_IT } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import it from '@angular/common/locales/it';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { CardComponent } from './components/card/card.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

registerLocaleData(it);

@NgModule({
  declarations: [AppComponent, CardComponent, NavbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzLayoutModule,
    NzMenuModule,
    NzDropDownModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: it_IT }],
  bootstrap: [AppComponent],
})
export class AppModule {}
