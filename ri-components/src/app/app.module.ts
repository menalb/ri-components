import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componenti/login/login.component';
import { TodolistComponent } from './componenti/todolist/todolist.component';
import { HeaderComponent } from './componenti/header/header.component';
import { ListComponent } from './list/list.component';

import { WawawaComponent } from './componenti/wawawa/wawawa.component';


import { ProductsComponent } from './products/products.component';
import { ChecklistComponent } from './componenti/checklist/checklist.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TodolistComponent,


    WawawaComponent,
    HeaderComponent,

    LoginComponent,
    ProductsComponent,
    ListComponent,
    ChecklistComponent



  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
