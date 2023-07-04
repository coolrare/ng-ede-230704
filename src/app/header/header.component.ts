import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  doSearch(keyword: string, eventData: MouseEvent) {
    console.log('Search button clicked', keyword, eventData);
  }
}
