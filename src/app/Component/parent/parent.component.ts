import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  list : any = []
  constructor() { }

  ngOnInit(): void {
  }
  mydata(data:any){
    this.list = data;
    console.log(123,data)
  }
}
