import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'hieroglyph-converter-text-area[isDisabled][text][labelText]',
  templateUrl: 'text-area.component.html'
})

export class TextAreaComponent {
  @Input() public text = '';
  @Input() public labelText = '';
  @Input() public isDisabled = false;
  @Output() public updatedText: EventEmitter<string> = new EventEmitter();

  public changeText(updatedText: string) {
    this.updatedText.emit(updatedText);
  }
}