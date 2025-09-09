import { Component, inject, numberAttribute } from '@angular/core';
import { Pessoa } from '../../models/pessoa';
import { PessoaService } from '../../services/pessoa.service';
import { Router, RouterLink } from '@angular/router';

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
