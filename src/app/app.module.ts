import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { OutputComponent } from './output/output.component';
import { ButtonBarComponent } from './button-bar/button-bar.component';
import {FormatPipe} from './FormatPipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OutputComponent,
    ButtonBarComponent,
    FormatPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
