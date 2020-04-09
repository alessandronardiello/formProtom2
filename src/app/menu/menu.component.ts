import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';
import {StepsModule} from 'primeng/steps';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: MenuItem[];
  activeIndex : 0;
  ngOnInit() {
      this.items = [
          {label: '1',routerLink : '/pagina1'},
          {label: '2', routerLink : '/pagina2'},
          {label: '3',routerLink : '/pagina3'},
          {label: '4',routerLink : '/pagina4'},
          {label: '5',routerLink : '/pagina5'},
          {label: '6',routerLink : '/pagina6'},
      ];
  }

}
