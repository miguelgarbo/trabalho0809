import { Routes } from '@angular/router';
import { PessoaListComponent } from './components/pessoa-list/pessoa-list.component';
import { PessoaDetailsComponent } from './components/pessoa-details/pessoa-details.component';
import { LoginComponent } from './components/design/login/login.component';
import { PrincipalComponent } from './components/design/principal/principal.component';

export const routes: Routes = [

    {path:"", redirectTo:"login", pathMatch:'full'},
    {path:"login", component:LoginComponent},
    {path:"principal", component:PrincipalComponent,
        children:[
            {path:'pessoas',component:PessoaListComponent},
            {path:'pessoas/id', component: PessoaDetailsComponent},
            {path: 'pessoas/:id/edit', component: PessoaDetailsComponent},
            {path: 'pessoas/new', component:PessoaDetailsComponent}
        ]
    }
];



