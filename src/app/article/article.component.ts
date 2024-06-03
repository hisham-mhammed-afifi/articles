import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarkdownComponent } from 'ngx-markdown';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [MarkdownComponent],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css',
})
export class ArticleComponent {
  filePath = '';

  params = inject(ActivatedRoute).params;
  constructor() {
    this.params.subscribe((params) => {
      this.filePath = `${params['title']}.md`;
    });
  }
}
