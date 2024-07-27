import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MarkdownComponent } from 'ngx-markdown';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [MarkdownComponent, RouterLink],
  templateUrl: './article.component.html',
  styles: [],
})
export class ArticleComponent {
  filePath = '';
  dir = '';

  params = inject(ActivatedRoute).params;
  QueryParams = inject(ActivatedRoute).queryParams;

  constructor() {
    this.params.subscribe((params) => {
      this.filePath = `${params['title']}.md`;
    });

    this.QueryParams.subscribe((params) => {
      this.dir = params['dir'];
    });
  }
}
