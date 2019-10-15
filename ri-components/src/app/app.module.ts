import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WawawaComponent } from './componenti/wawawa/wawawa.component';
import { HeaderComponent } from './componenti/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    WawawaComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
