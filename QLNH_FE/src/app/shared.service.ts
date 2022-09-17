import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl = "http://localhost:5012/api";
  readonly PhotoUrl = "http://localhost:5012/Photos";

  constructor(private http:HttpClient) { }

  getMenuList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl + "/Menu");
  }

  addMenu(val:any){
    return this.http.get<any>(this.APIUrl + "/Menu", val);
  }
  
  updateMenu(val:any):Observable<any[]>{
    return this.http.get<any>(this.APIUrl + "/Menu");
  }

  deleteMenu(val:any){
    return this.http.get<any>(this.APIUrl + "/Menu");
  }

  getDishList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl + "/Dish");
  }

  addDish(val:any){
    return this.http.get<any>(this.APIUrl + "/Dish", val);
  }
  
  updateDish(val:any):Observable<any[]>{
    return this.http.get<any>(this.APIUrl + "/Dish");
  }

  deleteDish(val:any):Observable<any[]>{
    return this.http.get<any>(this.APIUrl + "/Dish");
  }

  saveImage(val:any):Observable<any[]>{
    return this.http.get<any>(this.APIUrl + "/Dish/SaveFile");
  }

  getAllDishName(val:any):Observable<any[]>{
    return this.http.get<any>(this.APIUrl + "Dish/GetAllDishName");
  }
}
