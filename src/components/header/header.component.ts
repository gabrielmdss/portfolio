import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [CommonModule],
  standalone: true,
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  menuAberto = false;

  toggleMenu(): void {
    this.menuAberto = !this.menuAberto;
  }
}
