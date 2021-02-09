import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {WarningComponent} from "./warning/warning.component";
import { SuccessComponent } from './success/success.component';


@NgModule({
  declarations: [
    AppComponent,
    WarningComponent,
    SuccessComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
