import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
})
export class ArticlesComponent {
  @Input() list: Article[] = [];
}

// Generated by https://quicktype.io

export interface Article {
  title: string;
  slug: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  tagList: any[];
  description: string;
  author: Author;
  favorited: boolean;
  favoritesCount: number;
}

export interface Author {
  username: string;
  bio: string;
  image: string;
  following: boolean;
}
