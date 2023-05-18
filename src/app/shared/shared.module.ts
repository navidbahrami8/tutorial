import {NgModule} from '@angular/core';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

const Imports = [
  FlexLayoutModule,
  MatButtonModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatCardModule
]

@NgModule({
  declarations: [
  ],
  imports: Imports,
  providers: [],
  exports: Imports
})
export class SharedModule {
}
