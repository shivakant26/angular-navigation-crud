import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/Modal/user';

@Component({
  selector: 'app-addwish',
  templateUrl: './addwish.component.html',
  styleUrls: ['./addwish.component.css']
})
export class AddwishComponent implements OnInit {
  model : User = {}
  data:any = []
  list:any
  id:any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log("editable id",this.id)
    this.list = localStorage.getItem("data");
    this.data = JSON.parse(this.list)
    let current_object = this.data[this.id]
    console.log("object",current_object)
    if(this.id){
      this.model={
       title:current_object.title,
       discription:current_object.discription
      }
    }
  }
  addwish(){
    if(this.id){
      this.data.splice(this.id,1,this.model)
    }else{
      this.data.push(this.model)
      this.model={title:"",discription:""}
    }
    localStorage.setItem("data",JSON.stringify(this.data))
    console.log(123,this.data)
  }
}
