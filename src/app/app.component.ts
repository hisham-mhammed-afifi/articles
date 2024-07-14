import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  title = 'articles';

  links = [
    { path: 'dotnet-backend', label: 'ASP.NET Core', dir: 'ltr' },
    { path: 'oop-python', label: 'OOP with python example', dir: 'ltr' },
    { path: 'simple-app', label: 'Simple app (HTML, CSS, JS)', dir: 'rtl' },
    { path: 'routing-in-angular', label: 'Routing in Angular', dir: 'ltr' },
    { path: 'problems', label: 'Problems', dir: 'ltr' },
    { path: 'solutions', label: 'Solutions', dir: 'ltr' },
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
  ];
}
