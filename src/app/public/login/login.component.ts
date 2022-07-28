import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import { GoogleAuthProvider } from 'firebase/auth';
import {SocialUserData} from "../../models/coustom-data-type";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    public afAuth: AngularFireAuth
  ) { }



  ngOnInit(): void {
  }

  googleAuth() {
    return this.authLogin(new GoogleAuthProvider());
  }
  authLogin(provider: any) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        let profile: any = result.additionalUserInfo?.profile;
        console.log(profile);
        if (profile?.email?.endsWith('@grazitti.com')) {
          alert('valid email');
        } else {
          alert('not valid user');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

}
