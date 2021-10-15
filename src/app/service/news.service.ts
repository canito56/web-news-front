import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { News } from '../model/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private newsURL = 'http://localhost:8080/news/'

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<News[]> {
    return this.httpClient.get<News[]>(this.newsURL + 'list');
  }

  public detail(id: number): Observable<News> {
    return this.httpClient.get<News>(this.newsURL + `detail/${id}`)
  }

  public add(news: News): Observable<any> {
    return this.httpClient.post<any>(this.newsURL + 'add', news)
  }

  public update(id: number, news: News): Observable<any> {
    return this.httpClient.put<any>(this.newsURL + `update/${id}`, news)
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.newsURL + `delete/${id}`);
  }

  public listPageable(pag: number, size: number) {
    return this.httpClient.get<any>(`${this.newsURL}/pageable?page=${pag}&size=${size}`)
  }

}
