import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componenti/login/login.component';
import { ListComponent } from './list/list.component';

import { WawawaComponent } from './componenti/wawawa/wawawa.component';
import { HeaderComponent } from './componenti/header/header.component';

import { ProductsComponent } from './products/products.component';


@NgModule({
  declarations: [
    AppComponent,


    WawawaComponent,
    HeaderComponent,

    LoginComponent,
    ProductsComponent,
    ListComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
