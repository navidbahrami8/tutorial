import {Component} from '@angular/core';
import {Action} from "../action.interface";
import {ActionToken} from "../../../shared/action.token";

@Component({
  selector: 'app-child-boy',
  templateUrl: './child-boy.component.html',
  styleUrls: ['./child-boy.component.scss'],
  providers: [
    {
      provide: ActionToken,
      useExisting: ChildBoyComponent
    }
  ]
})
export class ChildBoyComponent implements Action {
  isLoading: boolean = false;
  text: string = 'I m hungry'
  url: string = 'assets/img/Boy.jpg'

  load() {
    this.text = 'I m hungry'
    console.log('Boy loaded')
  }

  onAction() {
    this.isLoading = true
    setTimeout(() => {
      this.text = 'I am full and a good boy'
      this.url =  'assets/img/18411155.jpg'
      this.isLoading = false
    }, 2000)
    setTimeout(() => {
      this.text = 'I m hungry'
      this.url =  'assets/img/Boy.jpg'
    }, 20000)
  }
}
