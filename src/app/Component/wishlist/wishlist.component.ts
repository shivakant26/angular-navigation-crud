import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  
  item:any;
  list:any=[]
  
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.item = (localStorage.getItem('data'))
    let data = JSON.parse(this.item)
    this.list = data
  }
  delete(i:any){
    this.list.splice(i,1);
  }
  edit(i:any){
    this.router.navigate([`/addwish/${i}`])
  }

}
