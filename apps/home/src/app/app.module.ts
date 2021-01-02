import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { ButtonModule } from "@sernanp/ui"

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
