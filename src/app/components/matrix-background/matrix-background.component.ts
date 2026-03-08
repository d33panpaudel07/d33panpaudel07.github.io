import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-matrix-background',
  standalone: true,
  imports: [],
  template: `<canvas
    #matrixCanvas
    style="position: fixed; top: 0; left: 0; z-index: 0; opacity: 0.35; pointer-events: none;"
  ></canvas>`,
  styleUrl: './matrix-background.component.css',
})
export class MatrixBackgroundComponent implements AfterViewInit, OnDestroy {
  @ViewChild('matrixCanvas', { static: true })
  canvasRef!: ElementRef<HTMLCanvasElement>;

  private intervalId: any;
  private drops: number[] = [];

  ngAfterViewInit(): void {
    const canvas = this.canvasRef.nativeElement;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    this.resizeCanvas();
    window.addEventListener('resize', this.onResize.bind(this));

    const chars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=%""\'#&_(),.;:?!\\|{}<>[]^~';
    const charArray = chars.split('');
    const fontSize = 14;

    this.initDrops(fontSize);

    this.intervalId = setInterval(() => {
      this.draw(ctx, canvas, charArray, fontSize);
    }, 33);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    window.removeEventListener('resize', this.onResize.bind(this));
  }

  private onResize(): void {
    this.resizeCanvas();
    const fontSize = 14;
    this.initDrops(fontSize);
  }

  private resizeCanvas(): void {
    const canvas = this.canvasRef.nativeElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  private initDrops(fontSize: number): void {
    const canvas = this.canvasRef.nativeElement;
    const columns = canvas.width / fontSize;
    this.drops = [];
    for (let x = 0; x < columns; x++) {
      this.drops[x] = 1;
    }
  }

  private draw(
    ctx: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
    charArray: string[],
    fontSize: number,
  ): void {
    ctx.fillStyle = 'rgba(10, 10, 10, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.font = fontSize + 'px "Share Tech Mono"';

    for (let i = 0; i < this.drops.length; i++) {
      const text = charArray[Math.floor(Math.random() * charArray.length)];

      // Random opacity for depth
      ctx.fillStyle = `rgba(0, 255, 65, ${Math.random() * 0.5 + 0.1})`;

      ctx.fillText(text, i * fontSize, this.drops[i] * fontSize);

      if (this.drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        this.drops[i] = 0;
      }

      this.drops[i]++;
    }
  }
}
