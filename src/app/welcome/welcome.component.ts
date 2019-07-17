import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TestDataService } from '../service/data/test-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  welcomeMessage = 'Welcome to the App!'
  name = ''

  constructor(private route:ActivatedRoute,
              private testDataService : TestDataService) { }

  ngOnInit() {
    this.name = this.route.snapshot.params['name']
  }

  getTestData() {
    this.testDataService.executeTestService().subscribe(
      response => this.handleSuccessfulResponse(response)
    )
    console.log("Last line from the get data method")
  }

  handleSuccessfulResponse(response) {
    console.log(response.project);
  }

}
