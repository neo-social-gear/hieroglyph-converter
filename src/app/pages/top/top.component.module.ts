import {NgModule} from '@angular/core';

import {TopComponent} from './top.component';
import {TextAreaComponent} from "./components/text-area/text-area.component";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {HieroglyphConvertService} from "./services/hieroglyph-convert.service";

@NgModule({
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [
    TopComponent
  ],
  declarations: [TopComponent, TextAreaComponent],
  providers: [HieroglyphConvertService],
})
export class NameModule {
}
