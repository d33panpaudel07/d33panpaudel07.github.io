import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
  @Input() activeSection = 'none';

  links = [
    { id: 'about', label: './about.sh' },
    { id: 'skills', label: './skills.sh' },
    { id: 'projects', label: './projects.sh' },
    { id: 'contact', label: './contact.exe' },
  ];
}
