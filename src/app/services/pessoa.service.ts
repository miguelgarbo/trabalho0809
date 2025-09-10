import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pessoa } from '../models/pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private http = inject(HttpClient)
  private API = 'http://localhost:8080/api/pessoas'

  findAll(): Observable<Pessoa[]>{
    return this.http.get<Pessoa[]>(this.API)
  }

  findByid(id:number): Observable<Pessoa>{
    return this.http.get<Pessoa>(`${this.API}/${id}`)
  }

  deleteById(id:number): Observable<any>{
    return this.http.delete<Pessoa>(`${this.API}/${id}`)
  }

  update(pessoa: Pessoa): Observable<Pessoa>{
    return this.http.put<Pessoa>(`${this.API}/${pessoa.id}`, pessoa)
  }

  save(pessoa:Pessoa): Observable<Pessoa>{
    return this.http.post<Pessoa>(this.API, pessoa)
  }


  constructor() { }
}
