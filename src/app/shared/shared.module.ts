import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownDirective } from './dropdown.directive';
import { AlertComponent } from './alert/alert.component';
import { PlaceholderDirective } from './placeholder/placeholder.directive';

@NgModule({
  declarations: [
    DropdownDirective,
    AlertComponent,
    PlaceholderDirective
  ],
  exports: [
    CommonModule,
    DropdownDirective,
    AlertComponent
  ],
  entryComponents: [
    AlertComponent
  ]
})
export class SharedModule { }
