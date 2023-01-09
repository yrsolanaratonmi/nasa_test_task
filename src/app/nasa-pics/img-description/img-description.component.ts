import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-img-description',
    templateUrl: './img-description.component.html',
    styleUrls: ['./img-description.component.scss'],
})
export class ImgDescriptionComponent {
  @Input() item: any = '';
  public aa() {
      console.log(1243);
  }
}
