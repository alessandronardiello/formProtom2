import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api/selectitem';
import { Pagina1 } from '../model/pagina1';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { primiDati } from '../model/primidati';
import { CustomerService } from '../candidato.service';
import { Location } from '@angular/common';
import {Contratto} from '../model/contratto';
import { titoloStudio } from '../model/titoloStudio';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.css']
})
export class Pagina1Component{
  dati = new primiDati();
  submitted = false;
  contratto = new Contratto();
  

  addContract(){
    this.submitted = true;
    this.saveContract();
  }

  private saveContract(): void {
    console.log(this.contratto);
    this.customerService.addContract(this.contratto).subscribe();

  }

  getCustomers() {
    return this.customerService.getContract().subscribe(
      types  => {
      console.log(types);
      this.types = types
    });
  }

  types: Contratto[];



   constructor(
   private formBuilder: FormBuilder,
   private customerService: CustomerService,
   private location: Location
     ) {}














  // selectedType: string;
  // pagina1: Pagina1;
  // mioForm: FormGroup;
  // mostraPermesso = false;
  // mostraDataIscrizioneCPI = false;
  // mostraDataCategoriaProtetta = false;
  // mostraPatente = false;
  // mostraDomicilioEqualsResidenza = false;
  // ngOnInit(): void {
  //   this.mioForm = this.formBuilder.group({
  //     cognome: new FormControl('', Validators.required),
  //     nome: new FormControl('', Validators.required),
  //     dataDiNascita: new FormControl('', [Validators.required]),
  //     luogoDiNascita: new FormControl('', [Validators.required]),
  //     residenza: new FormControl('', Validators.required),
  //     numCivicoResidenza: new FormControl('', Validators.required),
  //     comuneResidenza: new FormControl('', Validators.required),
  //     provinciaResidenza: new FormControl('', Validators.required),
  //     capResidenza: new FormControl('', Validators.required),
  //     domicilio: new FormControl(),
  //     numCivicoDomicilio: new FormControl(),
  //     comuneDomicilio: new FormControl(),
  //     provinciaDomicilio: new FormControl(),
  //     capDomicilio: new FormControl(),
  //     telefono: new FormControl('', Validators.required),
  //     email: new FormControl('', Validators.required),
  //     contrattoAttuale: new FormControl('', Validators.required),
  //     dataDisponibilita: new FormControl('', Validators.required),
  //     mansione: new FormControl('', Validators.required),
  //     cittadinanzaItaliana: new FormControl('', Validators.required),
  //     permessoDiSoggiorno: new FormControl(),
  //     iscrizioneCpi: new FormControl('', Validators.required),
  //     dataIscrizioneCentroImpiego: new FormControl(''),
  //     iscrizioneCategoriaProtetta: new FormControl('', Validators.required),
  //     dataCategoriaProtetta: new FormControl(''),
  //     invalidità: new FormControl(''),
  //     possessoPatente: new FormControl('', Validators.required),
  //     tipoPatente: new FormControl(''),
  //     disponibilitaAutoMoto: new FormControl(''),

  //   });
  // }


  // showPermesso(check: boolean) {
  //   this.mostraPermesso = check;
  // }
  // showDataIscrizioneCpi(check: boolean) {
  //   this.mostraDataIscrizioneCPI = check;
  // }
  // showDataCategoriaProtetta(check: boolean) {
  //   this.mostraDataCategoriaProtetta = check;
  // }
  // showPatente(check: boolean) {
  //   this.mostraPatente = check;
  // }
  // showDomicilio(check: boolean) {
  //   this.mostraDomicilioEqualsResidenza = check;
  // }

  // salva() {

  // }

  // salvaDomicilio() {
  //   // domicilio =
  //   // numCivicoDomicilio =
  //   // comuneDomicilio =
  //   // provinciaDomicilio =
  //   // capDomicilio =
  // }


  // get cognome() {
  //   return this.mioForm.get('cognome');
  // }
  // get nome() {
  //   return this.mioForm.get('nome')
  // }
  // get dataDiNascita() {
  //   return this.mioForm.get('dataDiNascita')
  // }
  // get luogoDiNascita() {
  //   return this.mioForm.get('luogoDiNascita')
  // }
  // get residenza() {
  //   return this.mioForm.get('residenza')
  // }
  // get numCivicoResidenza() {
  //   return this.mioForm.get('numCivicoResidenza')
  // }
  // get comuneResidenza() {
  //   return this.mioForm.get('comuneResidenza')
  // }
  // get provinciaResidenza() {
  //   return this.mioForm.get('provinciaResidenza')
  // }
  // get capResidenza() {
  //   return this.mioForm.get('capResidenza')
  // }
  // get numCivicoDomicilio() {
  //   return this.mioForm.get('numCivicoDomicilio')
  // }
  // get domicilio() {
  //   return this.mioForm.get('domicilio')
  // }
  // get comuneDomicilio() {
  //   return this.mioForm.get('comuneDomicilio')
  // }
  // get provinciaDomicilio() {
  //   return this.mioForm.get('provinciaDomicilio')
  // }
  // get capDomicilio() {
  //   return this.mioForm.get('capDomicilio')
  // }
  // get telefono() {
  //   return this.mioForm.get('telefono')
  // }
  // get email() {
  //   return this.mioForm.get('email')
  // }
  // get contrattoAttuale() {
  //   return this.mioForm.get('contrattoAttuale')
  // }
  // get dataDisponibilita() {
  //   return this.mioForm.get('dataDisponibilita')
  // }
  // get mansione() {
  //   return this.mioForm.get('mansione')
  // }
  // get cittadinanzaItaliana() {
  //   return this.mioForm.get('cittadinanzaItaliana')
  // }
  // get permessoDiSoggiorno() {
  //   return this.mioForm.get('permessoDiSoggiorno')
  // }
  // get iscrizioneCpi() {
  //   return this.mioForm.get('iscrizioneCpi')
  // }
  // get dataIscrizioneCentroImpiego() {
  //   return this.mioForm.get('dataIscrizioneCentroImpiego')
  // }
  // get iscrizioneCategoriaProtetta() {
  //   return this.mioForm.get('iscrizioneCategoriaProtetta')
  // }
  // get dataCategoriaProtetta() {
  //   return this.mioForm.get('dataCategoriaProtetta')
  // }
  // get invalidità() {
  //   return this.mioForm.get('invalidità')
  // }
  // get possessoPatente() {
  //   return this.mioForm.get('possessoPatente')
  // }
  // get tipoPatente() {
  //   return this.mioForm.get('tipoPatente')
  // }
  // get disponibilitaAutoMoto() {
  //   return this.mioForm.get('disponibilitaAutoMoto')
  // }


}
