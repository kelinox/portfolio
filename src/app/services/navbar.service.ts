import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class NavbarService {
  private linkSource = new BehaviorSubject<string>(
    localStorage.getItem('link') || 'skills'
  );

  link = this.linkSource.asObservable();

  constructor() {}

  updateLink(link: string) {
    this.linkSource.next(link);
    localStorage.setItem('link', link);
  }
}
