import { Component } from '@angular/core';
import { StorageService } from '../storage.service';
import { Source } from '../models/source.model';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.scss']
})
export class NewArticleComponent {

  constructor(public storageService: StorageService) {}

  public onSubmit(form: Source): void {
    this.storageService.addArticle(form);
    this.changeTitle();
  }

  public changeTitle(): void {
    this.storageService.selectedSourceCategory = this.storageService.sources[0];
  }
}
