import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../shared/api.service';

interface Contact {
  name: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contact: Contact = {
    name: '',
    email: '',
    message: ''
  };

  showFeedbackMessage = {
    success: false,
    error: false,
    message: ''
  }

  constructor(private apiService: ApiService) {}

  handleSubmit(event: Event): void {
    event.preventDefault();
    if (!this.validateForm()) {
      return;
    }

    this.apiService.postData('inquiry', this.contact).subscribe(
      (response) => {
        if (response.message === "Workflow was started") {
          this.showFeedbackMessage.success = true;
          this.showFeedbackMessage.error = false;
          this.showFeedbackMessage.message = "Thank you for reaching out! We will contact you soon.";
          this.resetForm();
        }
      },
      (error) => {
        console.error('Error sending data to API:', error);
        this.showFeedbackMessage.success = false;
        this.showFeedbackMessage.error = true;
        this.showFeedbackMessage.message = "Something went wrong. Please try again later.";
      }
    )    
  }

  resetForm() {
    this.contact = {
      name: '',
      email: '',
      message: ''
    };
  }

  validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  validateForm(): boolean {
    if (!this.contact.name || !this.contact.email || !this.contact.message) {
      return false;
    }
    if (!this.validateEmail(this.contact.email)) {
      return false;
    }
    return true;
  }
}
