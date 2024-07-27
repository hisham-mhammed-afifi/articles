import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './list.component.html',
  styles: [],
})
export class ListComponent {
  links = [
    { path: 'tree-shaking', label: 'Tree-shaking', dir: 'ltr' },
    { path: 'dotnet-backend', label: 'ASP.NET Core', dir: 'ltr' },
    { path: 'oop-python', label: 'OOP with python example', dir: 'ltr' },
    { path: 'simple-app', label: 'Simple app (HTML, CSS, JS)', dir: 'rtl' },
    { path: 'routing-in-angular', label: 'Routing in Angular', dir: 'ltr' },
    { path: 'problems', label: 'Problems', dir: 'ltr' },
    { path: 'solutions', label: 'Solutions', dir: 'ltr' },
    {
      path: 'important-topics-in-css',
      label: 'Important topics CSS',
      dir: 'ltr',
    },
    { path: 'angular-advanced', label: 'Angular advanced', dir: 'ltr' },
    { path: 'angular-performance', label: 'Angular performance', dir: 'ltr' },
    {
      path: 'angular-tips-tricks',
      label: 'Angular tips and tricks',
      dir: 'ltr',
    },
    {
      path: 'angular-topics',
      label: 'Angular topics',
      dir: 'ltr',
    },
    { path: 'dot-net', label: 'ASP.NET Guide', dir: 'ltr' },
    { path: 'ngrx-store', label: 'ngrx store', dir: 'ltr' },
    { path: 'rxjs-operators', label: 'RxJS Operators', dir: 'ltr' },
    {
      path: 'change-detection',
      label: 'Change detection in Angular',
      dir: 'ltr',
    },
    {
      path: 'reactive-forms',
      label: 'Reactive forms in Angular',
      dir: 'ltr',
    },
    {
      path: 'ngmodel',
      label: 'NgModel in Angular',
      dir: 'ltr',
    },
    {
      path: 'dependency-injection',
      label: 'Dependency injection in Angular',
      dir: 'ltr',
    },
    {
      path: 'scalable-project',
      label: 'Scalable Angular project',
      dir: 'ltr',
    },
    {
      path: 'problem-solving-practice',
      label: 'Problem Solving Practice',
      dir: 'ltr',
    },
    {
      path: 'sorting-algo-pseudocode',
      label: 'Sorting Algo pseudocode',
      dir: 'ltr',
    },
    {
      path: 'sass-guide-with-angular-material',
      label: 'SASS with angular material',
      dir: 'ltr',
    },
    {
      path: 'practical-guide-to-bem-methodology-in-css',
      label: 'Practical Guide to BEM Methodology in CSS',
      dir: 'ltr',
    },
    {
      path: 'practical-guide-to-mobile-first-design-strategy',
      label: 'Practical Guide to Mobile-First Design Strategy',
      dir: 'ltr',
    },
    {
      path: 'habits-of-highly-productive-developers',
      label: '14 Habits of Highly Productive Developers',
      dir: 'ltr',
    },
    {
      path: 'habits-of-highly-productive-developers-arabic',
      label: 'عادات المبرمج الشاطر',
      dir: 'rtl',
    },
  ];
}
