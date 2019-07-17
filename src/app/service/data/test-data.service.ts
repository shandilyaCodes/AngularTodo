import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class ProjectBean {
  constructor(public project:string) {}
}

@Injectable({
  providedIn: 'root'
})
export class TestDataService {

  constructor(private http:HttpClient) { }

  executeTestService() {
    return this.http.get<ProjectBean>('http://localhost:9099/myPM/enterprise/accountProfile/getProfile/28286')
  } 
}
