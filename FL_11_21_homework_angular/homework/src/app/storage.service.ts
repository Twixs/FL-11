import { Injectable } from '@angular/core';
import { SPORT } from './mocks/sport';
import { TRAVEL } from './mocks/travel';
import { Source } from './models/source.model';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  public sources: string[] = ['All', 'Sport', 'Travel'];
  public selectedSource: Source;
  public selectedSourceCategory: string;

  constructor() {
    this.selectedSourceCategory = this.sources[0];
  }

  public getSource(source: string): Source[] {
    switch (source) {
      case 'All': return this.getAllSources();
      case 'Sport': return this.getSportSource();
      case 'Travel': return this.getTravelSource();
    }
  }

  public setArticle(article: Source): void {
    this.selectedSource = article;
  }

  public setSourceCategory(category: string): void {
    this.selectedSourceCategory = category;
  }

  public getArticle(): Source {
    return this.selectedSource;
  }

  public getSourceCategory(): string {
    return this.selectedSourceCategory;
  }

  public addArticle(article: Source): void {
    article.source === 'Sport' ? SPORT.push(article) : TRAVEL.push(article);
  }

  public getFilteredNews(category: string, filter: string): Source[] {
    switch (category) {
      case 'All': return this.getAllSources().filter(item => item.name.includes(filter) || item.description.includes(filter));
      case 'Sport': return this.getSportSource().filter(item => item.name.includes(filter) || item.description.includes(filter));
      case 'Travel': return this.getTravelSource().filter(item => item.name.includes(filter) || item.description.includes(filter));
    }
  }

  private getSportSource() {
    return SPORT;
  }

  private getTravelSource() {
    return TRAVEL;
  }

  private getAllSources() {
    return [...SPORT, ...TRAVEL];
  }

}
