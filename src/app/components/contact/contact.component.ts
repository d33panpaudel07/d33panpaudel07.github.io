import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastService } from '../../common/toast/toast.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  private readonly toastService = inject(ToastService);

  formData = { name: '', email: '', message: '' };
  submitted = false;

  async handleSubmit() {
    try {
      this.toastService.success(
        'Message sent to server. Connection closed by foreign host.',
      );
      const res = await fetch('https://formspree.io/f/mdawkjgb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(this.formData),
      });

      if (res.ok) {
        this.toastService.success(
          'Message sent to server. Connection closed by foreign host.',
        );
        this.formData = { name: '', email: '', message: '' };
      } else {
        this.toastService.error(
          `ERROR ${res.status}: Server rejected request. Try again later.`,
        );
      }
    } catch {
      this.toastService.error(
        'ERROR: Connection refused. Check your network and try again.',
      );
    }
  }
}
