import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class ComunicationService {

  msgUser: User
  private sendMsgSubject = new Subject<User>()
  sendMsgObservable = this.sendMsgSubject.asObservable()

  sendMsg(msgUser: User) {
    this.msgUser = msgUser
    this.sendMsgSubject.next(this.msgUser)
  }

}
