import { Component, inject } from '@angular/core';
import { Pessoa } from '../../models/pessoa';
import { PessoaService } from '../../services/pessoa.service';
import { ActivatedRoute, Router } from '@angular/router';
import{ FormsModule } from '@angular/forms'


@Component({
  selector: 'app-pessoa-details',
  imports: [FormsModule],
  templateUrl: './pessoa-details.component.html',
  styleUrl: './pessoa-details.component.scss'
})
export class PessoaDetailsComponent {

  pessoa: Pessoa = new Pessoa();
  pessoaService = inject(PessoaService)
  activedRoute = inject(ActivatedRoute)

  router = inject(Router)

  constructor() {
    let id = this.activedRoute.snapshot.params['id'];
    if (id > 0) {
      this.findById(id);
    }
  }

  salvar(pessoa: Pessoa){
    if(pessoa.id ==null){

    this.pessoaService.save(pessoa).subscribe({
      next: ()=>{
        this.router.navigate(['/pessoas'])
      },
      error: erro =>{
        console.error(erro)
      }
    })
  }else{
      this.pessoaService.update(pessoa).subscribe({
        next:()=> {
          this.router.navigate(['/pessoas']);
        },
        error: erro=>{
          console.error(erro);
        }
      })

  }
  }

  findById(id: number){
    this.pessoaService.findByid(id).subscribe({

      next: pessoa =>{

        this.pessoa = pessoa;
      },
      error: erro =>{
        console.error(erro)
      }
    })
  }



}
