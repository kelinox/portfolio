import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from '../services/navbar.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.sass'],
})
export class SkillsComponent implements OnInit {
  constructor(
    private router: Router,
    private readonly navbarService: NavbarService
  ) {}

  ngOnInit(): void {}

  goToWorks() {
    this.router.navigate(['/works']).then(() => {
      this.navbarService.updateLink('works');
    });
  }
}
