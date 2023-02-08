import {Component} from '@angular/core';
import {HieroglyphConvertService} from "./services/hieroglyph-convert.service";

@Component({
  selector: 'hieroglyph-converter-top',
  templateUrl: 'top.component.html'
})

export class TopComponent {
  public text = '';
  public updatedText = '';

  constructor(private readonly hieroglyphConvertService: HieroglyphConvertService) {
  }

  public updateText(event: string) {
    this.text = event;
  }
  public onConvertButtonClick() {
    this.updatedText = this.hieroglyphConvertService.toHieroglyph(this.text);
  }
}