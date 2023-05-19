import {Component, ContentChild, OnInit} from '@angular/core';
import {ChildGirlComponent} from "./child-girl/child-girl.component";
import {ChildBoyComponent} from "./child-boy/child-boy.component";
import {Action} from "./action.interface";
import {ActionToken} from "../../shared/token/action.token";

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit, Action {
  isLoading: boolean = false;

  @ContentChild(ActionToken)
  action!: Action


  ngOnInit() {
    this.action?.load()
  }

  load() {
    console.log('Parent loaded')
  }

  onAction() {
    this.action.onAction()
    this.isLoading = true
    setTimeout(()=>{
      this.isLoading = false
    }, 2000)
  }
}
