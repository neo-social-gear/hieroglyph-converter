import {Component} from '@angular/core';

@Component({
  selector: 'hieroglyph-converter-top',
  templateUrl: 'top.component.html'
})

export class TopComponent {
  public text = '';
  public updatedText = '';

  public updateText(event: string) {
    this.text = event;
  }
  public onConvertButtonClick() {
    this.updatedText = this.text;
  }
}