import { Component } from '@angular/core';
import { StorageService } from '../storage.service';
import { Source } from '../models/source.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent {
  public article: Source;

  constructor(public storageService: StorageService) {
    this.article = this.storageService.getArticle();
  }

}
