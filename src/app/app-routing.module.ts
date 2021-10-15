import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './news/add.component';
import { DetailComponent } from './news/detail.component';
import { EditComponent } from './news/edit.component';
import { ListComponent } from './news/list.component';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './news/signin.component';
import { SignupComponent } from './news/signup.component';
import { ChgpwdComponent } from './news/chgpwd.component';


const routes: Routes = [
  {path: '', component: SigninComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'chgpwd', component: ChgpwdComponent},
  {path: 'list', component: ListComponent},
  {path: 'detail/:id', component: DetailComponent},
  {path: 'add/:id', component: AddComponent},
  {path: 'edit/:id', component: EditComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule, CommonModule]
})
export class AppRoutingModule { }
