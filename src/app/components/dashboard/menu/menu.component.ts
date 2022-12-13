import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/interfaces/menu';
import { MenuService } from 'src/app/services/menu.service';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu:Menu[]=[]

  constructor(private menuservice :MenuService) { }

  ngOnInit(): void {
    this.cargarMenu();
  }
  cargarMenu(){
    this.menuservice.getMenu().subscribe(data=>{
    
      this.menu=data
    })
  }

}
