import { Component, OnInit } from '@angular/core';
import {Content} from '../second/content';
@Component({
  selector: 'app-listed',
  templateUrl: './listed.component.html',
  styleUrls: ['./listed.component.css']
})
export class ListedComponent implements OnInit {

  constructor() { }

  content:Content[];
  ngOnInit() {
      this.content = [
        {
         id:1,
         title:'Hicks Wise',
         UserEmail:'janellray@gmail.com'
      },
      {
        id:2,
        title:'Staci Lambert',
        UserEmail:'savagerivas@'
     },
      {
      id:3,
      title:'Ferrell Wolf',
      UserEmail:'margaritacraft@gmail.com'
      },
      {
        id:4,
        title:'Earline Talley',
        UserEmail:'enidgolden@gmail.com'
     }
    ]
  }
}
