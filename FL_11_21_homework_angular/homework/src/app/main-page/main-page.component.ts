import { Component } from '@angular/core';
import { StorageService } from '../storage.service';
import { Source } from '../models/source.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  public sources: string[];
  public selectedSourceCategory: string;
  public news: Source[];
  public filter: string;

  constructor(public storageService: StorageService) {
    this.sources = this.storageService.sources;
    this.selectedSourceCategory = this.storageService.getSourceCategory();
    this.news = this.storageService.getSource(this.selectedSourceCategory);
  }

  public setSelection(source: HTMLElement): void {
    this.selectedSourceCategory = source.innerText;
    this.storageService.setSourceCategory(source.innerText);
    this.news = this.storageService.getSource(this.selectedSourceCategory);
  }

  public openArticle(article: Source): void {
    this.storageService.setArticle(article);
  }

  public changeTitle(): void {
    this.storageService.selectedSourceCategory = 'Add New Article to';
  }

  public onKey(event: any): void {
    this.filter = event.target.value;
  }

  public filterNews(): void {
    this.news = this.storageService.getFilteredNews(this.selectedSourceCategory, this.filter);
  }
}
