import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() message !: string
  @Output() notify = new EventEmitter(); 
  canClick : boolean = false;
  age:number = 19;
  data:any=[
    {title:"html" , discription:"element of design"},
    {title:"html" , discription:"element of design"},
    {title:"html" , discription:"element of design"},
    {title:"html" , discription:"element of design"},
  ]

  constructor() { 
    this.canClick 
  }

  ngOnInit(): void {
  }
  sendus(){
    this.notify.emit(this.data)
  }
}
