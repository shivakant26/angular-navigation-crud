import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddwishComponent } from './Component/addwish/addwish.component';
import { HomeComponent } from './Component/home/home.component';
import { ParentComponent } from './Component/parent/parent.component';
import { WishlistComponent } from './Component/wishlist/wishlist.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"addwish",
    component:AddwishComponent
  },
  {
    path:"addwish/:id",
    component:AddwishComponent
  },
  {
    path:"wishlist",
    component:WishlistComponent
  },
  {
    path:"parent",
    component:ParentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
