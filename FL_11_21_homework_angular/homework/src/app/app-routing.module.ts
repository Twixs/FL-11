import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ArticleComponent } from './article/article.component';
import { NewArticleComponent } from './new-article/new-article.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'article', component: ArticleComponent },
  { path: 'new-article', component: NewArticleComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
