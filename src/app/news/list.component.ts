import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { News } from '../model/news';
import { NewsService } from '../service/news.service';
import { NotificationService } from '../service/notification.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  news: News[] = []
  displayedColumns = ['id_news','title','snews','date','user','see-edit-delete']
  dataSource: MatTableDataSource<News>
  cant: number
  @ViewChild(MatPaginator) paginator: MatPaginator
  @ViewChild(MatSort) sort: MatSort

  placeholders = {'search': 'Search News'}

  constructor(
    private newsService: NewsService,
    private notifyService: NotificationService) { }

  ngOnInit(): void {
    this.listNews()
  }

  listNews(): void {
    this.newsService.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data)
      this.dataSource.paginator = this.paginator
      this.dataSource.sort = this.sort
    })
    this.newsService.listPageable(0,10).subscribe(data => {
      this.cant = data.totalElements
      this.dataSource = new MatTableDataSource(data.content)
      this.dataSource.paginator = this.paginator
      this.dataSource.sort = this.sort
    })
  }

  onDelete(id: number, title:string) {
    this.newsService.delete(id).subscribe(data => {
      this.notifyService.showSuccess('News ' + title + ' successfully deleted', '')
      this.listNews();
    }, err => {
      this.notifyService.showError(err.error.message, '')
    })    
  }
  
  filter(val: string) {
    this.dataSource.filter = val.trim().toLowerCase()
  }

  Paginator(e: any) {
    this.newsService.listPageable(e.pageIndex, e.pageSize).subscribe(data => {
      this.cant = data.totalElements
      this.dataSource = new MatTableDataSource(data.content)
      this.dataSource.sort = this.sort
    })
  }

}
