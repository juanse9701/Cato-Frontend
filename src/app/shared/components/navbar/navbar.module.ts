import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectLanguageComponent } from './select-language/select-language.component';

@NgModule({
  declarations: [NavbarComponent, SelectLanguageComponent],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  exports: [NavbarComponent]
})
export class NavbarModule {}
