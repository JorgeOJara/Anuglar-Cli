import { Component, OnInit } from '@angular/core';
import {HttpClient , HttpHeaders} from '@angular/common/http';
@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {
  Url = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http:HttpClient) { }

  ngOnInit() {
    return this.http.get(this.Url)
  }

}
