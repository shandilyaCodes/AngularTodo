import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthService } from '../service/hardcoded-auth.service';
import { BasicAuthService } from '../service/basic-auth.service';
import { typeWithParameters } from '@angular/compiler/src/render3/util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'ram'
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false

  constructor(private router:Router,
              private hardcodedAuthService : HardcodedAuthService,
              private basicAuthService : BasicAuthService) { }

    ngOnInit() {
  }

  handleLogin() {
    if(this.hardcodedAuthService.authenticate(this.username, this.password)) {
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }
  }

  handleBasicAuthLogin() {
    this.basicAuthService.executeAuthenticationService(this.username, this.password).subscribe(
      data => {
        console.log(data)
        this.router.navigate(['welcome', this.username])
        this.invalidLogin = false
      }, 
      error => {
        console.log(error)
        this.invalidLogin = true
      }
    )
  }
}