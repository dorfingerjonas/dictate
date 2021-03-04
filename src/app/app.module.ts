import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { OutputComponent } from './output/output.component';
import { ButtonBarComponent } from './button-bar/button-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OutputComponent,
    ButtonBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
