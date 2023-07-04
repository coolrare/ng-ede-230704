import { Component, OnInit } from '@angular/core';
import { Article } from './shared/interfaces/Article';
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
  constructor(private datasvc: DataService) { }
  ngOnInit(): void {
    this.list = this.datasvc.getArticles();
  }
  doSearch(keyword: string) {
    this.list = this.datasvc.searchArticles(keyword);
  }
}
