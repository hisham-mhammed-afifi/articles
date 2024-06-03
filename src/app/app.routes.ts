import { Routes } from '@angular/router';
import { ArticleComponent } from './article/article.component';

export const routes: Routes = [
  {
    path: ':title',
    component: ArticleComponent,
  },
];
