import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './news/list.component';
import { AddComponent } from './news/add.component';
import { EditComponent } from './news/edit.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { DetailComponent } from './news/detail.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatPaginatorIntlEsp } from './resources/mat-paginator'; 
import { MatSortModule } from '@angular/material/sort';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TopBarComponent } from './news/top-bar.component';
import { SigninComponent } from './news/signin.component';
import { SignupComponent } from './news/signup.component';
import { ChgpwdComponent } from './news/chgpwd.component';
import { MatMenuModule } from '@angular/material/menu'

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddComponent,
    EditComponent,
    DetailComponent,
    TopBarComponent,
    SigninComponent,
    SignupComponent,
    ChgpwdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatPaginatorModule, 
    MatSortModule,
    MatMenuModule
  ],
  providers: [
    {provide: MatPaginatorIntl, useClass: MatPaginatorIntlEsp} 
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
