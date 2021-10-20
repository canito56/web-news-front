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
import { NewsGuard } from './news.guard';


const routes: Routes = [
  {path: '', component: SigninComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'chgpwd', component: ChgpwdComponent, canActivate: [NewsGuard]},
  {path: 'list', component: ListComponent, canActivate: [NewsGuard]},
  {path: 'detail/:id', component: DetailComponent, canActivate: [NewsGuard]},
  {path: 'add/:id', component: AddComponent, canActivate: [NewsGuard]},
  {path: 'edit/:id', component: EditComponent, canActivate: [NewsGuard]},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule, CommonModule]
})
export class AppRoutingModule { }
