import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
})
export class NavbarComponent implements OnInit {
  selectedLink: string = '';

  constructor(
    private readonly navbarService: NavbarService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    const pathname = location.pathname.replace('/', '');
    console.log(pathname);
    this.selectedLink = pathname === '' ? 'skills' : pathname;
    this.navbarService.updateLink(this.selectedLink);
    this.navbarService.link.subscribe((l) => (this.selectedLink = l));
  }

  handleClick(link: string) {
    this.navbarService.updateLink(link);
  }
}
