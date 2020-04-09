import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api/selectitem';

@Component({
  selector: 'app-pagina5',
  templateUrl: './pagina5.component.html',
  styleUrls: ['./pagina5.component.css']
})
export class Pagina5Component implements OnInit {
  conoscenze: SelectItem[];
  constructor() { }

  ngOnInit(): void {
    this.conoscenze = [
      {label: 'Disoccupato', value: 'Disoccupato'},
      {label: 'Co.co.pro', value: 'Co.co.pro'},
      {label: 'P.Iva', value: 'P.Iva'},
      {label: 'Contratto a T.D.', value: 'Contratto a T.D.'},
      {label: 'Contratto a T.I.', value: 'Contratto a T.I.'},
      {label: 'Altro', value: 'Altro'},
  ];
  }

}
