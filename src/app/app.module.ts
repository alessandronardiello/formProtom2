import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Pagina1Component } from './pagina1/pagina1.component';
import {PanelModule} from 'primeng/panel';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InputTextModule} from 'primeng/inputtext';
import {InputMaskModule} from 'primeng/inputmask';
import {DropdownModule} from 'primeng/dropdown';
import {SelectButtonModule} from 'primeng/selectbutton';
import {CheckboxModule} from 'primeng/checkbox';
import {CardModule} from 'primeng/card';
import { Pagina2Component } from './pagina2/pagina2.component';
import {StepsModule} from 'primeng/steps';
import { MenuComponent } from './menu/menu.component';
import { Pagina3Component } from './pagina3/pagina3.component';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {RadioButtonModule} from 'primeng/radiobutton';
import { Pagina4Component } from './pagina4/pagina4.component';
import { Pagina5Component } from './pagina5/pagina5.component';
import { Pagina6Component } from './pagina6/pagina6.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ButtonModule} from 'primeng/button';
import {ListboxModule} from 'primeng/listbox';
import { AddContractComponent } from './add-contract/add-contract.component';

@NgModule({
  declarations: [
    AppComponent,
    Pagina1Component,
    Pagina2Component,
    MenuComponent,
    Pagina3Component,
    Pagina4Component,
    Pagina5Component,
    Pagina6Component,
    AddContractComponent,

  ],
  imports: [
    BrowserModule,
    ListboxModule,
    InputMaskModule,
    ReactiveFormsModule,
    StepsModule,
    InputTextModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule,
    PanelModule,
    CardModule,
    DropdownModule,
    InputTextareaModule,
    SelectButtonModule,
    RadioButtonModule,
    CheckboxModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
