import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ParentComponent} from './parent.component';
import {ChildBoyComponent} from './child-boy/child-boy.component';
import {ChildGirlComponent} from './child-girl/child-girl.component';
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  declarations: [
    ParentComponent,
    ChildBoyComponent,
    ChildGirlComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ParentComponent,
    ChildBoyComponent,
    ChildGirlComponent]
})
export class ParentModule {
}
