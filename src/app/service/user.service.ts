import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userURL = 'http://localhost:8080/user/'

  constructor(private httpClient: HttpClient) { }

  public signin(user: User): Observable<User> {
    return this.httpClient.post<User>(this.userURL + 'signin', user)
  } 

  public signup(user: User): Observable<User> {
    return this.httpClient.post<User>(this.userURL + 'signup', user)
  } 

  public chgpwd(user: string, psold: string, psnew1: string, psnew2: string): Observable<any> {
    return this.httpClient.put<any>(this.userURL + `chgpwd/${user}` + `/${psold}` + `/${psnew1}` + `/${psnew2}`, user)
   }

}
