import { Component, OnInit } from '@angular/core';
import { faCoffee, } from "@fortawesome/free-solid-svg-icons";
import {ActivatedRoute, Route, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  faCoffee = faCoffee;
  //faGoogle = fagoogle;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onSignIn() {
    console.log("Signin Button")
    this.router.navigate(['/dashboard'])
  }
}
