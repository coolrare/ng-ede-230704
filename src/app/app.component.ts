import { Component, OnInit } from '@angular/core';
import { Article } from './shared/interfaces/Articles';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  sitename = 'conduit';
  subtitle = 'A place to share your <u>knowledge</u>.';
  articles: Article[] = [];
  articlesCount = 0;
  pages: any[] = [];
  tag = '';
  keyword = '';
  constructor(private datasvc: DataService) { }
  ngOnInit(): void {
    this.datasvc.getArticles()
      .subscribe(res => {
        this.articles = res.articles;
        this.articlesCount = res.articlesCount;

        this.pages = Array(this.calculatePageCount(res.articlesCount));

      });
  }

  switchToPage(pageNo: number) {
    this.datasvc.getArticles(pageNo, this.tag)
      .subscribe(res => {
        this.articles = res.articles;
        this.articlesCount = res.articlesCount;

        this.pages = Array(this.calculatePageCount(res.articlesCount));

      });
  }

  doSearch(keyword: string) {
    this.keyword = keyword;
  }

  chooseTag(tag: string) {
    this.tag = tag;

    this.datasvc.getArticles(0, tag)
    .subscribe(res => {
      this.articles = res.articles;
      this.articlesCount = res.articlesCount;

      this.pages = Array(this.calculatePageCount(res.articlesCount));

    });
  }

  calculatePageCount(totalPages: number) {
    return Math.ceil(totalPages / 10);
  }

}
