import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  tags: string[] = [];

  @Output() choose = new EventEmitter<string>();

  constructor(private datasvc: DataService) {}

  ngOnInit(): void {
    this.datasvc.getTags().subscribe(res => {
      this.tags = res;
    });
  }

  chooseTag(tag: string) {
    this.choose.emit(tag);
  }
}
