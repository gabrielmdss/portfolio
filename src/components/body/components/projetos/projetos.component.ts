import { NgTemplateOutlet } from '@angular/common';
import { Component, inject } from '@angular/core';
import { IdiomaService } from '../../../../i18n/idioma.service';
import { InterativoDirective } from '../../../../animacoes/interativo.directive';
import { RevelarDirective } from '../../../../animacoes/revelar.directive';
import { PROJETOS } from './projetos.data';

@Component({
  selector: 'app-projetos',
  imports: [NgTemplateOutlet, RevelarDirective, InterativoDirective],
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.css'
})
export class ProjetosComponent {
  private idiomaService = inject(IdiomaService);
  idioma = this.idiomaService.idioma;
  t = this.idiomaService.t;
  emDestaque = PROJETOS.filter((projeto) => projeto.imagem);
  outros = PROJETOS.filter((projeto) => !projeto.imagem);
}
