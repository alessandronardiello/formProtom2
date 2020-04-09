import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { titoloStudio } from '../model/titoloStudio';
import { CustomerService } from '../candidato.service';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.component.html',
  styleUrls: ['./pagina2.component.css']
})
export class Pagina2Component {
  // mioForm : FormGroup;
  submitted= false;
  constructor(private formBuilder: FormBuilder, private titleStudyService : CustomerService) { }
  titoloStudio = new titoloStudio();
    // ngOnInit(): void {
    //   this.mioForm = this.formBuilder.group({
    //     cognome: new FormControl('', Validators.required),
    //     nome: new FormControl('', Validators.required),
    //     dataDiNascita: new FormControl('', [Validators.required]),
    //     luogoDiNascita: new FormControl('', [Validators.required])
    //   });
    // }
  
    private saveTitoloStudio(): void {
      console.log(this.titoloStudio);
      this.titleStudyService.addTitoloStudio(this.titoloStudio).subscribe();
    }

    addTitoloStudio(){
      this.submitted = true;
      this.saveTitoloStudio();
    }

}
