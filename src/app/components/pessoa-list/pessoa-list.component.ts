import { Component, inject, numberAttribute } from '@angular/core';
import { PessoaService } from '../../services/pessoa.service';
import { Router, RouterLink } from '@angular/router';
import { Pessoa } from '../../models/pessoa';

@Component({
  selector: 'app-pessoa-list',
  imports: [RouterLink],
  templateUrl: './pessoa-list.component.html',
  styleUrl: './pessoa-list.component.scss'
})
export class PessoaListComponent {

  pessoas: Pessoa[] =[];

  pessoaService = inject(PessoaService)
  router = inject(Router)

  ngOnInit(){
    this.findAll();
  }
    pessoa1: Pessoa = new Pessoa();

  constructor(){

    this.pessoa1.id=13
    this.pessoa1.nome="Ana"
    this.pessoa1.email="ana@gmail.com"
    this.pessoa1.cpf="3643247238473"
    this.pessoa1.dataNascimento="20/08/1990"


    this.pessoas.push(this.pessoa1)

  }

  findAll(){
    this.pessoaService.findAll().subscribe({

      next: pessoas =>{
        this.pessoas = pessoas;
      },
      error: (erro:any)=>{
        console.log(erro)
      }
    })
  }

  deletar(id:number){
    this.pessoaService.deleteById(id).subscribe({

      next: ()=>{
      this.findAll()
    },
    error: (erro)=>{
      console.log(erro)
    }
    })
  }




}
