import { Component } from '@angular/core';
import { EmailService } from '../../service/email.service';

@Component({
  selector: 'app-sous-categorie',
  templateUrl: './sous-categorie.component.html',
  styleUrls: ['./sous-categorie.component.css'],
})
export class SousCategorieComponent {
  subject: string = '';
  email: string = '';
  message: string = '';

  constructor(private emailService: EmailService) {}

  onSubmit() {
    this.emailService
      .sendEmail(this.subject, this.email, this.message)
      .subscribe(
        (response) => {
          console.log('Email sent successfully!');
        },
        (error) => {
          console.log('Error sending email:', error);
        }
      );
  }
}
