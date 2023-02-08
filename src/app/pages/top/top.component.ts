import {Component} from '@angular/core';
import {HieroglyphConvertService} from "./services/hieroglyph-convert.service";

@Component({
  selector: 'hieroglyph-converter-top',
  templateUrl: 'top.component.html'
})

export class TopComponent {
  public text = '';
  public updatedText = '';
  private convertType = 'hieroglyph';

  constructor(private readonly hieroglyphConvertService: HieroglyphConvertService) {
  }

  public updateText(event: string) {
    this.text = event;
  }
  public onConvertButtonClick() {
    if (this.convertType === 'alphabet') {
      this.updatedText = this.hieroglyphConvertService.toAlphabet(this.text);
      return;
    }
    this.updatedText = this.hieroglyphConvertService.toHieroglyph(this.text);
  }

  public onChangeType(event: Event) {
    this.convertType = (event.target as HTMLInputElement).id;
  }
}