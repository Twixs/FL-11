import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NewsComponent } from './main-page/news/news.component';
import { ArticleComponent } from './article/article.component';
import { NewArticleComponent } from './new-article/new-article.component';

@NgModule({
   declarations: [
      AppComponent,
      MainPageComponent,
      NewsComponent,
      ArticleComponent,
      NewArticleComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
