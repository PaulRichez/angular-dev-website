import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  public navItems = [
    {
      label: 'Docs',
      icon: 'description',
      link: 'overview'
    },
    {
      label: 'Tutorials',
      icon: 'unfold_more',
      link: 'tutorials',
      rotate: true,
    },
    {
      label: 'Playground',
      icon: 'joystick',
      link: 'playground'
    },
    {
      label: 'Reference',
      icon: 'description',
      link: 'api'
    }
  ]
}
