import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {

  constructor(private service:SharedService) { }

  MenuList:any = [];

  ngOnInit(): void {
    this.refreshMenuList();
  }
  
  refreshMenuList(){
    this.service.getMenuList().subscribe(data => {
      this.MenuList = data;
    })
  }
}
