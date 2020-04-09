import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api/selectitem';

@Component({
  selector: 'app-pagina4',
  templateUrl: './pagina4.component.html',
  styleUrls: ['./pagina4.component.css']
})
export class Pagina4Component implements OnInit {
  grado: SelectItem[];
  constructor() { 

    
  }
 
  ngOnInit(): void {
    this.grado = [{value: 'A1',label: 'A1'},{value: 'A2',label: 'A2'},{value: 'B1',label: 'B1'},
    {value: 'B2',label: 'B2'},{value: 'C1',label: 'C1'},{value: 'C2',label: 'C2'}];
  }

}
