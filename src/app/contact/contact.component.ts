import { Component, OnInit } from '@angular/core';
import { EmailService } from '../services/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass'],
})
export class ContactComponent implements OnInit {
  email: string = '';
  fullname: string = '';
  body: string = '';

  constructor(private readonly emailService: EmailService) {}

  ngOnInit(): void {}

  sendEmail() {
    console.log(this.email);
    console.log(this.fullname);
    console.log(this.body);
    if (
      this.email.length > 0 &&
      this.fullname.length > 0 &&
      this.body.length > 0
    ) {
      this.emailService
        .sendEmail(this.email, this.fullname, this.body)
        .then((r) => {
          console.log(r);
        });
    }
  }
}
