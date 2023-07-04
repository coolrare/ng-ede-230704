import { Component, Input } from '@angular/core';
import { Article } from '../shared/interfaces/Article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
})
export class ArticlesComponent {
  @Input() list: Article[] = [];
}
