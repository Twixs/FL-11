import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Source } from 'src/app/models/source.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {
  @Input() public news: Source[];

  @Output() public article: EventEmitter<Source> = new EventEmitter();

  constructor() {}

  public openArticle(article: Source): void {
    this.article.emit(article);
  }

  public getDate(date: string): Date {
    return new Date(date);
  }

}
