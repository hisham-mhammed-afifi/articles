import { Routes } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { ListComponent } from './list/list.component';

export const routes: Routes = [
  {
    path: '',
    component: ListComponent,
    pathMatch: 'full',
  },
  {
    path: ':title',
    component: ArticleComponent,
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full',
  },
];
