import { Injectable } from '@angular/core';
import axios, { AxiosResponse } from 'axios';

@Injectable()
export class EmailService {
  sendEmail(
    email: string,
    fullname: string,
    body: string
  ): Promise<AxiosResponse> {
    return axios.get(
      `https://lucas-portfolio-send-email.azurewebsites.net/api/send-email?fullname=${fullname}&email=${email}&body=${body}}`
    );
  }
}
