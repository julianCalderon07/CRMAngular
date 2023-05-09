import { Component } from '@angular/core';
import { menu } from 'src/app/Interfaces/menu';
import { MenuService } from 'src/app/service/menu.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  menu: menu[]=[];

  constructor(private _menuService: MenuService) { }

  ngOnInit(): void {
    this.cargarMenu();
  }
  cargarMenu() {
    this._menuService.getMenu().subscribe(data => {
      this.menu = data;
    });
  }

}
