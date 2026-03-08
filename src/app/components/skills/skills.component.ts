import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  skillsData = [
    {
      category: 'Frontend',
      perms: '-rwxr-xr-x',
      owner: 'root',
      size: '4.2K',
      name: 'Angular, TypeScript, RxJS, HTML/CSS',
      progress: 90,
    },
    {
      category: 'Backend',
      perms: '-rwx-wx-wx',
      owner: 'root',
      size: '8.1K',
      name: 'Java, Spring Boot, REST APIs, Hibernate',
      progress: 85,
    },
    {
      category: 'Cybersecurity',
      perms: '-rwsr-xr-x',
      owner: 'admin',
      size: '1.3M',
      name: 'Penetration Testing, OWASP, Network Security, Kali Linux',
      progress: 75,
    },
    {
      category: 'Tools',
      perms: '-rwxrwxrwx',
      owner: 'sys',
      size: '2.0K',
      name: 'Git, Docker, Linux, MySQL, Firebase',
      progress: 80,
    },
  ];
}
