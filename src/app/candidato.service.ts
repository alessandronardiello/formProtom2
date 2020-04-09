import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { primiDati } from './model/primidati';
import { Contratto } from './model/contratto';
import { titoloStudio } from './model/titoloStudio';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private customersUrl = 'http://localhost:8081/candidato';
  private conctractUrl = 'http://localhost:8081/contratto';
  private titoloStudioUrl = 'http://localhost:8081/titoloStudio';
  constructor(private http: HttpClient) { }

  
  getContract (): Observable<Contratto[]> {
    return this.http.get<Contratto[]>(this.conctractUrl)
  }

  getCustomer(id: number): Observable<primiDati> {
    const url = `${this.customersUrl}/${id}`;
    return this.http.get<primiDati>(url);
  }

  addCustomer (customer: primiDati): Observable<primiDati> {
    return this.http.post<primiDati>(this.customersUrl,customer,httpOptions);
  }
  
  addContract (contract: Contratto): Observable<Contratto> {
    return this.http.post<Contratto>(this.conctractUrl,contract,httpOptions);
  }

  addTitoloStudio (titoloStudio: titoloStudio): Observable<titoloStudio> {
    return this.http.post<titoloStudio>(this.titoloStudioUrl,titoloStudio,httpOptions);
  }


}

