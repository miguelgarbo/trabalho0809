import { Routes } from '@angular/router';
import { PessoaListComponent } from './components/pessoa-list/pessoa-list.component';
import { PessoaDetailsComponent } from './components/pessoa-details/pessoa-details.component';

export const routes: Routes = [

    {path:"", redirectTo:"pessoas", pathMatch:'full'},
    {path:"pessoas", component: PessoaListComponent},
    {path:"pessoas/:id", component: PessoaDetailsComponent},
    {path:"pessoas/:id/edit", component: PessoaDetailsComponent},
    {path:"pessoas/new", component: PessoaDetailsComponent}

];



