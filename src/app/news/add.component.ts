import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from '../service/notification.service'; 
import { News } from '../model/news';
import { NewsService } from '../service/news.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html', 
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  title: string = ''
  news: string = ''
  id_user: number = 0

  constructor(
    private newsService: NewsService,
    private notifyService: NotificationService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id_user = this.activatedRoute.snapshot.params.id
  }

  onCreate(): void {
    const news = new News(this.title, this.news, this.id_user)
    this.newsService.add(news).subscribe(data => {
      this.notifyService.showSuccess('News ' + this.title + ' successfully added', '')
      this.router.navigate(['/list'])
    }, err => {
      this.notifyService.showError(err.error.message, '')
    })
  }

}
