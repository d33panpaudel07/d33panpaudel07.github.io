import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatrixBackgroundComponent } from './components/matrix-background/matrix-background.component';
import { ScanlineOverlayComponent } from './components/scanline-overlay/scanline-overlay.component';
import { HeroComponent } from './components/hero/hero.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { ToastComponent } from './common/toast/toast.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    MatrixBackgroundComponent,
    ScanlineOverlayComponent,
    HeroComponent,
    NavBarComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    ToastComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  activeSection = 'none';
  isBooted = false;

  onBootComplete(): void {
    this.isBooted = true;
  }
}
