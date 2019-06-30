import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AuthComponent } from "./auth.component";
import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";
import { AuthRoutingModule } from "./auth-routing.module";

@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent,
    AuthComponent
  ],
  imports: [
    FormsModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
