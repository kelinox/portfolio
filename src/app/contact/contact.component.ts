import { Component, OnInit } from '@angular/core';
import { EmailService } from '../services/email.service';
import { MDCSnackbar } from '@material/snackbar';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass'],
})
export class ContactComponent implements OnInit {
  email: string = '';
  fullname: string = '';
  body: string = '';
  snackbar!: MDCSnackbar;
  sending = false;

  constructor(private readonly emailService: EmailService) {}

  ngOnInit(): void {
    this.snackbar = new MDCSnackbar(document.querySelector('.mdc-snackbar')!);
  }

  sendEmail() {
    if (
      this.email.length > 0 &&
      this.fullname.length > 0 &&
      this.body.length > 0
    ) {
      this.sending = true;
      this.emailService
        .sendEmail(this.email, this.fullname, this.body)
        .then((r) => {
          if (r.status === 500) {
            this.emailService
              .sendEmail(this.email, this.fullname, this.body)
              .then((r2) => {
                if (r2.status === 200) {
                  this.snackbar.open();
                  this.sending = false;
                }
              });
          } else if (r.status === 200) {
            this.snackbar.open();
            this.sending = false;
          }
        });
    }
  }
}
