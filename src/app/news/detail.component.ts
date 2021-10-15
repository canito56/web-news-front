import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '../service/notification.service';
import { News } from '../model/news';
import { NewsService } from '../service/news.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

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
      this.back()
    })
  }
  
  back(): void {
    this.router.navigate(['/list']);
  }

}
