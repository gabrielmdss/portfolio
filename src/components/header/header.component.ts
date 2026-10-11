import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { IdiomaService } from '../../i18n/idioma.service';
import { Idioma } from '../../i18n/traducoes';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [CommonModule],
  standalone: true,
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  private idiomaService = inject(IdiomaService);
  idioma = this.idiomaService.idioma;
  t = this.idiomaService.t;

  menuAberto = false;

  toggleMenu(): void {
    this.menuAberto = !this.menuAberto;
  }

  fecharMenu(): void {
    this.menuAberto = false;
  }

  alterarIdioma(idioma: Idioma): void {
    this.idiomaService.alterar(idioma);
  }
}
