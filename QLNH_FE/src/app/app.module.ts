import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DishComponent } from './dish/dish.component';
import { MenuComponent } from './menu/menu.component';
import { MenuListComponent } from './menu/menu-list/menu-list.component';
import { AddUpdateMenuComponent } from './menu/add-update-menu/add-update-menu.component';
import { DishListComponent } from './dish/dish-list/dish-list.component';
import { AddUpdateDishComponent } from './dish/add-update-dish/add-update-dish.component';

import { SharedService } from './shared.service';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DishComponent,
    MenuComponent,
    MenuListComponent,
    AddUpdateMenuComponent,
    DishListComponent,
    AddUpdateDishComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
