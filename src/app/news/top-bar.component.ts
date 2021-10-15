import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { ComunicationService } from '../service/comunication.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  user: User 

  constructor(private comunicationService: ComunicationService) { }

  ngOnInit(): void {
    this.comunicationService.sendMsgObservable.subscribe(user => {
      this.user = user
    })  
  }

}
