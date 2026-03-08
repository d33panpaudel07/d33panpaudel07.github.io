import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';
import { ToastService, Toast, ToastType } from './toast.service';

/** Visual config per toast type */
const TYPE_CONFIG: Record<
  ToastType,
  { prefix: string; borderColor: string; prefixColor: string; barColor: string }
> = {
  success: {
    prefix: '[SUCCESS]',
    borderColor: '#39ff14',
    prefixColor: '#39ff14',
    barColor: '#39ff14',
  },
  error: {
    prefix: '[ERROR]',
    borderColor: '#ff003c',
    prefixColor: '#ff003c',
    barColor: '#ff003c',
  },
  info: {
    prefix: '[INFO]',
    borderColor: '#00cc33',
    prefixColor: '#00cc33',
    barColor: '#00cc33',
  },
  warning: {
    prefix: '[WARN]',
    borderColor: '#ffbd44',
    prefixColor: '#ffbd44',
    barColor: '#ffbd44',
  },
};

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('toastEnterLeave', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(110%)' }),
        animate('220ms cubic-bezier(0.22, 1, 0.36, 1)', style({ opacity: 1, transform: 'translateX(0)' })),
      ]),
      transition(':leave', [
        animate('180ms ease-in', style({ opacity: 0, transform: 'translateX(110%)' })),
      ]),
    ]),
  ],
})
export class ToastComponent {
  protected readonly toastService = inject(ToastService);

  /** Expose configuration for template use */
  protected typeConfig = TYPE_CONFIG;

  trackById(_: number, toast: Toast): number {
    return toast.id;
  }

  dismiss(id: number): void {
    this.toastService.dismiss(id);
  }

  /** Returns the CSS animation duration string for the progress bar drain */
  barAnimation(toast: Toast): string {
    return `${toast.duration}ms linear`;
  }

  /** Compute the border-left color based on type */
  borderColor(type: ToastType): string {
    return this.typeConfig[type].borderColor;
  }

  prefixColor(type: ToastType): string {
    return this.typeConfig[type].prefixColor;
  }

  barColor(type: ToastType): string {
    return this.typeConfig[type].barColor;
  }

  prefix(type: ToastType): string {
    return this.typeConfig[type].prefix;
  }
}
