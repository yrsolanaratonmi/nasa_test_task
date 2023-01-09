import { Component } from '@angular/core';
import { FetchingNasaService } from '../fetching-nasa.service';

@Component({
  selector: 'app-nasa-pics',
  templateUrl: './nasa-pics.component.html',
  styleUrls: ['./nasa-pics.component.scss']
})
export class NasaPicsComponent{
  constructor (public fetchingNasaService: FetchingNasaService) {
  }

  public picsNumber: number = 6;

  public decrementMore () {
    this.picsNumber += 6
  }

}
