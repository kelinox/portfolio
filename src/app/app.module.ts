import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { SkillsComponent } from './skills/skills.component';
import { WorksComponent } from './works/works.component';
import { ImgChipComponent } from './core/img-chip/img-chip.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarService } from './services/navbar.service';
import { FormsModule } from '@angular/forms';
import { EmailService } from './services/email.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SkillsComponent,
    WorksComponent,
    ImgChipComponent,
    ContactComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [NavbarService, EmailService],
  bootstrap: [AppComponent],
})
export class AppModule {}
