import { Component, inject, numberAttribute } from '@angular/core';
import { PessoaService } from '../../services/pessoa.service';
import { Router, RouterLink } from '@angular/router';
import { Pessoa } from '../../models/pessoa';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';

@Component({
  selector: 'app-pessoa-list',
  imports: [RouterLink, MdbRippleModule],
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

  constructor(){
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
    if(confirm("Deseja Realmente Excluir")){
    this.pessoaService.deleteById(id).subscribe({

      next: ()=>{
        alert("Pessoa Excluida Com Sucesso")
      this.findAll()
    },
    error: (erro)=>{
      alert("Erro ao Excluir A Pessoa")
      console.log(erro)
    }
    })
  }
  }

    atualizar(pessoa: Pessoa){
        this.router.navigate(['/principal/pessoas', pessoa.id, 'edit']);
  }

}
