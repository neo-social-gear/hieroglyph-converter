import {NgModule} from '@angular/core';

import {TopComponent} from './top.component';
import {TextAreaComponent} from "./components/text-area/text-area.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    FormsModule
  ],
  exports: [
    TopComponent
  ],
  declarations: [TopComponent, TextAreaComponent],
  providers: [],
})
export class NameModule {
}
