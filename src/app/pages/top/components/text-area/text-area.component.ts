import {Component} from '@angular/core';

@Component({
  selector: 'hieroglyph-converter-text-area',
  templateUrl: 'text-area.component.html'
})

export class TextAreaComponent {
  public text = '';

  public onConvertButtonClick(){
    console.log(this.text);
  }
}