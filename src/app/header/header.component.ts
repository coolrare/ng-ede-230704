import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  keyword: string = '';

  isHighlight = false;

  fontSize = 1.5;

  @Output() search = new EventEmitter<string>();

  doSearch(keyword: string, eventData?: MouseEvent) {
    console.log('Search button clicked', keyword, eventData);

    this.isHighlight = !this.isHighlight;

    this.fontSize += 0.1;

    this.keyword = keyword;

    this.search.emit(keyword);
  }
}
