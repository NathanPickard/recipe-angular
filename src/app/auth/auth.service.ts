import { HttpClient } from '@angular/common/http';
// import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
// import { Store } from '@ngrx/store';

// import * as fromApp from '../store/app.reducers';
// import * as AuthActions from './store/auth.actions';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  // token: string;

  constructor(private http: HttpClient,
    private router: Router/*, private store: Store<fromApp.AppState>*/) { }

  signup(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBqi90f9DrkzzpaXyCTtUxkoVTurQmMyPo',
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    )
      .pipe(catchError(errorRes => {
        let errorMessage = 'An unknown error occurred!';
        if (!errorRes.error || !errorRes.error.error) {
          return throwError(errorMessage);
        }
        switch (errorRes.error.error.message) {
          case 'EMAIL_EXISTS':
            errorMessage = 'This email exists already';
        }
        return throwError(errorMessage);
      }));
  }

  login(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBqi90f9DrkzzpaXyCTtUxkoVTurQmMyPo',
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    );
  }

  // signupUser(email: string, password: string) {
  //   firebase.auth().createUserWithEmailAndPassword(email, password)
  //     .then(
  //       user => {
  //         // this.store.dispatch(new AuthActions.Signup());
  //         firebase.auth().currentUser.getIdToken()
  //           .then(
  //             (token: string) => {
  //               // this.store.dispatch(new AuthActions.SetToken(token));
  //             }
  //           )
  //       }
  //     )
  //     .catch(
  //       error => console.log(error)
  //     )
  // }

  // signinUser(email: string, password: string) {
  //   firebase.auth().signInWithEmailAndPassword(email, password)
  //     .then(
  //       response => {
  //         // this.store.dispatch(new AuthActions.Signin());
  //         this.router.navigate(['/']);
  //         firebase.auth().currentUser.getIdToken()
  //           .then(
  //             (token: string) => {
  //               // this.store.dispatch(new AuthActions.SetToken(token));
  //             }
  //           )
  //       }
  //     )
  //     .catch(
  //       error => console.log(error)
  //     );
  // }

  // logout() {
  //   firebase.auth().signOut();
  //   // this.store.dispatch(new AuthActions.Logout());
  //   // this.token = null;
  // }

  // getToken() {
  //   firebase.auth().currentUser.getIdToken()
  //     .then(
  //       (token: string) => this.token = token
  //     );
  //   return this.token;
  // }

  // isAuthenticated() {
  //   return this.token != null;
  // }
}
