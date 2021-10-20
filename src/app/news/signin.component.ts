import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { NotificationService } from '../service/notification.service';
import { UserService } from '../service/user.service';
import { ComunicationService } from '../service/comunication.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  user: User
  suser: string = ''
  pwd: string = ''

  constructor( 
    private userService: UserService,
    private notifyService: NotificationService,
    private router: Router,
    private comunicationService: ComunicationService) { }

  ngOnInit(): void {
    localStorage.setItem('logUser', '')
    this.comunicationService.sendMsgObservable.subscribe(user => {
      this.user = user
    })
  }

  onSignin() {
    const localUser = new User(this.suser, this.pwd, '', '', '')
    this.userService.signin(localUser).subscribe(data => {
      localStorage.setItem('logUser', data.suser)  
      this.user = data
      this.notifyService.showSuccess('User ' + this.user.suser + ' successfully logged in', '')
      this.comunicationService.sendMsg(this.user)
      this.router.navigate(['/list'])
    }, err => {
      this.notifyService.showError(err.error.message, '')
    })
  }

}
