import { Component, inject } from '@angular/core';
import { IdiomaService } from '../../../../i18n/idioma.service';
import { EXPERIENCIAS } from './experiencia.data';

@Component({
  selector: 'app-experiencia',
  imports: [],
  templateUrl: './experiencia.component.html',
  styleUrl: './experiencia.component.css'
})
export class ExperienciaComponent {
  private idiomaService = inject(IdiomaService);
  idioma = this.idiomaService.idioma;
  t = this.idiomaService.t;
  experiencias = EXPERIENCIAS;
}
