import { Component, inject } from '@angular/core';
import { IdiomaService } from '../../../../i18n/idioma.service';
import { PROJETOS } from './projetos.data';

@Component({
  selector: 'app-projetos',
  imports: [],
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.css'
})
export class ProjetosComponent {
  private idiomaService = inject(IdiomaService);
  idioma = this.idiomaService.idioma;
  t = this.idiomaService.t;
  projetos = PROJETOS;
}
