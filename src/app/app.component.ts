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
  list: Article[] = [];
  keyword = '';
  constructor(private datasvc: DataService) { }
  ngOnInit(): void {
    this.datasvc.getArticles()
      .subscribe(res => { this.list = res; });
  }
  doSearch(keyword: string) {
    this.keyword = keyword;
  }
}
