import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from '../service/notification.service';
import { User } from '../model/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  suser: string = ''
  pwd: string = ''
  first_name: string = ''
  last_name: string = ''
  email: string = ''

  constructor(
    private userService: UserService,
    private notifyService: NotificationService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSignup() {
    const user = new User(this.suser, this.pwd, this.first_name, this.last_name, this.email)
    this.userService.signup(user).subscribe(data => {
      this.notifyService.showSuccess('User ' + this.suser + ' successfully registered', '')
      this.router.navigate(['/'])
    }, err => {
      this.notifyService.showError(err.error.message, '')
    })
  }

}
