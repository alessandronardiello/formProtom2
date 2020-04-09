import { Component, OnInit } from '@angular/core';
import { Contratto } from '../model/contratto';
import { CustomerService } from '../candidato.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-contract',
  templateUrl: './add-contract.component.html',
  styleUrls: ['./add-contract.component.css']
})
export class AddContractComponent implements OnInit {

  contratto = new Contratto();
  submitted = false;

  constructor(private contractService: CustomerService, private location: Location) { }

  newCustomer(): void{
    this.submitted = false;
    this.contratto = new Contratto();
  }

  addCustomer(){
    this.submitted = true;
    this.save();
  }

  goBack(): void{
    this.location.back();
  }

  private save(): void {
    console.log(this.contratto);
    this.contractService.addContract(this.contratto).subscribe();

  }
  ngOnInit(): void {
  }

}
