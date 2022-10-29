import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddwishComponent } from './Component/addwish/addwish.component';
import { HomeComponent } from './Component/home/home.component';
import { LoginComponent } from './Component/login/login.component';
import { ParentComponent } from './Component/parent/parent.component';
import { RegisterComponent } from './Component/register/register.component';
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
  },
  {
    path:"register",
    component:RegisterComponent
  },
  {
    path:"login",
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
