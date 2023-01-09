import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FetchingNasaService } from '../fetching-nasa.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.scss']
})
export class UserInputComponent {

  constructor (private fetchingNasaService: FetchingNasaService) {}

  public optinonsForm: FormGroup = new FormGroup({
    camera: new FormControl(''),
    rover: new FormControl(''),
    marsDay: new FormControl('')
  })

  public sendOptions () {
    this.fetchingNasaService.fetchData(
      this.optinonsForm.controls['rover'].value,
      this.optinonsForm.controls['camera'].value,
      this.optinonsForm.controls['marsDay'].value
    )
  }
}
