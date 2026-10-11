import { Component, inject } from '@angular/core';
import { IdiomaService } from '../../../../i18n/idioma.service';

@Component({
  selector: 'app-informacoes-pessoais',
  imports: [],
  templateUrl: './informacoes-pessoais.component.html',
  styleUrl: './informacoes-pessoais.component.css'
})
export class InformacoesPessoaisComponent {
  t = inject(IdiomaService).t;
}
