import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  name:String = 'Andrea';
 
  constructor() {  }

  ngOnInit() {
    
  }
  username:String;
  email:String;
  //displayer
  show:boolean = false;

  send(emails,name){
    this.username = name;
    this.email  = emails;
    this.show = true
  }
  close(){
    this.show = false;
  }

}
