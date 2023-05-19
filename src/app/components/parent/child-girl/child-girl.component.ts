import {Component} from '@angular/core';
import {Action} from "../action.interface";
import {ActionToken} from "../../../shared/token/action.token";

@Component({
  selector: 'app-child-girl',
  templateUrl: './child-girl.component.html',
  styleUrls: ['./child-girl.component.scss'],
  providers: [{provide: ActionToken, useExisting: ChildGirlComponent}]
})
export class ChildGirlComponent implements Action {
  isLoading: boolean = false;
  text: string = 'i am hungry'
  url: string = 'assets/img/Girl.jpg'

  load() {
    console.log('Girl loaded')
    this.text = 'i am hungry'
  }

  onAction() {
    this.isLoading = true
    setTimeout(() => {
      this.isLoading = false
      this.text = 'I am full and a good girl'
      this.url = 'assets/img/11151910.jpg'
    }, 2000)
    setTimeout(() => {
      this.text = 'I m hungry'
      this.url = 'assets/img/Girl.jpg'
    }, 20000)
  }
}
