import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '../service/notification.service'; 
import { News } from '../model/news';
import { NewsService } from '../service/news.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  news: News = null

  constructor(
    private newsService: NewsService,
    private activatedRoute: ActivatedRoute,
    private notifyService: NotificationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id
    this.newsService.detail(id).subscribe(data => {
      this.news = data
    }, err => {
      this.notifyService.showError(err.error.message, '')
      this.router.navigate(['/list'])
    })
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params.id
    this.newsService.update(id, this.news).subscribe(data => {
      this.notifyService.showSuccess('News ' + this.news.title + ' successfully modified', '')
      this.router.navigate(['/list'])
    }, err => {
      this.notifyService.showError(err.error.message, '')
    })
  }

}
