import { Injectable } from '@angular/core';
import { NgThemeSystemService } from 'ng-theme-system';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  public themeSystem = 'light';
  public isSystemTheme = true;
  public themeList = [
    {
      name: 'Light',
      value: 'light'
    },
    {
      name: 'Dark',
      value: 'dark',
    },
  ]
  private readonly style: HTMLLinkElement = document.createElement('link');

  public set current(value: string) {
    if (value === 'system') {
      this.isSystemTheme = true;
      value = this.themeSystem;
    }
    this.style.href = `/${value}.css`;
    document.body.classList.remove('adev-light-mode', 'adev-dark-mode');
    document.body.classList.add(`adev-${value}-mode`);
    console.log('ThemeService.current', value);
  }


  constructor(
    private ngThemeSystemService: NgThemeSystemService,
  ) {
    this.ngThemeSystemService.listenSystemTheme().subscribe((themeSystem) => {
      this.themeSystem = themeSystem;
      if (this.isSystemTheme) {
        this.current = 'system';
      }
    });
    this.style.rel = 'stylesheet';
    document.head.appendChild(this.style);
  }
}
