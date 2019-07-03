import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DropdownDirective } from "./dropdown.directive";
import { AlertComponent } from "./alert/alert.component";

@NgModule({
  declarations: [
    DropdownDirective,
    AlertComponent
  ],
  exports: [
    CommonModule,
    DropdownDirective,
    AlertComponent
  ]
})
export class SharedModule { }
