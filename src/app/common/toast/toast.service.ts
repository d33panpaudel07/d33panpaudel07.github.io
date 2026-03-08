import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export type ToastType = 'success' | 'error' | 'info' | 'warning';

export interface Toast {
  id: number;
  message: string;
  type: ToastType;
  duration: number;
  createdAt: number;
}

@Injectable({ providedIn: 'root' })
export class ToastService {
  private _idCounter = 0;
  private _toastsSubject = new BehaviorSubject<Toast[]>([]);

  /** Observable stream of active toasts — subscribe in components via AsyncPipe */
  readonly toasts$: Observable<Toast[]> = this._toastsSubject.asObservable();

  /**
   * Display a new toast notification.
   * @param message  The text to display
   * @param type     Severity — 'success' | 'error' | 'info' | 'warning'
   * @param duration Auto-dismiss delay in ms (default: 4000)
   */
  show(message: string, type: ToastType = 'info', duration = 4000): void {
    const id = ++this._idCounter;
    const toast: Toast = { id, message, type, duration, createdAt: Date.now() };

    this._toastsSubject.next([...this._toastsSubject.getValue(), toast]);

    setTimeout(() => this.dismiss(id), duration);
  }

  /** Immediately remove a toast by its id */
  dismiss(id: number): void {
    this._toastsSubject.next(
      this._toastsSubject.getValue().filter((t) => t.id !== id),
    );
  }

  success(message: string, duration?: number): void {
    this.show(message, 'success', duration);
  }

  error(message: string, duration?: number): void {
    this.show(message, 'error', duration);
  }

  info(message: string, duration?: number): void {
    this.show(message, 'info', duration);
  }

  warning(message: string, duration?: number): void {
    this.show(message, 'warning', duration);
  }
}
