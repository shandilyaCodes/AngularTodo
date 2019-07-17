import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  errorMessage = 'Sorry we couldn not find the Page you are looking for! You are lost in space now'

  constructor() { }

  ngOnInit() {
  }

}
