import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Secure Auth System',
      path: '~/projects/secure_auth',
      desc: 'Implemented a highly secure authentication flow using Spring Security and JWT, with rate-limiting and IP blocking.',
      tech: 'Java, Spring Boot, JWT, MySQL',
    },
    {
      title: 'Network Vulnerability Scanner',
      path: '~/projects/vuln_scanner',
      desc: 'A Python-based script that scans target IPs for common open ports and known vulnerabilities. Designed for educational authorized testing.',
      tech: 'Python, Nmap, Sockets',
    },
    {
      title: 'Full-Stack Banking App',
      path: '~/projects/banking_app',
      desc: 'A robust Angular and Spring Boot application simulating a secure core banking system with transaction integrity.',
      tech: 'Angular, TypeScript, Spring Boot',
    },
    {
      title: 'CTF Challenge Writeups',
      path: '~/blog/ctf_writeups',
      desc: 'Detailed write-ups and walkthroughs of various TryHackMe and HackTheBox machines focusing on privilege escalation.',
      tech: 'Markdown, Linux, Penetration Testing',
    },
  ];
}
