import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  menuAberto = false;

  toggleMenu(): void {
    this.menuAberto = !this.menuAberto;
  }
}
