import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent implements OnInit, OnDestroy {
  @Output() bootComplete = new EventEmitter<void>();

  logs: string[] = [];
  booted = false;
  typewriter = '';

  private readonly bootLogs = [
    '[OK] Initializing kernel...',
    '[OK] Mounting root file system...',
    '[OK] Loading network interfaces...',
    '[OK] Starting background processes...',
    '[OK] Verifying system integrity...',
    '[LOAD] System integrity check completed.',
  ];

  private readonly fullTagline =
    'Engineering secure, scalable systems.\n BScCSIT Student — Tribhuvan University, 7th Semester.';

  private bootIntervalId!: ReturnType<typeof setInterval>;
  private typeIntervalId!: ReturnType<typeof setInterval>;
  private bootTimeoutId!: ReturnType<typeof setTimeout>;
  asciiBanner = `
       ____________                 
  ____/ /__  /__  /____  ____ _____ 
 / __  / /_ < /_ </ __ \\/ __ \`/ __ \\
/ /_/ /___/ /__/ / /_/ / /_/ / / / /
\\__,_//____/____/ .___/\\__,_/_/ /_/ 
               /_/                  
`;

  ngOnInit(): void {
    let currentLog = 0;
    this.bootIntervalId = setInterval(() => {
      if (currentLog < this.bootLogs.length) {
        this.logs.push(this.bootLogs[currentLog]);
        currentLog++;
      } else {
        clearInterval(this.bootIntervalId);
        this.bootTimeoutId = setTimeout(() => {
          this.booted = true;
          this.bootComplete.emit();
          this.startTypewriter();
        }, 500);
      }
    }, 300);
  }

  ngOnDestroy(): void {
    if (this.bootIntervalId) clearInterval(this.bootIntervalId);
    if (this.typeIntervalId) clearInterval(this.typeIntervalId);
    if (this.bootTimeoutId) clearTimeout(this.bootTimeoutId);
  }

  private startTypewriter(): void {
    let i = 0;
    this.typeIntervalId = setInterval(() => {
      if (i < this.fullTagline.length) {
        this.typewriter = this.fullTagline.slice(0, i + 1);
        i++;
      } else {
        clearInterval(this.typeIntervalId);
      }
    }, 50);
  }
}
