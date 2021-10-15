import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from '../service/notification.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-chgpwd',
  templateUrl: './chgpwd.component.html',
  styleUrls: ['./chgpwd.component.css']
})
export class ChgpwdComponent implements OnInit {

  user: string = ''
  pwdold: string = ''
  pwdnew1: string = ''
  pwdnew2: string = ''

  constructor(
    private userService: UserService,
    private notifyService: NotificationService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onChgpwd() {
    this.userService.chgpwd(this.user, this.pwdold, this.pwdnew1, this.pwdnew2).subscribe(data => {
      this.notifyService.showSuccess('Sign In with your new password', '')
      this.router.navigate(['/'])
    }, err => {
      this.notifyService.showError(err.error.message, '')
    })
  }

}
