import { Component } from '@angular/core';
import  { ThemeService } from './core/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-dev-website';

  constructor(themeService: ThemeService) {

  }
}
