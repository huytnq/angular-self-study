import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { DishComponent } from './dish/dish.component';

const routes: Routes = [
  {path: 'menu', component:MenuComponent},
  {path: 'dish', component:DishComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
