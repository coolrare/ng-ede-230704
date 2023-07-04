import { Injectable } from '@angular/core';
import { Article, Articles } from './shared/interfaces/Articles';
import { HttpClient } from '@angular/common/http';
import { Observable, filter, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getArticles(): Observable<Article[]> {
    var url = 'https://api.realworld.io/api/articles?limit=10&offset=0';
    return this.http.get<Articles>(url).pipe(map(res => res.articles));
  }

  searchArticles(keyword: string): Observable<Article[]> {
    if (keyword === '') {
      return this.getArticles();
    } else {
      return this.getArticles()
        .pipe(map(res => {
          return res
            .filter(item => item.title.includes(keyword))
            .map(item => {
              return {
                ...item,
                title: item.title.replace(keyword, `<mark>${keyword}</mark>`)
              };
            });
        }));
    }
  }
}
