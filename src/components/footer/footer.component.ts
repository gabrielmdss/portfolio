import { Component, inject } from '@angular/core';
import { IdiomaService } from '../../i18n/idioma.service';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  t = inject(IdiomaService).t;
  anoAtual = new Date().getFullYear();
}
