import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderModule } from './components/headers/header.module';
import {NameModule} from "./pages/top/top.component.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HeaderModule, NameModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
